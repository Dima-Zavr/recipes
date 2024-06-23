import {Search, Ul} from "./styled_components"
import {Card} from "../card"
import {useState} from "react"
import {debounce} from "lodash"
import InfiniteScroll from "react-infinite-scroller"
import {GET} from "../../api/recipes"
import {useLocation} from "react-router-dom"
import {Preloader} from "../preloader";
import {connect, useDispatch} from "react-redux";

function Cards(props){
    let pathName = useLocation().pathname
    if(pathName === "/"){ pathName = "/allRecipes" }
    const dispatch = useDispatch()
    const [isHasMore, setIsHasMore] = useState(true)
    const [findName, setFindName] = useState("")

    const loadRecipes = () => {
        GET(pathName, {name_like: findName, _page:props.page, _limit:8}).then(data => {
            if (data != '') {
                data.map((el) => {
                    dispatch(props.addRecipes(el, props.page+1))
                })
            } else {
                setIsHasMore(false)
            }
        })
    }

    const searchRecipe = (value) => {
        dispatch(props.deleteRecipes())
        setFindName(value.toLowerCase())
    }

    const debounceSearch = debounce(searchRecipe, 500)

    const handleChange = (event) => {
        debounceSearch(event.target.value)
        setIsHasMore(true)
    }

    return (<>
            <Search
                placeholder="Поиск"
                onChange={event => handleChange(event)}
            />
            <InfiniteScroll
                threshold={300}
                pageStart={0}
                loadMore={loadRecipes}
                hasMore={isHasMore}
                loader={<Preloader/>}
            >
                <Ul>
                    {props.item?.map((recipe) => (
                        <li key={recipe.id}>
                            <Card recipe={recipe}/>
                        </li>
                    ))}
                </Ul>
            </InfiniteScroll>
    </>)
}

const mapStateToProps = (state, ownProps) => {
    let itemState = []
    let page = 1
    if(ownProps.allRecipes){
        itemState = state.all.allRecipes
        page = state.all.page
    }
    if(ownProps.myRecipes){
        itemState = state.my.myRecipes
        page = state.my.page
    }
    if(ownProps.favouriteRecipes){
        itemState = state.favourite.favouriteRecipes
        page = state.favourite.page
    }
    return{
        item: itemState,
        page: page,
        addRecipes: ownProps.addRecipes,
        deleteRecipes: ownProps.deleteRecipes
    }
}

export default connect(mapStateToProps)(Cards)