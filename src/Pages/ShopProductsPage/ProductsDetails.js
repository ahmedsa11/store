import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader/CategoryHeader'
import ProductCardContainer from '../../Components/Products/ProductContainer/ProductContainer'
import ProductDetalis from '../../Components/Products/ProductDetalis/ProductDetalis'
import RateContainer from '../../Components/Rate/RateContainer/RateContainer'
const ProductDetalisPage = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader/>
            <Container>
                <ProductDetalis />
                <RateContainer/>
                <ProductCardContainer title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductDetalisPage