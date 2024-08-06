import GlobalStyles from "./global"

import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { api } from "./api/api"
import { PageHeader } from "./components/PageHeader/PageHeader.jsx"
import { store } from "./store/store"
import { baseTheme } from "./theme"

import { AllRecipesPage } from "./pages/AllRecipesPage/AllRecipesPage"
import { LikeRecipesPage } from "./pages/LikeRecipesPage/LikeRecipesPage"
import { MyRecipesPage } from "./pages/MyRecipesPage/MyRecipesPage"
import { RecipePage } from "./pages/RecipePage/RecipePage"
import { ThemeProvider } from "styled-components"

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

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Provider store={store}>
        <ThemeProvider theme={baseTheme}>
            <RouterProvider router={router} />
            <GlobalStyles />
        </ThemeProvider>
    </Provider>
)
