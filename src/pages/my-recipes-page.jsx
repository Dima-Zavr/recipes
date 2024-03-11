import { useSelector } from "react-redux"
import { Page, Container, Title } from "../components/styled-components"
import { Cards } from "../components/cards"
import { useState } from "react"
import { Button } from "../components/btn"
import { ModalForm } from "../components/form/index"

export const MyRecipesPage = () => {
  const myRecipes = useSelector((state) => state.my.myRecipes)
  const [isModal, setIsModal] = useState(false)

  const test = () => {
    setIsModal(!isModal)
  }
  return (
    <Page>
      <Container>
        <Button onClick={test}> Добавить свой рецепт</Button>
        <Title>Рецепты</Title>
        <Cards recipes={myRecipes} />
        {isModal && <ModalForm clickExit={() => setIsModal(false)} />}
      </Container>
    </Page>
  )
}
