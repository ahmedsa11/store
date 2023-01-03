import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrderCARD } from "../../redux/actions/CheckoutAction";
import GetAllUserCartHook from "../cart/get-user-cart-hook";
import notify from "../Notifcation";

const OrderPayCardHook = (addressDetalis) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [, , , , , cartID] = GetAllUserCartHook();

  //when user click
  const handelCreateOrderCARD = async () => {
    if (cartID === "0") {
      notify("من فضلك اضف منتجات الى العربه اولا", "warn");
      return;
    }
    if (addressDetalis.length <= 0) {
      notify("من فضلك اختر عنوان اولا", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      createOrderCARD(cartID, {
        shippingAddress: {
          details: addressDetalis.alias,
          phone: addressDetalis.phone,
          city: "",
          postalCode: "",
        },
      })
    );
    setLoading(false);
  };

  //get response for create order card
  const resOrderCard = useSelector(
    (state) => state.checkoutReducer.createOrderCard
  );
  useEffect(() => {
    if (loading === false) {
      if (resOrderCard && resOrderCard.status === "success") {
        notify("تم انشاء طلبك بنجاح", "success");
        if (resOrderCard.session.url) {
          setTimeout(() => {
            window.open(resOrderCard.session.url);
          }, 1500);
        }
      } else {
        notify("فشل فى اكمال الطلب من فضلك حاول مره اخرى", "warn");
      }
    }
  }, [loading]);

  return [handelCreateOrderCARD];
};

export default OrderPayCardHook;
