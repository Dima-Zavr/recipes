import { Search, Ul } from '../styled-components';
import { Card } from '../card'
import { useState } from 'react'
import _ from 'lodash';

export const Cards = ({recipes}) => {
    const [thisRecipes, setThisRecipes] = useState(recipes)
    const newRecipes = []
    function SearchRecipe (event) {
        if(event.target.value != ""){
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
            <Ul>
                {thisRecipes.map((recipe) => (
                    <li key={recipe.id}>
                        <Card recipe={recipe}></Card>
                    </li>
                ))}
            </Ul>
        </>
    );
}
