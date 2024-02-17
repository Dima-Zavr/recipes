import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage } from "./pages/main-page";
import { AllRecipesPage } from "./pages/all-recipes-page";
import { MyRecipesPage } from "./pages/my-recipes-page";
import { FavouriteRecipesPage } from "./pages/favourite-recipes-page";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="allRecipes" element={<AllRecipesPage />} />
        <Route path="myRecipes" element={<MyRecipesPage />} />
        <Route path="favouriteRecipes" element={<FavouriteRecipesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
