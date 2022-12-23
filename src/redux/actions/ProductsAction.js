import { Error,Create_Products } from "../type";
import { InsertDataWithImage } from "../../Hooks/useInsertData";
export const CreateProducts = (formdata) => async (dispatch) => {
  try {
    const respons = await InsertDataWithImage(`/api/v1/products`, formdata);
    dispatch({
      type: Create_Products,
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
