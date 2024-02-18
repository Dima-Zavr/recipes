import recipes from '../api/recipes.json'
import styled from 'styled-components'
import { Card } from '../components/card'
import { useState } from 'react'
import _ from 'lodash';

const Page = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 100%;
  margin: 40px 0 40px;
`
const Container = styled.div`
  display: inline-flex;
  flex-direction:column;
  justify-content: center;
  max-width: 1440px;
  padding:0 40px;
  @media (max-width: 1439px){
    padding:0 30px;
  }
  @media (max-width: 1019px){
    padding:0 20px;
  }
`
const Title = styled.p`
  margin: 16px 0;
  padding: 0 15px;
  color: #141c24;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
`
const Search = styled.input`
  font-size: 20px;
  background-color: #ffffff;
  padding: 15px 20px;
  margin-bottom: 15px; 
  border-radius: 20px;
  border: 1px solid #82bd69;
  &:focus{
    outline:none;
  }
`
const Ul = styled.ul`
  display: grid;
  grid-template-columns: 310px 310px 310px 310px;
  gap: 40px 40px;
  list-style-type: none;
  @media (max-width: 1439px){
    grid-template-columns: 300px 300px 300px;
    gap: 40px 20px;
  }
  @media (max-width: 1019px){
    grid-template-columns: 300px 300px;
    gap: 30px 30px;
  }
  @media (max-width: 767px){
    grid-template-columns: 300px;
    gap: 20px;
  }
`

export const AllRecipesPage = () => {
  const [allRecipes, setAllRecipes] = useState(recipes.allRecipes)
  const newRecipes = []
  function SearchRecipe (event) {
    if(event.target.value != ""){
      _.filter(recipes.allRecipes, function(item) {
        if(item.name.toLowerCase().includes(event.target.value.toLowerCase())){
          newRecipes.push(item)
        }
      })
      setAllRecipes(newRecipes)
    }else{
      setAllRecipes(recipes.allRecipes)
    }
  }

  return (
    <Page>
      <Container>
        <Title>Рецепты</Title>
        <Search onChange={(e) => {SearchRecipe(e)}} />
        <Ul>
          {allRecipes.map((recipe) => (
            <li key={recipe.id}>
              <Card recipe={recipe}></Card>
            </li>
          ))}
        </Ul>
      </Container>
    </Page>
  );
}
