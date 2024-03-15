import { Search, Ul } from "./styled_components"
import { Card } from "../card"
import { useState, useRef } from "react"
import { debounce } from "lodash"
import InfiniteScroll from "react-infinite-scroller"

export const Cards = ({ recipes }) => {
  let filterRecipes = recipes
  const [currentRecipes, setCurrentRecipes] = useState(filterRecipes.slice(0, 4))

  const loadRecipes = (page) => {
    if (filterRecipes.length >= page*4) {
      setCurrentRecipes(currentRecipes.concat(filterRecipes.slice(page*4, page*4 + 4)))
    }
  }

  const searchRecipe = (value) => {
    if (value !== "") {
      filterRecipes = recipes.filter((recipe) => 
        recipe.name.toLowerCase().includes(value.toLowerCase())
      )
    } else {
      filterRecipes = recipes
    }
    setCurrentRecipes(filterRecipes.slice(0,4))
  }

  const debounceSearch = useRef(
    debounce((value) => {searchRecipe(value)}, 1000)
  ).current;

  const handleChange = (event) => {
    debounceSearch(event.target.value)
  }

  return (
    <>
      <Search
        placeholder="Поиск"
        onChange={(event) => { handleChange(event)}}
      />
      <InfiniteScroll
        threshold={0}
        pageStart={0}
        loadMore={loadRecipes}
        hasMore={true}
        loader={InfiniteScroll.setDefaultLoader}
      >
        <Ul>
          {currentRecipes.map((recipe) => (
            <li key={recipe.id}>
              <Card recipe={recipe} />
            </li>
          ))}
        </Ul>
      </InfiniteScroll>
    </>
  )
}
