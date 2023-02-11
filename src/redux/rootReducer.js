import { combineReducers } from "redux";
import { blogsReducer } from "./blogs/reducer";
import { filterReducer } from "./filter/reducer";

export const rootReducer = combineReducers({
    blogsReducer: blogsReducer,
    filterReducer: filterReducer
})