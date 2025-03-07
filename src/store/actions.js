import { createAction } from "@reduxjs/toolkit";

export const resetState = createAction("root/RESET_STATE");

export const initialState = {
    recipesData: {
        recipes: [],
        page: 1,
        limit: 6,
        search: "",
        isHasMore: true
    },
    filters: {
        types: [],
        time_min: "",
        time_max: "",
        cal_min: "",
        cal_max: ""
    }
};
