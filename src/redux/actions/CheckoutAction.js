import { GetDataToken } from '../../Hooks/getAllData';
import { InsertData } from '../../Hooks/InsertData';
import { CREATE_ORDER_CASH, CREATE_ORDER_CRAD } from '../type'
//create order cash fro user
export const createOrderCash = (id, body) => async (dispatch) => {
    try {
        const response = await InsertData(`/api/v1/orders/${id}`, body);
        dispatch({
            type: CREATE_ORDER_CASH,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: CREATE_ORDER_CASH,
            payload: e.response,
        })
    }
}

//create order by card for user
export const createOrderCARD = (id, body) => async (dispatch) => {
    try {
        const response = await GetDataToken(`/api/v1/orders/checkout-session/${id}`, body);
        dispatch({
            type: CREATE_ORDER_CRAD,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: CREATE_ORDER_CRAD,
            payload: e.response,
        })
    }
}