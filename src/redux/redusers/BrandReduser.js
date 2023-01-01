import {
  Create_Brand,
  Delete_Brand,
  Error,
  getAllBrands,
  GetOne_Brand,
} from "../type";
const initialState = {
  Brand: [],
  OneBrand: [],
  DeleteBrand: [],
  loading: true,
};
const getAllBrand = (state = initialState, action) => {
  switch (action.type) {
    case getAllBrands:
      return {
        ...state,
        Brand: action.payload,
        loading: false,
      };
    case Create_Brand:
      return {
        Brand: action.payload,
        loading: false,
      };
    case GetOne_Brand:
      return {
        OneBrand: action.payload,
        loading: false,
      };
    case Delete_Brand:
      return {
        ...state,
        DeleteBrand: action.payload,
      };
    case Error:
      return {
        loading: true,
        Brand: action.payload,
      };
    default:
      return state;
  }
};
export default getAllBrand;
