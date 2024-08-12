import { Search, Ul } from "./RecipeCards_components.js"
import { RecipeCard } from "../RecipeCard/RecipeCard.jsx"
import { Preloader } from "../Preloader/Preloader.jsx"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { debounce } from "lodash"
import InfiniteScroll from "react-infinite-scroller"
import { api } from "../../api/api.js"

interface IParams {
    name_like: string
    _page: string
    _limit: string
    like_like?: string
    userId?: string
}

export const RecipeCards = ({ data, addRecipes, deleteRecipes }) => {
    let pathName = useLocation().pathname
    const dispatch = useDispatch()
    const [isHasMore, setIsHasMore] = useState(true)

    let params: IParams = {
        name_like: data.searchStr,
        _page: data.page,
        _limit: data.limit
    }
    if (pathName === "/myRecipes") {
        params.userId = localStorage.getItem("userId")
    }
    if (pathName === "/likeRecipes") {
        params.like_like = localStorage.getItem("userId")
    }

    const searchRecipe = (value) => {
        dispatch(deleteRecipes(value.toLowerCase()))
        setIsHasMore(true)
    }

    const debounceSearch = debounce(searchRecipe, 1000)

    const loadRecipes = () => {
        api.get("/cardRecipes", params, localStorage.getItem("token")).then((response) => {
            if (response?.length !== 0) {
                response?.map((el) => {
                    dispatch(addRecipes(el))
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
                defaultValue={data.searchStr}
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
                    {data.recipes?.map((recipe, i) => (
                        <li key={i}>
                            <RecipeCard recipe={recipe} />
                        </li>
                    ))}
                </Ul>
            </InfiniteScroll>
        </>
    )
}
