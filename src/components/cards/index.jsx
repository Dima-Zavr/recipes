import { Search, Ul } from "./styled_components"
import { Card } from "../card"
import { useState } from "react"
import { debounce } from "lodash"
import InfiniteScroll from "react-infinite-scroller"
import { GET } from "../../api/request"
import { useLocation } from "react-router-dom"
import { Preloader } from "../preloader"
import { connect, useDispatch } from "react-redux"

function Cards(props) {
    let pathName = useLocation().pathname
    if (pathName === "/") { pathName = "/allRecipes" }
    if (pathName === "/favouriteRecipes") { pathName = "/allRecipes?like=true" }
    const dispatch = useDispatch()
    const [isHasMore, setIsHasMore] = useState(true)

    const searchRecipe = (value) => {
        dispatch(props.deleteRecipes(value.toLowerCase()))
        setIsHasMore(true)
    }

    const debounceSearch = debounce(searchRecipe, 500)

    const loadRecipes = () => {
        GET(pathName, { name_like: props.searchStr, _page: props.page, _limit: 8 }).then(data => {
            console.log(props.page)
            if (data != "") {
                data?.map((el) => {
                    dispatch(props.addRecipes(el))
                })
            } else {
                setIsHasMore(false)
            }
        })
    }

    return (<>
        <Search
            placeholder="Поиск"
            onChange={event => debounceSearch(event.target.value)}
        />
        <InfiniteScroll
            threshold={400}
            pageStart={0}
            loadMore={loadRecipes}
            hasMore={isHasMore}
            loader={<Preloader />}
        >
            <Ul>
                {props.item?.map((recipe) => (
                    <li key={recipe.id}>
                        <Card recipe={recipe} />
                    </li>
                ))}
            </Ul>
        </InfiniteScroll>
    </>)
}

const mapStateToProps = (state, ownProps) => {
    let itemState = []
    let page = 1
    let searchStr = ""
    if (ownProps.allRecipes) {
        itemState = state.all.allRecipes
        page = state.all.page
        searchStr = state.all.searchStr
    }
    if (ownProps.myRecipes) {
        itemState = state.my.myRecipes
        page = state.my.page
        searchStr = state.my.searchStr

    }
    if (ownProps.favouriteRecipes) {
        itemState = state.favourite.favouriteRecipes
        page = state.favourite.page
        searchStr = state.favourite.searchStr
    }
    return {
        item: itemState,
        page: page,
        searchStr: searchStr,
        addRecipes: ownProps.addRecipes,
        deleteRecipes: ownProps.deleteRecipes
    }
}
export default connect(mapStateToProps)(Cards)