import { Create_Brand, Error, getAllBrands } from "../type";
const initialState = {
  Brand: [],
  loading: true,
};
const getAllBrand = (state = initialState, action) => {
  switch (action.type) {
    case getAllBrands:
      return {
        ...state,
        Brand: action.payload,
        loading: false
      };
      case Create_Brand:
        return {
          Brand: action.payload,
          loading: false
        };
    case Error:
      return {
        loading: true,
        Brand: action.payload
      };
    default:
      return state;
  }
};
export default getAllBrand;
