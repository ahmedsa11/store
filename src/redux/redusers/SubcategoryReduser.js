import { Create_Subcategory, Error, Get_Subcategory } from "../type";
const initialState = {
  Subcategory: [],
  loading: true,
};
const getAllSubcategory = (state = initialState, action) => {
  switch (action.type) {
      case Create_Subcategory:
        return {
          ...state,
            Subcategory: action.payload,
          loading: false
        };
        case Get_Subcategory:
          return {
              Subcategory: action.payload,
              loading: false
          };
    case Error:
      return {
        loading: true,
        Subcategory: action.payload
      };
    default:
      return state;
  }
};
export default getAllSubcategory;
