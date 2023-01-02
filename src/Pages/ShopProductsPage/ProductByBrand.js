import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ProductCardContainer from '../../Components/Products/ProductContainer/ProductContainer'
import Pagination from '../../Components/Utility/Pagination/Pagination'
import ViewAllProductsBarndHook from '../../Hook/Product/Product-Brand-Hook'
const ProductByBrand = () => {
    const { id } = useParams()

    const [items, pagination, onPress] = ViewAllProductsBarndHook(id)
    if (pagination)
        var pageCount = pagination
    else
        pageCount = 0
  return (
    <div style={{ minHeight: '670px' }}>
 {items.length>0?   <Container>
        <Row className='d-flex flex-row'>
            <Col sm="12">
                 <ProductCardContainer products={items} title="" btntitle=""/>
            </Col>
        </Row>
        {pageCount>1?<Pagination onPress={onPress}PageCount={pageCount}/>:null} 

    </Container>:(<h2>لا توجد منتجات لهذه الماركه </h2>)}
</div>
  )
}

export default ProductByBrand
