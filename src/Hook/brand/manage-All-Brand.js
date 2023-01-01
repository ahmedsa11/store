import { useState } from 'react'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteBrands, getAllBranddata } from '../../redux/actions/BrandsAction'
const  AllBrandAdminHook=(id)=> {
    const dispatch=useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handelDelete = async () => {
        await dispatch(DeleteBrands(id))
        setShow(false);
        window.location.reload(false);
    }
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // const handelDelete = async () => {
    //     await dispatch(DeleteBrands(item._id))
    //     setShow(false);
    //     window.location.reload();
    // }
    
    // let PageCount=0
    // let limit=0
    // if(Category.paginationResult)
    // limit=Category.paginationResult.limit
    // if( Brand.paginationResult)
    // PageCount=Brand.paginationResult.numberOfPages
    useEffect(()=>{
        const gey =async()=>{
        dispatch(getAllBranddata())
        }
        gey()
    },[])
    const {Brand,loading}=useSelector(state=>state.getAllBrand)
    
    // const getPage=(page)=>{
    //     dispatch(getAllBranddata(3,page))
    // }

   return [Brand,loading,show,handleClose,handelDelete,handleShow]
}

export default AllBrandAdminHook