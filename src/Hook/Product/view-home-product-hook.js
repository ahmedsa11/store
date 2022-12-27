import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GetAllProducts } from '../../redux/actions/ProductsAction';
function ViewHomeProductHook() {
    const dispatch=useDispatch();
    let items=[]
    const AllProducts=useSelector(state=>state.getAllProduct.AllProducts)
    useEffect(()=>{
        dispatch(GetAllProducts())
    },[])
    try{
    if(AllProducts.data){
    items = AllProducts.data.slice(0, 4)
    console.log(items)
}

    else{
        items = []
    }
}
catch (e) { }
    return [items]
}

export default ViewHomeProductHook