import { Container, Header, Left, Logo, Right, Title } from "./PageHeader_components"
import { NavLink, Outlet } from "react-router-dom"
import logo from "../../assets/logo.svg"

export const PageHeader = () => {
    return (
        <>
            <Container>
                <Header>
                    <Left>
                        <Logo src={logo} alt="website logo" />
                        <NavLink to="allRecipes">
                            <Title>Все рецепты</Title>
                        </NavLink>
                        <NavLink to="myRecipes">
                            <Title>Мои рецепты</Title>
                        </NavLink>
                        <NavLink to="likeRecipes">
                            <Title>Избранные рецепты</Title>
                        </NavLink>
                    </Left>
                    <Right>
                        <></>
                        <div></div>
                    </Right>
                </Header>
            </Container>
            <Outlet />
        </>
    )
}
