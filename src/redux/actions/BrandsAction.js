import { getAllBrands, Error, Create_Brand, GetOne_Brand, Delete_Brand } from "../type";
import {GetData} from "../../Hooks/getAllData";
import { InsertDataWithImage } from "../../Hooks/InsertData";
import DeleteData from "../../Hooks/DeleteData";
export const getAllBranddata = (limit, page) => async (dispatch) => {
  try {
    const respons = await GetData(`/api/v1/brands?limit=${limit}&page=${page}`);
    dispatch({
      type: getAllBrands,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: Error,
      payload: "Error" + e,
    });
  }
};

export const CreateBrand = (formdata) => async (dispatch) => {
  try {
    const respons = await InsertDataWithImage(`/api/v1/brands`, formdata);
    dispatch({
      type: Create_Brand,
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
export const GetOneBrand = (id) => async (dispatch) => {
  try {
    const respons = await GetData(`/api/v1/brands/${id}`);
    dispatch({
      type: GetOne_Brand,
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

export const DeleteBrands = (id) => async (dispatch) => {
  try {
    const respons = await DeleteData(`/api/v1/brands/${id}`);
    dispatch({
      type: Delete_Brand,
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
