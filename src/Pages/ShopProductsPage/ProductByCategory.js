import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ProductCardContainer from '../../Components/Products/ProductContainer/ProductContainer'
import Pagination from '../../Components/Utility/Pagination/Pagination'
import ViewAllProductsCategoryHook from '../../Hook/Product/Product-Category-Hook'

const ProductByCategory = () => {
    const { id } = useParams()
    const [items, pagination, onPress] = ViewAllProductsCategoryHook(id)
    if (pagination)
        var pageCount = pagination
    else
        pageCount = 0
  return (
    <div style={{ minHeight: '670px' }}>
    {items.length>0?  <Container>
        <Row className='d-flex flex-row'>
            <Col sm="12">
                 <ProductCardContainer products={items} title="" btntitle=""/>
            </Col>
        </Row>
        {pagination>1?<Pagination onPress={onPress}PageCount={pagination}/>:null} 

    </Container>:(<h2>لا توجد منتجات لهذا التصنيف </h2>)}
</div>
  )
}

export default ProductByCategory
