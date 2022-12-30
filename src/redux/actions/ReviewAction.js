import {
  CREATE_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  ALL_REVIEW_PRODUCT,
} from "../type";
import { InsertData } from "../../Hooks/InsertData";
import { GetDataToken } from "../../Hooks/getAllData";
import DeleteData from "../../Hooks/DeleteData";
import { InsUpdateData } from "../../Hooks/UpdataData";
//create rate

export const createReview = (prodID, body) => async (dispatch) => {
  try {
    const response = await InsertData(
      `/api/v1/products/${prodID}/reviews`,
      body
    );
    dispatch({
      type: CREATE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_REVIEW,
      payload: e.response,
    });
  }
};

//get all review to one product
export const allReviewProduct = (prodID, page, limit) => async (dispatch) => {
  try {
    const response = await GetDataToken(
      `/api/v1/products/${prodID}/reviews?page=${page}&limit=${limit}`
    );

    dispatch({
      type: ALL_REVIEW_PRODUCT,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ALL_REVIEW_PRODUCT,
      payload: e.response,
    });
  }
};

//delete review to one product
export const deleteReviewOnProduct = (id) => async (dispatch) => {
  try {
    const response = await DeleteData(`/api/v1/reviews/${id}`);
    dispatch({
      type: DELETE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_REVIEW,
      payload: e.response,
    });
  }
};

//update review to one product
export const updateReviewOnProduct = (id, body) => async (dispatch) => {
  try {
    const response = await InsUpdateData(`/api/v1/reviews/${id}`, body);

    dispatch({
      type: UPDATE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_REVIEW,
      payload: e.response,
    });
  }
};
