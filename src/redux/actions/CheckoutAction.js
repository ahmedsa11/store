import { InsertData } from '../../Hooks/InsertData';
import { CREATE_ORDER_CASH } from '../type'
//create order cash fro user
export const createOrderCash = (id, body) => async (dispatch) => {
    try {
        const response = await InsertData(`/api/v1/orders/${id}`, body);
        console.log(response)
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