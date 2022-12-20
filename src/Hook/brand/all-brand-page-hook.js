import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBranddata } from '../../redux/actions/getAllBrands'
function AllBrandPageHook() {
    const dispatch=useDispatch()
    const {Brand,loading}=useSelector(state=>state.getAllBrand)
    let PageCount=0
    // let limit=0
    // if(Category.paginationResult)
    // limit=Category.paginationResult.limit
    if( Brand.paginationResult)
    PageCount=Brand.paginationResult.numberOfPages
    useEffect(()=>{
        dispatch(getAllBranddata(3))
    },[])
     
    const getPage=(page)=>{
        dispatch(getAllBranddata(3,page))
    }
   return [Brand,loading,getPage,PageCount]
}

export default AllBrandPageHook