import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AllRecipesPage } from "./pages/all-recipes-page";
import { MyRecipesPage } from "./pages/my-recipes-page";
import { FavouriteRecipesPage } from "./pages/favourite-recipes-page";
import { PageHeader } from "./components/page-header";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <PageHeader></PageHeader>
      <Routes>
        <Route path="*" element={<AllRecipesPage />} />
        <Route path="myRecipes" element={<MyRecipesPage />} />
        <Route path="favouriteRecipes" element={<FavouriteRecipesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
