import { useDispatch, useSelector } from "react-redux";

import {
    addLikeRecipes,
    changeLikeSearch,
    selectLikeRecipesData
} from "../../store/likeRecipesSlice";
import { debounce } from "lodash";
import { Search } from "../../components/RecipeCards/RecipeCards_components";
import { RecipeCards } from "../../components/RecipeCards/RecipeCards.tsx";
import { PageLayout } from "../../components/PageLayout/PageLayout";

export const LikeRecipesPage = () => {
    const recipesData = useSelector(selectLikeRecipesData);
    const dispatch = useDispatch();

    const searchRecipes = (value) => {
        dispatch(changeLikeSearch(value.toLowerCase()));
    };

    const debounceSearch = debounce(searchRecipes, 1000);

    return (
        <PageLayout>
            <h1>Избранные Рецепты</h1>
            <Search
                placeholder="Поиск"
                defaultValue={recipesData.search}
                onChange={(event) => debounceSearch(event.target.value)}
            />
            <RecipeCards recipesData={recipesData} addRecipes={addLikeRecipes} />
        </PageLayout>
    );
};
