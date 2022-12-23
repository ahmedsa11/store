import { combineReducers } from "redux";
import getAllCategory from "./CategoryReduser";
import getAllBrand from "./BrandReduser";
import getAllSubcategory from "./SubcategoryReduser";
import getAllProduct from './ProductReduser'
export default combineReducers({
    getAllCategory,
    getAllBrand,
    getAllSubcategory,
    getAllProduct
})