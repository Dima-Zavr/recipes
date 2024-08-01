import { Header, Container, Logo, Links, MyLink } from "./PageHeader_components"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"

export const PageHeader = () => {
    return (
        <Header>
            <Container>
                <Logo src={logo} alt="website logo" />
                <Links>
                    <Link to="allRecipes">
                        <MyLink>Все рецепты</MyLink>
                    </Link>
                    <Link to="myRecipes">
                        <MyLink>Мои рецепты</MyLink>
                    </Link>
                    <Link to="likeRecipes">
                        <MyLink>Избранные рецепты</MyLink>
                    </Link>
                </Links>
                <Logo src={logo} alt="website logo" />
            </Container>
        </Header>
    )
}
