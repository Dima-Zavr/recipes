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
    search: string
    time_min: number
    time_max: number
    cal_min: number
    cal_max: number
    _page: string
    _limit: string
}

export const RecipeCards = ({ data, addRecipes, deleteRecipes, changeFilters }) => {
    let pathName = useLocation().pathname
    const dispatch = useDispatch()
    const [isHasMore, setIsHasMore] = useState(true)

    let params: IParams = Object.assign(JSON.parse(JSON.stringify(data.filters)), {
        _page: data.page,
        _limit: data.limit
    })

    const searchRecipe = (value) => {
        dispatch(deleteRecipes(value.toLowerCase()))
        setIsHasMore(true)
    }

    const debounceSearch = debounce(searchRecipe, 1000)

    const loadRecipes = () => {
        api.get(
            "/recipes/card_recipes" + pathName,
            params,
            localStorage.getItem("accessToken")
        ).then((response) => {
            if (response?.recipes?.length !== 0) {
                response?.recipes?.map((el) => {
                    dispatch(addRecipes(el))
                })
                console.log(" filters", response.meta.filters)
                dispatch(changeFilters(response.meta.filters))
            } else {
                setIsHasMore(false)
            }
        })
    }

    return (
        <>
            <Search
                placeholder="Поиск"
                defaultValue={data.search}
                onChange={(event) => debounceSearch(event.target.value)}
            />
            <InfiniteScroll
                threshold={400}
                pageStart={0}
                loadMore={loadRecipes}
                hasMore={isHasMore}
                loader={<Preloader key={0} />}
            >
                <Ul>
                    {data.recipes?.map((recipe) => (
                        <li key={recipe._id}>
                            <RecipeCard recipe={recipe} />
                        </li>
                    ))}
                </Ul>
            </InfiniteScroll>
        </>
    )
}
