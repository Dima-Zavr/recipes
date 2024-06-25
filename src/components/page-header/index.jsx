import {Link} from "react-router-dom"
import logo from "../../assets/logo.svg"
import {Header, Container, Logo, Links, MyLink} from "./styled_components"

export const PageHeader = () => {
    return (
        <Header>
            <Container>
                <Logo src={logo} alt="website logo"/>
                <Links>
                    <Link to="/">
                        <MyLink>Все рецепты</MyLink>
                    </Link>
                    <Link to="myRecipes">
                        <MyLink>Мои рецепты</MyLink>
                    </Link>
                    <Link to="favouriteRecipes">
                        <MyLink>Избранные рецепты</MyLink>
                    </Link>
                </Links>
                <Logo src={logo} alt="website logo"/>
            </Container>
        </Header>
    )
}
