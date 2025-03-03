import { Ul } from "./RecipeCards_components.js";
import { RecipeCard } from "../RecipeCard/RecipeCard.jsx";
import { Preloader } from "../Preloader/Preloader.jsx";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import { api } from "../../api/api.js";

interface IParams {
    search: string;
    time_min: number;
    time_max: number;
    cal_min: number;
    cal_max: number;
    page: string;
    limit: string;
}

export const RecipeCards = ({ recipesData, filters = {}, addRecipes }) => {
    let pathName = useLocation().pathname;
    const dispatch = useDispatch();

    let params: IParams = Object.assign(JSON.parse(JSON.stringify(filters)), {
        search: recipesData.search,
        page: recipesData.page,
        limit: recipesData.limit
    });

    const loadRecipes = () => {
        api.get(
            "/recipes/card_recipes" + pathName,
            params,
            localStorage.getItem("accessToken")
        ).then((response) => {
            dispatch(addRecipes(response.recipes));
            if (response.meta) {
                sessionStorage.setItem("filters", JSON.stringify(response.meta?.filters));
            }
        });
    };

    return (
        <InfiniteScroll
            threshold={400}
            pageStart={0}
            loadMore={loadRecipes}
            hasMore={recipesData.isHasMore}
            loader={<Preloader key={0} />}
        >
            <Ul>
                {recipesData.recipes?.map((recipe) => (
                    <li key={recipe._id}>
                        <RecipeCard recipe={recipe} />
                    </li>
                ))}
            </Ul>
        </InfiniteScroll>
    );
};
