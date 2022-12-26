import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GetAllProducts, getAllProductsPage } from '../../redux/actions/ProductsAction';
function ViewProductAdminHook() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetAllProducts(12))
    }, [])


    const onPress = async (page) => {
        await dispatch(getAllProductsPage(page, 12))
    }
    let items = []; let pagination = [];
    const allProducts = useSelector((state) => state.getAllProduct.AllProducts)
    try {

        if (allProducts.data)
            items = allProducts.data;
        else
            items = []

        if (allProducts.paginationResult)
            pagination = allProducts.paginationResult.numberOfPages;
        else
            pagination = []
    } catch (e) { }
    return [items, pagination,onPress]
}

export default ViewProductAdminHook