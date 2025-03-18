import { FitButton } from "../../components/Button/Button_components";
import { Search } from "../../components/RecipeCards/RecipeCards_components";
import { Buttons } from "../../styles/components";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";

import { FiltersIcon } from "../../assets/FiltersIcon";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { Filters } from "../../components/Filters/Filters";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { RecipeCards } from "../../components/RecipeCards/RecipeCards.tsx";
import { UpButton } from "../../components/UpButton/UpButton";
import { sortOptions } from "../../helpers/sortOptions";
import {
    addAllRecipes,
    changeAllFilters,
    changeAllSearch,
    changeAllSort,
    selectAllFilters,
    selectAllRecipesData
} from "../../store/allRecipesSlice";

export const AllRecipesPage = () => {
    const recipesData = useSelector(selectAllRecipesData);
    const filters = useSelector(selectAllFilters);
    //const sortOptions = useSelector(selectAllSort);
    const dispatch = useDispatch();
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const searchRecipe = (value) => {
        dispatch(changeAllSearch(value.toLowerCase()));
    };

    const debounceSearch = debounce(searchRecipe, 1000);

    return (
        <PageLayout>
            <h1>Все Рецепты</h1>
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
                <Dropdown
                    options={sortOptions}
                    defaultSort={recipesData.sort}
                    changeSort={changeAllSort}
                />
            </Buttons>
            <RecipeCards
                recipesData={recipesData}
                filters={filters}
                addRecipes={addAllRecipes}
                //addSort={addAllSort}
            />
            <UpButton />
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
