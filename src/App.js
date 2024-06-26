import { Routes, Route, Navigate } from "react-router-dom"
import { PageHeader } from "./components/page-header"
import { AllRecipesPage } from "./pages/all-recipes-page"
import { MyRecipesPage } from "./pages/my-recipes-page"
import { LikeRecipesPage } from "./pages/like-recipes-page"
import { RecipePage } from "./pages/recipe-page"
import { ScrollToTop } from "./components/scroll-to-top"

export const App = () => (
    <>
        <PageHeader />
        <Routes>
            <Route path="/">
                <Route index element={<Navigate to="allRecipes" replace />} />
                <Route path="allRecipes" element={<AllRecipesPage />} />
                <Route path="myRecipes" element={<MyRecipesPage />} />
                <Route path="likeRecipes" element={<LikeRecipesPage />} />
                <Route path="recipe/:recipeId" element={<RecipePage />} />
            </Route>
        </Routes>
        <ScrollToTop />
    </>
)
