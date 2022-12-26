import {
  getAllCategories,
  Error,
  Create_Category,
  GetOne_Category,
} from "../type";
import {GetData} from "../../Hooks/getAllData";
import { InsertDataWithImage } from "../../Hooks/InsertData";
export const getAllCategoriesdata = (limit, page) => async (dispatch) => {
  try {
    const respons = await GetData(
      `/api/v1/categories?limit=${limit}&page=${page}`
    );
    dispatch({
      type: getAllCategories,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: Error,
      payload: "Error" + e,
    });
  }
};

export const CreateCategory = (formdata) => async (dispatch) => {
  try {
    const respons = await InsertDataWithImage(`/api/v1/categories`, formdata);
    dispatch({
      type: Create_Category,
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
export const getOneCategory = (id) => async (dispatch) => {
  try {
    const respons = await GetData(`/api/v1/categories/${id}`);
    dispatch({
      type: GetOne_Category,
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
