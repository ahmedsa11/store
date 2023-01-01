import {
  Error,
  Create_Products,
  GetAll_Products,
  GetOne_Products,
  GetProduct_Like,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
  GET_ALL_PRODUCTS_CATEGORY,
  GET_ALL_PRODUCTS_BRAND,
} from "../type";
import { InsertDataWithImage } from "../../Hooks/InsertData";
import {GetData} from "../../Hooks/getAllData";
import { InUpdateDataWithImage } from "../../Hooks/UpdataData";
import DeleteData from "../../Hooks/DeleteData";
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
export const GetAllProducts = (limit) => async (dispatch) => {
  try {
    const respons = await GetData(`/api/v1/products?limit=${limit}`);
    dispatch({
      type: GetAll_Products,
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
//get all products with pagination with pages number
export const getAllProductsPage = (page, limit) => async (dispatch) => {
  try {
    const response = await GetData(
      `/api/v1/products?page=${page}&limit=${limit}`
    );
    dispatch({
      type: GetAll_Products,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: Error,
      payload: "Error " + e,
    });
  }
};

export const getAllProductsSearch = (quirestring) => async (dispatch) => {
  try {
    const response = await GetData(
      `/api/v1/products?${quirestring}`
    );
    dispatch({
      type: GetAll_Products,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: Error,
      payload: "Error " + e,
    });
  }
};
export const GetOneProducts = (id) => async (dispatch) => {
  try {
    const respons = await GetData(`/api/v1/products/${id}`);
    dispatch({
      type: GetOne_Products,
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

export const GetProductsLike = (id) => async (dispatch) => {
  try {
    const respons = await GetData(`/api/v1/products?category=${id}`);
    dispatch({
      type: GetProduct_Like,
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

//delete prooduct with id
export const deleteProducts = (id) => async (dispatch) => {
  try {
    const response = await DeleteData(`/api/v1/products/${id}`);
    dispatch({
      type: DELETE_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: Error,
      payload: "Error " + e,
    });
  }
};

//update prooduct with id
export const updateProducts = (id, data) => async (dispatch) => {
  try {
    const response = await InUpdateDataWithImage(
      `/api/v1/products/${id}`,
      data
    );
    dispatch({
      type: UPDATE_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: Error,
      payload: "Error " + e,
    });
  }
};
export const getAllProductsByCategory = (page, limit, categoryID) => async (dispatch) => {
  try {
      const response = await GetData(`/api/v1/products?limit=${limit}&category=${categoryID}&page=${page}`);
      dispatch({
          type: GET_ALL_PRODUCTS_CATEGORY,
          payload: response,
          loading: true
      })

  } catch (e) {
      dispatch({
          type: GET_ALL_PRODUCTS_CATEGORY,
          payload: e.response,
      })
  }
}

//get all products by brand
export const getAllProductsByBrand = (page, limit, brandID) => async (dispatch) => {
  try {
      const response = await GetData(`/api/v1/products?limit=${limit}&brand=${brandID}&page=${page}`);
      dispatch({
          type: GET_ALL_PRODUCTS_BRAND,
          payload: response,
          loading: true
      })

  } catch (e) {
      dispatch({
          type: GET_ALL_PRODUCTS_BRAND,
          payload: e.response,
      })
  }
}

