import recipes from '../api/recipes.json'
import {Page, Container, Title } from '../components/styled-components'
import { Cards } from '../components/cards'

export const AllRecipesPage = () => (
  <Page>
    <Container>
      <Title>Рецепты</Title>
      <Cards recipes={recipes.allRecipes} />
    </Container>
  </Page>
)
