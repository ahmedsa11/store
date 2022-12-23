import { Error, Create_Products } from "../type";
const initialState = {
  Product: [],
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
