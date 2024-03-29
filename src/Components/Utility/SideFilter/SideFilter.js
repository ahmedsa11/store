import React from 'react'
import { Row } from 'react-bootstrap'
import SidebarSearchHook from '../../../Hook/search/sidebar-search-hook'
import './SideFilter.css'
const SideFilter = () => {
  const [category,brand,clickCategory,clickBrand,priceFrom,priceTo]=SidebarSearchHook()
  let localFrom = localStorage.getItem("priceFrom")
  let localTo = localStorage.getItem("priceTo")
    return (
        <div className="mt-3">
        <Row>
          <div className="d-flex flex-column mt-2">
            <div className="filter-title">الفئة</div>
            <div className="d-flex mt-3">
              <input onChange={clickCategory} type="checkbox" value="0" />
              <div className="filter-sub me-2 ">الكل</div>
            </div>
            {category?(category.map((item,idx)=>{return(
                     <div className="d-flex mt-3"key={idx}>
                     <input onChange={clickCategory} type="checkbox" value={item._id} />
                     <div className="filter-sub me-2 ">{item.name}</div>
                   </div>
            )})):null}
          </div>
  
          <div className="d-flex flex-column mt-2">
            <div className="filter-title mt-3">الماركة</div>
            <div className="d-flex mt-3">
              <input onChange={clickBrand} type="checkbox" value="0" />
              <div className="filter-sub me-2 ">الكل</div>
            </div>
            {brand?(brand.map((item,idx)=>{return(
                     <div className="d-flex mt-3"key={idx}>
                     <input onChange={clickBrand} type="checkbox" value={item._id} />
                     <div className="filter-sub me-2 ">{item.name}</div>
                   </div>
            )})):null}
          </div>
  
          <div className="filter-title my-3">السعر</div>
        <div className="d-flex">
          <p className="filter-sub my-2">من:</p>
          <input
            value={localFrom}
            onChange={priceFrom}
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">الي:</p>
          <input
            onChange={priceTo}
            value={localTo}
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
        </Row>
      </div>
    )
}

export default SideFilter