import * as S from "./PageHeader_components"
import { Outlet } from "react-router-dom"
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

    const changeTheme = () => {
        if (theme.type === "light") {
            dispatch(toggleTheme(darkTheme))
            localStorage.setItem("theme", "dark")
        } else {
            dispatch(toggleTheme(lightTheme))
            localStorage.setItem("theme", "light")
        }
    }

    return (
        <>
            <S.Container>
                <S.Header>
                    <S.Left>
                        <S.Logo src={logo} alt="website logo" />
                        <S.Title to="allRecipes">Все рецепты</S.Title>
                        {!!localStorage.getItem("accessToken") && (
                            <>
                                <S.Title to="myRecipes">Мои рецепты</S.Title>
                                <S.Title to="likeRecipes">Избранные рецепты</S.Title>
                            </>
                        )}
                    </S.Left>
                    <S.Right>
                        <S.Theme onClick={changeTheme}>
                            {theme.type === "light" ? <SunIcon /> : <MoonIcon />}
                        </S.Theme>
                        <S.Profile
                            to={!!localStorage.getItem("accessToken") ? "/profile" : "/signin"}
                        >
                            <ProfileIcon />
                            {!!localStorage.getItem("accessToken") ? "Профиль" : "Войти"}
                        </S.Profile>
                    </S.Right>
                </S.Header>
            </S.Container>
            <Outlet />
        </>
    )
}
