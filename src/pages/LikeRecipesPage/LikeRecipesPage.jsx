import { FitButton } from "../../components/Button/Button_components";
import { Search } from "../../components/RecipeCards/RecipeCards_components";
import { Buttons } from "../../styles/components";

import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";

import { SortIcon } from "../../assets/SortIcon";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { RecipeCards } from "../../components/RecipeCards/RecipeCards.tsx";
import { UpButton } from "../../components/UpButton/UpButton";
import {
    addLikeRecipes,
    changeLikeSearch,
    selectLikeRecipesData
} from "../../store/likeRecipesSlice";

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
            <Buttons>
                <FitButton>
                    <SortIcon />
                    Сортировка
                </FitButton>
            </Buttons>
            <RecipeCards recipesData={recipesData} addRecipes={addLikeRecipes} />
            <UpButton />
        </PageLayout>
    );
};
