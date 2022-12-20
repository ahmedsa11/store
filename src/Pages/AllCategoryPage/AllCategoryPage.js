import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer/CategoryContainer'
import Pagination from '../../Components/Utility/Pagination/Pagination'
import AllCategoryPageHook from '../../Hook/category/all-category-page-hook'
const AllCategoryPage = () => {
    const [Category,loading,getPage,PageCount]=AllCategoryPageHook()
    return (
        <div style={{minHeight:'670px'}}>
            <CategoryContainer Category={Category} loading={loading}/>
            {PageCount>1?( <Pagination PageCount={PageCount}onPress={getPage} />):null }
        </div>
    )
}

export default AllCategoryPage