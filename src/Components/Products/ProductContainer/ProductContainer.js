import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Subtitle from '../../Utility/Subtitle/Subtitle'
import ProductCard from '../ProductCard/ProductCard'
const ProductCardContainer = ({title ,btntitle,pathText}) => {
    return (
        <Container>
            <Subtitle title={title} btntitle={btntitle} pathText={pathText}/>
            <Row className='my-2 d-flex justify-content-between'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Row>
        </Container>
    )
}

export default ProductCardContainer