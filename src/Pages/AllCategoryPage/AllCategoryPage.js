import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryContainer from '../../Components/Category/CategoryContainer/CategoryContainer'
import Pagination from '../../Components/Utility/Pagination/Pagination'
import { getAllCategoriesdata } from '../../redux/actions/getAllCategories'
const AllCategoryPage = () => {
    const dispatch=useDispatch()
    const {Category,loading}=useSelector(state=>state.getAllCategory)
    let PageCount=0
    // let limit=0
    // if(Category.paginationResult)
    // limit=Category.paginationResult.limit
    if( Category.paginationResult)
    PageCount=Category.paginationResult.numberOfPages
    useEffect(()=>{
        dispatch(getAllCategoriesdata(3))
    },[])
     
    const getPage=(page)=>{
        dispatch(getAllCategoriesdata(3,page))
    }
   
    return (
        <div style={{minHeight:'670px'}}>
            <CategoryContainer Category={Category} loading={loading}/>
            {PageCount>1?( <Pagination PageCount={PageCount}onPress={getPage} />):null }
        </div>
    )
}

export default AllCategoryPage