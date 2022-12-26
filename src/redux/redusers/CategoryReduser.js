import { Create_Category, Error, getAllCategories,GetOne_Category } from "../type";
const initialState = {
  Category: [],
  OneCategory:[],
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
        case GetOne_Category:
          return {
            OneCategory: action.payload,
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
