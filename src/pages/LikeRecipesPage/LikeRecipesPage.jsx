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
import { FitButton } from "../../components/Button/Button_components";
import { FiltersIcon } from "../../assets/FiltersIcon";
import { SortIcon } from "../../assets/SortIcon";
import { Buttons } from "../../styles/components";
import { useState } from "react";
import { Filters } from "../../components/Filters/Filters";
import { changeAllFilters } from "../../store/allRecipesSlice";

export const LikeRecipesPage = () => {
    const recipesData = useSelector(selectLikeRecipesData);
    const dispatch = useDispatch();
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

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
                <FitButton onClick={() => setIsFiltersOpen(true)}>
                    <FiltersIcon />
                    Фильтры
                </FitButton>
                <FitButton>
                    <SortIcon />
                    Сортировка
                </FitButton>
            </Buttons>
            <RecipeCards recipesData={recipesData} addRecipes={addLikeRecipes} />
            {isFiltersOpen && (
                <Filters
                    key={JSON.stringify(filters)}
                    filters={filters}
                    changeFilters={changeAllFilters}
                    setIsFiltersOpen={setIsFiltersOpen}
                />
            )}
        </PageLayout>
    );
};
