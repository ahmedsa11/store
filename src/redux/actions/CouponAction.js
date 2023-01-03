import { ADD_COUPON, GET_ALL_COUPON, EDIT_COUPON, GET_ONE_COUPON, DELTET_COUPON } from '../type'
import { InsertData } from '../../Hooks/InsertData';
import { InsUpdateData } from '../../Hooks/UpdataData';
import DeleteData from '../../Hooks/DeleteData';
import { GetDataToken } from '../../Hooks/getAllData';
//add coupon
export const addCoupon = (body) => async (dispatch) => {
    try {
        const response = await InsertData(`/api/v1/coupons`, body);
        dispatch({
            type: ADD_COUPON,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: ADD_COUPON,
            payload: e.response,
        })
    }
}
//get all coupon
export const getAllCoupon = (limit,page) => async (dispatch) => {
    try {
        const response = await GetDataToken(`/api/v1/coupons?limit=${limit}&page=${page}`);
        dispatch({
            type: GET_ALL_COUPON,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_COUPON,
            payload: e.response,
        })
    }
}

//get one coupon
export const getOneCoupon = (id) => async (dispatch) => {
    try {
        const response = await GetDataToken(`/api/v1/coupons/${id}`);
        dispatch({
            type: GET_ONE_COUPON,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ONE_COUPON,
            payload: e.response,
        })
    }
}

//delete coupon
export const deleteCoupon = (id) => async (dispatch) => {
    try {
        const response = await DeleteData(`/api/v1/coupons/${id}`);
        dispatch({
            type: DELTET_COUPON,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: DELTET_COUPON,
            payload: e.response,
        })
    }
}

//edit coupon
export const editCoupon = (id, body) => async (dispatch) => {
    try {
        const response = await InsUpdateData(`/api/v1/coupons/${id}`, body);
       
        dispatch({
            type: EDIT_COUPON,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: EDIT_COUPON,
            payload: e.response,
        })
    }
}