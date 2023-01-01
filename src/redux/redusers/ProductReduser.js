import {
  Error,
  Create_Products,
  GetAll_Products,
  GetOne_Products,
  GetProduct_Like,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
  GET_ALL_PRODUCTS_CATEGORY,
  GET_ALL_PRODUCTS_BRAND,
} from "../type";
const initialState = {
  Product: [],
  AllProducts: [],
  OneProduct: [],
  ProductLike: [],
  DeleteProducts: [],
  UpdateProducts: [],
  allProductCat: [],
  allProductBrand: [],
  loading: true,
};
const getAllProduct = (state = initialState, action) => {
  switch (action.type) {
    case Create_Products:
      return {
        ...state,
        Product: action.payload,
        loading: false,
      };
    case GetAll_Products:
      return {
        ...state,
        AllProducts: action.payload,
        loading: false,
      };
    case GetOne_Products:
      return {
        OneProduct: action.payload,
        loading: false,
      };
    case GetProduct_Like:
      return {
        ...state,
        ProductLike: action.payload,
        loading: false,
      };
    case DELETE_PRODUCTS:
      return {
        ...state,
        DeleteProducts: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        UpdateProducts: action.payload,
        loading: false,
      };
      case GET_ALL_PRODUCTS_CATEGORY:
        return {
            loading: true,
            allProductCat: action.payload,
        }
    case GET_ALL_PRODUCTS_BRAND:
        return {
            loading: true,
            allProductBrand: action.payload,
        }
    case Error:
      return {
        loading: true,
        Product: action.payload,
      };
    default:
      return state;
  }
};
export default getAllProduct;
