import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProductWishList } from '../../../redux/actions/WishListAction';
import ProductCardContainer from '../../Products/ProductContainer/ProductContainer'
const UserFavoriteProduct = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getProductWishList())
            setLoading(false)
        }
        get()
    }, [])

    const res = useSelector(state => state.addToWishListReducer.allWishList)
    useEffect(() => {
        if (loading === false) {
            if (res)
                setItems(res.data)
        }
    }, [loading])

    return (
        <div>
            <div className="admin-content-text pb-4">قائمة المفضلة</div>
            <Row className='justify-content-start'>
                {
                    items.length <= 0 ? (<h6>لا يوجد منتدات مفضله حاليا</h6>) : <ProductCardContainer products={items} title="" btntitle="" />
                }

            </Row>
        </div>
    )
}

export default UserFavoriteProduct
