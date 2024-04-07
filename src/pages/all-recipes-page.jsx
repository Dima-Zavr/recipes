import { Page, Container, Title } from "../components/styled-components"
import { Cards } from "../components/cards"

export const AllRecipesPage = () => {
  return (
    <Page>
      <Container>
        <Title>Рецепты</Title>
        <Cards/>
      </Container>
    </Page>
  )
}
