import { Routes, Route, Navigate } from "react-router-dom"
import { PageHeader } from "./components/PageHeader/PageHeader"
import { AllRecipesPage } from "./pages/AllRecipesPage"
import { MyRecipesPage } from "./pages/MyRecipesPage"
import { LikeRecipesPage } from "./pages/LikeRecipesPage"
import { RecipePage } from "./pages/RecipePage"
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop"

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
