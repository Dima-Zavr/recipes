import { useSelector } from "react-redux"
import { Page, Container, Title } from "../components/styled-components"
import { Cards } from "../components/cards"

export const MyRecipesPage = () => {
  const myRecipes = useSelector((state) => state.my.myRecipes)
  return(
    <Page>
      <Container>
        <Title>Рецепты</Title>
        <Cards recipes={myRecipes} />
      </Container>
    </Page>
  )
}