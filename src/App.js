import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PageHeader } from "./components/page-header"
import { AllRecipesPage } from "./pages/all-recipes-page"
import { MyRecipesPage } from "./pages/my-recipes-page"
import { FavouriteRecipesPage } from "./pages/favourite-recipes-page"
import { RecipePage } from "./pages/recipe-page"
import './App.css'

//import {loader as recipeLoader} from "./pages/recipe-page";
import recipes from './api/recipes.json'

function App() {
  const allRecipes = recipes.allRecipes;
  return (
    <BrowserRouter>
      <PageHeader></PageHeader>
      <Routes>
        <Route path="*" element={<AllRecipesPage />} />
        <Route path="myRecipes" element={<MyRecipesPage />} />
        <Route path="favouriteRecipes" element={<FavouriteRecipesPage />} />
        {allRecipes.map((recipe) => (
          <Route 
            path={"recipe/" + recipe.id}
            element={<RecipePage recipe={recipe} />}
            key={recipe.id}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
