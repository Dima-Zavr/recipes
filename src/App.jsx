import { useSelector } from "react-redux"
import { selectTheme } from "./store/themeSlice"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import GlobalStyles from "./styles/global"
import { ThemeProvider } from "styled-components"
import { PageHeader } from "./components/PageHeader/PageHeader"
import { AllRecipesPage } from "./pages/AllRecipesPage/AllRecipesPage"
import { MyRecipesPage } from "./pages/MyRecipesPage/MyRecipesPage"
import { LikeRecipesPage } from "./pages/LikeRecipesPage/LikeRecipesPage"
import { RecipePage } from "./pages/RecipePage/RecipePage"
import { api } from "./api/api"

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageHeader />,
        children: [
            {
                path: "allRecipes",
                element: <AllRecipesPage />
            },
            {
                path: "myRecipes",
                element: <MyRecipesPage />
            },
            {
                path: "likeRecipes",
                element: <LikeRecipesPage />
            },
            {
                path: "recipe/:recipeId",
                element: <RecipePage />,
                loader: async ({ params }) => {
                    return await api
                        .get("/recipes?id=" + params.recipeId)
                        .then((response) => response)
                }
            }
        ]
    }
])

export const App = () => {
    const theme = useSelector(selectTheme)
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
            <GlobalStyles />
        </ThemeProvider>
    )
}
