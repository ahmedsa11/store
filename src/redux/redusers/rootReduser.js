import { combineReducers } from "redux";
import getAllCategory from "./CategoryReduser";
import getAllBrand from "./BrandReduser";
import getAllSubcategory from "./SubcategoryReduser";
import getAllProduct from './ProductReduser'
import authReducer from './AuthReducer'
import reviewReducer from './ReviewReduser'
import addToWishListReducer from './WishListReduser'
import couponReducer from './CouponReducer'
import userAddressesReducer from "./UserAddressesReducer"
import cartReducer from './CartReducer'
import checkoutReducer from './CheckoutReduser'
import orderReducer from './OrderReduser'
export default combineReducers({
    getAllCategory,
    getAllBrand,
    getAllSubcategory,
    getAllProduct,
    authReducer,
    reviewReducer,
    addToWishListReducer,
    couponReducer,
    userAddressesReducer,
    cartReducer,
    checkoutReducer,
    orderReducer
})