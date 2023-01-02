import React from 'react'
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ApplayCouponHook from '../../../Hook/cart/Cart-Coupon-Hook'
import DeleteCartHook from '../../../Hook/cart/delete-cart-hook'
import notify from '../../../Hook/Notifcation'
import './CheckOutCart.css'
const CartCheckout = ({ cartItems,totalCartPrice, totalCartPriceAfterDiscount, couponNameRes }) => {
    const [handelDeleteCart, , , , , itemCount, , ,itemOne]=DeleteCartHook()
    const navigate =useNavigate()
    const [couponName, onChangeCoupon, handelSubmitCoupon] = ApplayCouponHook();
    console.log(cartItems)
    useEffect(() => {
        if (couponNameRes) {
            onChangeCoupon(couponNameRes)
        }
    }, [couponNameRes])
    console.log(itemOne.quantity)
    console.log(itemCount)
    const handleCheckOut=()=>{
        if(cartItems.length > 0) {
            navigate('/order/paymethoud')
        }
        // if(itemCount<=itemOne.quantity){
        //     notify(`الكميه المتاحه لهذا المنتج ${itemOne.quantity}`, "warn")
        // }
        else{
            notify("من فضلك اضف منتج للعربه","warn")
        }
    }
    return (
        <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="d-flex  ">
                    <input
                        value={couponName}
                        onChange={(e) => onChangeCoupon(e.target.value)}
                        className="copon-input d-inline text-center "
                        placeholder="كود الخصم"
                    />
                    <button onClick={handelSubmitCoupon} className="copon-btn d-inline ">تطبيق</button>
                </div>
                <div className="product-price d-inline w-100 my-3  border">
                    {
                        totalCartPriceAfterDiscount >= 1 ?
                            `${totalCartPrice} جنيه ... بعد الخصم ${totalCartPriceAfterDiscount} ` :
                            `${totalCartPrice} جنيه`
                    }
                </div>
                    <button onClick={handleCheckOut} className="product-cart-add w-100 px-2"> اتمام الشراء</button>
                <button  onClick={handelDeleteCart} className="product-cart-add w-100 px-2 my-1"> مسح العربة</button>
            </Col>
            <ToastContainer />
        </Row>
    )
}

export default CartCheckout