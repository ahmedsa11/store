import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductGallery from '../ProductGalary/ProductGalary'
import ProductText from '../ProductText/ProductText'
const ProductDetalis = () => {
    return (
        <div>
            <Row className='py-3'>
                <Col lg="4">
                    <ProductGallery />
                </Col>

                <Col lg="8">
                       <ProductText />
                </Col>
            </Row>
            
        </div>
    )
}

export default ProductDetalis