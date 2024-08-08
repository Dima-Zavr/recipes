import * as S from "./PageHeader_components"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { SunIcon } from "../../assets/SunIcon"
import { ProfileIcon } from "../../assets/ProfileIcon"
import { MoonIcon } from "../../assets/MoonIcon"
import { useDispatch, useSelector } from "react-redux"
import { selectTheme, toggleTheme } from "../../store/themeSlice"
import { darkTheme, lightTheme } from "../../styles/theme.ts"

export const PageHeader = () => {
    const dispatch = useDispatch()
    const theme = useSelector(selectTheme)
    const nav = useNavigate()

    const changeTheme = () => {
        if (theme.type === "light") {
            dispatch(toggleTheme(darkTheme))
            localStorage.setItem("theme", "dark")
        } else {
            dispatch(toggleTheme(lightTheme))
            localStorage.setItem("theme", "light")
        }
    }
    const profileClick = () => {
        if (!!localStorage.getItem("token")) {
            nav("/profile")
        } else {
            nav("/signin")
        }
    }

    return (
        <>
            <S.Container>
                <S.Header>
                    <S.Left>
                        <S.Logo src={logo} alt="website logo" />
                        <NavLink to="allRecipes">
                            <S.Title>Все рецепты</S.Title>
                        </NavLink>
                        <NavLink to="myRecipes">
                            <S.Title>Мои рецепты</S.Title>
                        </NavLink>
                        <NavLink to="likeRecipes">
                            <S.Title>Избранные рецепты</S.Title>
                        </NavLink>
                    </S.Left>
                    <S.Right>
                        <S.Theme onClick={changeTheme}>
                            {theme.type === "light" && <SunIcon />}
                            {theme.type === "dark" && <MoonIcon />}
                        </S.Theme>
                        <S.Profile onClick={profileClick}>
                            <ProfileIcon />
                            {!!localStorage.getItem("token") ? "Профиль" : "Войти"}
                        </S.Profile>
                    </S.Right>
                </S.Header>
            </S.Container>
            <Outlet />
        </>
    )
}
