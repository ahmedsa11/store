import { Create_Category, Error, getAllCategories } from "../type";
const initialState = {
  Category: [],
  loading: true,
};
const getAllCategory = (state = initialState, action) => {
  switch (action.type) {
    case getAllCategories:
      return {
        ...state,
        Category: action.payload,
        loading: false
      };
      case Create_Category:
        return {
          Category: action.payload,
          loading: false
        };
    case Error:
      return {
        loading: true,
        Category: action.payload
      };
    default:
      return state;
  }
};
export default getAllCategory;
