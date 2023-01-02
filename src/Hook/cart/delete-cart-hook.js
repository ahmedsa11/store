import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearAllCartItem,
  deleteCartItem,
  updateCartItem,
} from "../../redux/actions/CartAction";
import { GetOneProducts } from "../../redux/actions/ProductsAction";
import notify from "../Notifcation";
const DeleteCartHook = (item, id) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(0);
  const handelDeleteCart = async () => {
    setLoading(true);
    await dispatch(clearAllCartItem());
    setLoading(false);
  };
  const onChangeCount = (e) => {
    e.persist();
    setItemCount(e.target.value);
  };
  const OneProduct = useSelector((state) => state.getAllProduct.OneProduct);
  useEffect(() => {
    dispatch(GetOneProducts(id));
  }, []);
  let itemOne = [];
  try {
    if (OneProduct.data) {
      itemOne = OneProduct.data;
    } else {
      itemOne = [];
    }
  } catch (e) {}
  useEffect(() => {
    if (item) setItemCount(item.count);
  }, []);
  const res = useSelector((state) => state.cartReducer.clearCart);
  useEffect(() => {
    if (loading === false) {
      if (res === "") {
        notify("تم الحذف بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
      }
    }
  }, [loading]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //const dispatch = useDispatch();

  const handelDeleteItem = async () => {
    await dispatch(deleteCartItem(item._id));
    setShow(false);
    window.location.reload(false);
  };
  const handeleUpdateCart = async () => {
    // if (itemCount <= itemOne.quantity) {
      await dispatch(
        updateCartItem(item._id, {
          count: itemCount,
        })
      );

      window.location.reload(false);
    // } else {
    //   notify(`الكميه المتاحه لهذا المنتج ${itemOne.quantity}`, "warn");
      
    // }
  };

  return [
    handelDeleteCart,
    show,
    handleClose,
    handleShow,
    handelDeleteItem,
    itemCount,
    onChangeCount,
    handeleUpdateCart,
    itemOne,
  ];
};

export default DeleteCartHook;
