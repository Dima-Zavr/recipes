import {Search, Ul} from "./styled_components"
import {Card} from "../card"
import {useState, useRef} from "react"
import {debounce} from "lodash"
import InfiniteScroll from "react-infinite-scroller"
import {request} from "../../api/recipes"
import {useLocation} from "react-router-dom"

export const Cards = () => {
    const [currentRecipes, setCurrentRecipes] = useState([])

    let typeRecipes = useLocation().pathname
    if (typeRecipes === "/") { typeRecipes = "/allRecipes" }

    const [isHasMore, setIsHasMore] = useState(true)
    const [nameFilter, setNameFilter] = useState("?")
    const [page, setPage] = useState(1)
    let str= ""

    const searchRecipe = (value) => {
        setCurrentRecipes([])
        setNameFilter("?name_like="+value.toLowerCase())
        console.log(nameFilter)
    }

    const loadRecipes = (page) => {
        str = typeRecipes + nameFilter + "&_page=" + page + "&_limit=4"
        console.log(str)
        request
            .fetch(str)
            .then((response) => response.json())
            .then((data) => {
                if (data != '') {
                    setCurrentRecipes(currentRecipes.concat(data))
                    setPage(page+1)
                }
                else{
                    setIsHasMore(false)
                }
            })
    }

    const debounceSearch = useRef(
        debounce((value) => {
            searchRecipe(value)
        }, 1000)
    ).current

    const handleChange = (event) => {
        debounceSearch(event.target.value)
        setPage(1)
        setIsHasMore(true)
    }

    return (
        <>
            <Search
                placeholder="Поиск"
                onChange={(event) => {handleChange(event)}}
            />
            <InfiniteScroll
                threshold={0}
                pageStart={0}
                loadMore={() => loadRecipes(page)}
                hasMore={isHasMore}
                loader={InfiniteScroll.setDefaultLoader}
            >
                <Ul>
                    {currentRecipes.map((recipe) => (
                        <li key={recipe.id}>
                            <Card recipe={recipe}/>
                        </li>
                    ))}
                </Ul>
            </InfiniteScroll>
        </>
    )
}
