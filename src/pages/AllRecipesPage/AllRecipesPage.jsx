import { useDispatch, useSelector } from "react-redux";
import { RecipeCards } from "../../components/RecipeCards/RecipeCards.tsx";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import {
    addAllRecipes,
    changeAllFilters,
    changeAllSearch,
    selectAllFilters,
    selectAllRecipesData
} from "../../store/allRecipesSlice";
import { Filters } from "../../components/Filters/Filters";
import { Search } from "../../components/RecipeCards/RecipeCards_components";
import { debounce } from "lodash";

export const AllRecipesPage = () => {
    const recipesData = useSelector(selectAllRecipesData);
    const filters = useSelector(selectAllFilters);
    const dispatch = useDispatch();

    const searchRecipe = (value) => {
        dispatch(changeAllSearch(value.toLowerCase()));
    };

    const debounceSearch = debounce(searchRecipe, 1000);

    return (
        <PageLayout>
            <h1>Все Рецепты</h1>
            <Filters
                key={JSON.stringify(filters)}
                filters={filters}
                changeFilters={changeAllFilters}
            />
            <Search
                placeholder="Поиск"
                defaultValue={recipesData.search}
                onChange={(event) => debounceSearch(event.target.value)}
            />
            <RecipeCards recipesData={recipesData} filters={filters} addRecipes={addAllRecipes} />
        </PageLayout>
    );
};
