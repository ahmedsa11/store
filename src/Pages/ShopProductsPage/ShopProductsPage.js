import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader/CategoryHeader'
import ProductCardContainer from '../../Components/Products/ProductContainer/ProductContainer'
import Pagination from '../../Components/Utility/Pagination/Pagination'
import SearchCountResult from '../../Components/Utility/SearchCountResult/SearchCountResult'
import SideFilter from '../../Components/Utility/SideFilter/SideFilter'
const ShopProductsPage = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult title="400 نتجية بحث" />
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="1" className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm="10" xs="10" md="11">
                         <ProductCardContainer title="" btntitle=""/>
                    </Col>
                </Row>
                    <Pagination/>
            </Container>
        </div>
    )
}

export default ShopProductsPage