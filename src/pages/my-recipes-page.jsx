import { store } from '../store/store'
import { Cards } from '../components/cards'
import {Page, Container, Title } from '../components/styled-components'

export const MyRecipesPage = () => (
  <Page>
    <Container>
      <Title>Рецепты</Title>
      <Cards recipes={store.getState().my.myRecipes} />
    </Container>
  </Page>
)
