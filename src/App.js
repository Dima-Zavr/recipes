import {Routes, Route} from "react-router-dom"
import {PageHeader} from "./components/page-header"
import {AllRecipesPage} from "./pages/all-recipes-page"
import {MyRecipesPage} from "./pages/my-recipes-page"
import {FavouriteRecipesPage} from "./pages/favourite-recipes-page"
import {RecipePage} from "./pages/recipe-page"
import {ScrollToTop} from "./components/scroll-to-top"
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {GET} from "./api/recipes";
import {addFavouriteRecipesAction} from "./store/favourite-reducer";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        GET("/favouriteRecipes")
            .then(data => {
                data.map((el) => {
                    dispatch(addFavouriteRecipesAction(el))
                })
            })
    }, []);
    return (<>
            <PageHeader/>
            <Routes>
                <Route path="/" element={<AllRecipesPage/>}/>
                <Route path="myRecipes" element={<MyRecipesPage/>}/>
                <Route path="favouriteRecipes" element={<FavouriteRecipesPage/>}/>
                <Route path="recipe/:recipeId" element={<RecipePage/>}/>
            </Routes>
            <ScrollToTop/>
    </>)
}

export default App
