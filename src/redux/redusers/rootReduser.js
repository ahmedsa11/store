import { combineReducers } from "redux";
import getAllCategory from "./CategoryReduser";
import getAllBrand from "./BrandReduser";
export default combineReducers({
    getAllCategory,
    getAllBrand
})