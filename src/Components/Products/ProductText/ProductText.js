import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AddToCartHook from '../../../Hook/cart/Add-Cart-Hook'
import './ProductText.css'
const ProductText = ({cat,item,brand}) => {
  const {id}=useParams()
  const  [colorClick, indexColor, addToCartHandel]=AddToCartHook(id,item)
    return (
        <div>
      <Row className="mt-2">
        <div className="cat-text">{cat.name} :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
  {item.title}<div className="cat-rate d-inline mx-3">{item.ratingsAverage}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{brand.name} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {item.availableColors?(
            item.availableColors.map((color,idx)=>{
              return(
                <div
                key={idx}
                onClick={()=>colorClick(idx,color)}
                className="color ms-2"
                style={{ backgroundColor: color,border:indexColor===idx?"2px solid #333":"none" }}></div>
              )
            })
                
          ):null}

        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            {item.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">{item.price} جنية</div>
          <div onClick={addToCartHandel} className="product-cart-add px-3 py-3 d-inline mx-3">اضف للعربة</div>
        </Col>
      </Row>
      <ToastContainer/>
    </div>
    )
}

export default ProductText