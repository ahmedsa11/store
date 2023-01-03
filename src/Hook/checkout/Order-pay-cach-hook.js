import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrderCash } from '../../redux/actions/CheckoutAction';
import { getOneUserAddress } from '../../redux/actions/UserAddressesAction';
import GetAllUserCartHook from '../cart/get-user-cart-hook';
import notify from '../Notifcation';

const OrderPayCachHook = () => {
    const [loading, setLoading] = useState(true);
    const [loadingCreate, setLoadingCreate] = useState(true);
    const [addressDetalis, setAddressDetalis] = useState([]);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [, , , , , cartID] = GetAllUserCartHook() 
    const handelChooseAddress = (e) => {
        setAddressDetalis([])
        if (e.target.value != '0')
            get(e.target.value);
    }

    const get = async (id) => {
        setLoading(true)
        await dispatch(getOneUserAddress(id))
        setLoading(false)
    }

    //get address detalis for user
    const resAddress = useSelector(state => state.userAddressesReducer.oneAddress)
    useEffect(() => {
        if (loading === false) {
            if (resAddress && resAddress.status === "success") {
                setAddressDetalis(resAddress.data)
            } else
                setAddressDetalis([])
        }
    }, [loading])



    //when user click
    const handelCreateOrderCash = async () => {
        if (cartID === '0') {
            notify("من فضلك اضف منتجات الى العربه اولا", "warn")
            return
        }
        if (addressDetalis.length <= 0) {
            notify("من فضلك اختر عنوان اولا", "warn")
            return
        }
        setLoadingCreate(true)
        await dispatch(createOrderCash(cartID, {
            shippingAddress: {
                details: addressDetalis.alias,
                phone: addressDetalis.phone,
                city: "",
                postalCode: ""
            }
        }))
        setLoadingCreate(false)
    }


    //get response for create orser cash
    const resOrserCash = useSelector(state => state.checkoutReducer.createOrderCash)
    useEffect(() => {
        if (loadingCreate === false) {
            if (resOrserCash && resOrserCash.status === 201) {
                notify("تم انشاء طلبك بنجاح", "success")
                setTimeout(() => {
                    navigate('/user/allorders')
                }, 1500);
            } else {
                notify("فشل فى اكمال الطلب من فضلك حاول مره اخرى", "warn")
            }
        }
    }, [loadingCreate])


    return [handelChooseAddress, addressDetalis, handelCreateOrderCash]
}

export default OrderPayCachHook
