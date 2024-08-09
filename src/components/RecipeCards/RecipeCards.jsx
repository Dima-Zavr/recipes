import { Search, Ul } from "./RecipeCards_components"
import { RecipeCard } from "../RecipeCard/RecipeCard"
import { Preloader } from "../Preloader/Preloader"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { debounce } from "lodash"
import InfiniteScroll from "react-infinite-scroller"
import { api } from "../../api/api"

export const RecipeCards = ({ recipes, addRecipes, deleteRecipes }) => {
    let pathName = useLocation().pathname
    const dispatch = useDispatch()
    const [isHasMore, setIsHasMore] = useState(true)

    const searchRecipe = (value) => {
        dispatch(deleteRecipes(value.toLowerCase()))
        setIsHasMore(true)
    }

    const debounceSearch = debounce(searchRecipe, 1000)

    const loadRecipes = () => {
        api.get(
            pathName,
            {
                name_like: recipes.searchStr,
                _page: recipes.page,
                _limit: recipes.limit,
                userId: localStorage.getItem("userId")
            },
            localStorage.getItem("token")
        ).then((data) => {
            if (data?.length !== 0) {
                data?.map((el) => {
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
                defaultValue={recipes.searchStr}
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
                    {recipes.recipes?.map((recipe, i) => (
                        <li key={i}>
                            <RecipeCard recipe={recipe} />
                        </li>
                    ))}
                </Ul>
            </InfiniteScroll>
        </>
    )
}
