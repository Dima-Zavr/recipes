import { ThemeProvider } from "styled-components";

import { useSelector } from "react-redux";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { api } from "./api/api";
import { PageHeader } from "./components/PageHeader/PageHeader";
import { AddRecipePage } from "./pages/AddRecipePage/AddRecipePage";
import { AllRecipesPage } from "./pages/AllRecipesPage/AllRecipesPage";
import { LikeRecipesPage } from "./pages/LikeRecipesPage/LikeRecipesPage";
import { MyRecipesPage } from "./pages/MyRecipesPage/MyRecipesPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RecipePage } from "./pages/RecipePage/RecipePage";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { selectTheme } from "./store/themeSlice";
import GlobalStyles from "./styles/global";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageHeader />,
        children: [
            {
                path: "",
                element: <Navigate to="/allRecipes" replace={true} />
            },
            {
                path: "allRecipes",
                element: <AllRecipesPage />
            },
            {
                path: "myRecipes",
                element: <MyRecipesPage />
            },
            {
                path: "addRecipe",
                element: <AddRecipePage />
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
                        .get(
                            "/recipes/inf_recipe/" + params.recipeId,
                            {},
                            localStorage.getItem("accessToken")
                        )
                        .then((response) => response);
                }
            },
            {
                path: "profile",
                element: <ProfilePage />,
                loader: async () => {
                    return await api
                        .get("/user/get_data", {}, localStorage.getItem("accessToken"))
                        .then((response) => response);
                }
            }
        ]
    },
    {
        path: "/signup",
        element: <SignUpPage />
    },
    {
        path: "/signin",
        element: <SignInPage />
    }
]);

export const App = () => {
    const theme = useSelector(selectTheme);
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
            <GlobalStyles />
        </ThemeProvider>
    );
};
