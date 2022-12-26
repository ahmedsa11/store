import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader/CategoryHeader'
import ProductCardContainer from '../../Components/Products/ProductContainer/ProductContainer'
import Pagination from '../../Components/Utility/Pagination/Pagination'
import SearchCountResult from '../../Components/Utility/SearchCountResult/SearchCountResult'
import SideFilter from '../../Components/Utility/SideFilter/SideFilter'
import ViewSearchProductHook from '../../Hook/Product/view-search-product-hook'
const ShopProductsPage = () => {
    const [items,pagination,onPress,getProud,results]=ViewSearchProductHook()
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult onClick={getProud} title={`هناك ${results} نتيجة بحث`}/>
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="1" className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm="10" xs="10" md="11">
                         <ProductCardContainer products={items} title="" btntitle=""/>
                    </Col>
                </Row>
                {pagination>1?<Pagination onPress={onPress}PageCount={pagination}/>:null} 

            </Container>
        </div>
    )
}

export default ShopProductsPage