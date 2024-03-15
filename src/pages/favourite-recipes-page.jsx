import { useSelector } from "react-redux"
import { Page, Container, Title } from "../components/styled-components"
import { Cards } from "../components/cards"

export const FavouriteRecipesPage = () => {
  const favouriteRecipes = useSelector((state) => state.favourite.favouriteRecipes)
  return (
    <Page>
      <Container>
        <Title>Рецепты</Title>
        <Cards recipes={favouriteRecipes} />
      </Container>
    </Page>
  )
}
