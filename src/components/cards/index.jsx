import { Search, Ul } from '../styled-components';
import { Card } from '../card'
import { useState } from 'react'
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroller'

export const Cards = ({recipes}) => {

    const [thisRecipes, setThisRecipes] = useState(recipes.slice(0, 4))

    const loadRecipes = (page) => {
        setTimeout(() => {
            if(recipes.length >= page*4){
                setThisRecipes(thisRecipes.concat(recipes.slice(page*4, page*4+4)))
            }
        }, 500)
    }

    const newRecipes = []
    function SearchRecipe (event) {
        if(event.target.value !== ""){
            _.filter(recipes, function(item) {
                if(item.name.toLowerCase().includes(event.target.value.toLowerCase())){
                    newRecipes.push(item)
                }
            })
            setThisRecipes(newRecipes)
        }else{
            setThisRecipes(recipes)
        }
    }

    return (
        <>
            <Search placeholder="Поиск"onChange={(e) => {SearchRecipe(e)}} />
            <InfiniteScroll
                threshold={0}
                pageStart={0}
                loadMore={loadRecipes}
                hasMore={true}
                loader={InfiniteScroll.setDefaultLoader}
            >
                <Ul>
                    {thisRecipes.map((recipe) => (
                        <li key={recipe.id}>
                            <Card recipe={recipe} ></Card>
                        </li>
                    ))}
                </Ul>
            </InfiniteScroll>
        </>
    );
}
