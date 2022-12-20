import { getAllBrands, Error, Create_Brand } from "../type";
import useGetData from "../../Hooks/getAllData";
import { InsertDataWithImage } from "../../Hooks/useInsertData";
export const getAllBranddata = (limit, page) => async (dispatch) => {
  try {
    const respons = await useGetData(
      `/api/v1/brands?limit=${limit}&page=${page}`
    );
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
    const respons = await InsertDataWithImage(`/api/v1/brands`,formdata);
    dispatch({
      type: Create_Brand,
      payload: respons,
      loading: true,
    });
  }
   catch (e) {
    dispatch({
      type: Error,
      payload: "Error" + e,
    });
  }
};
