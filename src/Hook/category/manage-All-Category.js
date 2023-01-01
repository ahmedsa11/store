import { useState } from 'react'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteCategory, getAllCategoriesdata } from '../../redux/actions/CategoriesAction'
const  AllCategoryAdminHook=(id)=> {
    const dispatch=useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handelDelete = async () => {
        await dispatch(DeleteCategory(id))
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
        dispatch(getAllCategoriesdata())
        }
        gey()
    },[])
    const {Category,loading}=useSelector(state=>state.getAllCategory)

    // const getPage=(page)=>{
    //     dispatch(getAllBranddata(3,page))
    // }

   return [Category,loading,show,handleClose,handelDelete,handleShow]
}

export default AllCategoryAdminHook