import recipes from '../api/recipes.json'
import { Cards } from '../components/cards'
import {Page, Container, Title } from '../components/styled-components'

export const MyRecipesPage = () => (
  <Page>
    <Container>
      <Title>Рецепты</Title>
      <Cards recipes={recipes.myRecipes} />
    </Container>
  </Page>
)
