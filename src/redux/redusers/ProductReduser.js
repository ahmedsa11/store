import {
  Error,
  Create_Products,
  GetAll_Products,
  GetOne_Products,
  GetProduct_Like,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
} from "../type";
const initialState = {
  Product: [],
  AllProducts: [],
  OneProduct: [],
  ProductLike: [],
  DeleteProducts: [],
  UpdateProducts: [],
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
