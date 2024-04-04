import { Search, Ul } from "./styled_components"
import { Card } from "../card"
import { useState, useRef } from "react"
import { debounce } from "lodash"
import InfiniteScroll from "react-infinite-scroller"
import { request } from "../../api/recipes"
import { useLocation } from "react-router-dom"

export const Cards = ({ recipes }) => {
  const typeRecipes = useLocation()
  console.log(typeRecipes);
  if(typeRecipes.pathname === "/"){
    typeRecipes.pathname = "/allRecipes"
  }

  let filterRecipes = recipes
  const [currentRecipes, setCurrentRecipes] = useState(
    filterRecipes.slice(0, 4)
  )

  const loadRecipes = (page) => {
    const str=typeRecipes.pathname+"?_per_page=4&_page="+page
    request
      .fetch(str)
      .then((response) => response.json())
      .then((data) => {
        if (page<=data.pages) {
          setCurrentRecipes(
            currentRecipes.concat(data.data)
          )
        }
      })
  }

  const searchRecipe = (value) => {
    if (value !== "") {
      filterRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(value.toLowerCase())
      )
    } else {
      filterRecipes = recipes
    }
    setCurrentRecipes(filterRecipes.slice(0, 4))
  }

  const debounceSearch = useRef(
    debounce((value) => {
      searchRecipe(value)
    }, 1000)
  ).current

  const handleChange = (event) => {
    debounceSearch(event.target.value)
  }

  return (
    <>
      <Search
        placeholder="Поиск"
        onChange={(event) => {
          handleChange(event)
        }}
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
