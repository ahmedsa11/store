import { Error, Create_Subcategory, Get_Subcategory } from "../type";
import { InsertData } from "../../Hooks/useInsertData";
import GetData from "../../Hooks/getAllData";
export const CreateSubcategory = (data) => async (dispatch) => {
  try {
    const respons = await InsertData(`/api/v1/subcategories`, data);
    console.log(data);
    dispatch({
      type: Create_Subcategory,
      payload: respons,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: Error,
      payload: "Error" + e,
    });
  }
};
export const GetOneSubcategory = (id) => async (dispatch) => {
  try {
    const respons = await GetData(`/api/v1/categories/${id}/subcategories`);
    dispatch({
      type: Get_Subcategory,
      payload: respons,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: Error,
      payload: "Error" + e,
    });
  }
};
