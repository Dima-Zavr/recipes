import { Search, Ul } from "./RecipeCards_components"
import { RecipeCard } from "../RecipeCard/RecipeCard"
import { Preloader } from "../Preloader/Preloader"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { connect, useDispatch } from "react-redux"
import { debounce } from "lodash"
import InfiniteScroll from "react-infinite-scroller"
import { api } from "../../api/api"

function RecipeCards(props) {
    let pathName = useLocation().pathname
    const dispatch = useDispatch()
    const [isHasMore, setIsHasMore] = useState(true)

    const searchRecipe = (value) => {
        dispatch(props.deleteRecipes(value.toLowerCase()))
        setIsHasMore(true)
    }

    const debounceSearch = debounce(searchRecipe, 1000)

    const loadRecipes = () => {
        api.get(pathName, {
            name_like: props.searchStr,
            _page: props.page,
            _limit: props.limit
        }).then((data) => {
            if (data != "") {
                data?.map((el) => {
                    dispatch(props.addRecipes(el))
                })
            } else {
                setIsHasMore(false)
            }
        })
    }

    return (
        <>
            <Search
                placeholder="Поиск"
                defaultValue={props.searchStr}
                onChange={(event) => debounceSearch(event.target.value)}
            />
            <InfiniteScroll
                threshold={400}
                pageStart={0}
                loadMore={loadRecipes}
                hasMore={isHasMore}
                loader={<Preloader />}
            >
                <Ul>
                    {props.item?.map((recipe, i) => (
                        <li key={i}>
                            <RecipeCard recipe={recipe} />
                        </li>
                    ))}
                </Ul>
            </InfiniteScroll>
        </>
    )
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
    if (ownProps.likeRecipes) {
        itemState = state.like.likeRecipes
        page = state.like.page
        searchStr = state.like.searchStr
    }
    return {
        item: itemState,
        page: page,
        searchStr: searchStr,
        limit: 6,
        addRecipes: ownProps.addRecipes,
        deleteRecipes: ownProps.deleteRecipes
    }
}
export default connect(mapStateToProps)(RecipeCards)
