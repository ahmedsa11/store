import  { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteReviewOnProduct } from '../../redux/actions/ReviewAction';
import notify from '../Notifcation';
const DeleteRateHook = (review) => {
    const dispatch = useDispatch();
    const [isUser, setIsUser] = useState(false)
    const [loading, setLoading] = useState(true)
    const [showDelete, setShowDelete] = useState(false);
    const handleClose = () => setShowDelete(false);
    const handleShow = () => setShowDelete(true);
    let user = JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
        if (review.user._id === user._id) {
            setIsUser(true);
        }
    }, [])
    const handelDelete = async () => {
        setLoading(true)
        await dispatch(deleteReviewOnProduct(review._id))
        setLoading(false)
        handleClose();
    }
    const res = useSelector(state => state.reviewReducer.deleteReview)

    useEffect(() => {
        if (loading === false) {
            if (res === "") {
                notify("تم حذف التقييم بنجاح", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
            if (res.data.status === "fail"&& res.data.message === "You are not logged in. Please login to get access") {
                notify("من فضلك قم بعمل تسجيل دخول ", "error")
            }
            else
                notify("هناك مشكله فى عملية المسح", "error")
        }
    }, [loading])

    return [isUser, handelDelete, handleShow, handleClose, showDelete]

}

export default DeleteRateHook