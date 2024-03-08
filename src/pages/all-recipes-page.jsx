import { useSelector } from "react-redux"
import { Page, Container, Title } from "../components/styled-components"
import { Cards } from "../components/cards"

export const AllRecipesPage = () => {
  const allRecipes = useSelector((state) => state.all.allRecipes)
  return(
    <Page>
      <Container>
        <Title>Рецепты</Title>
        <Cards recipes={allRecipes} />
      </Container>
    </Page>
  )
}