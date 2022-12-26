import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductGallery from '../ProductGalary/ProductGalary'
import ProductText from '../ProductText/ProductText'
const ProductDetalis = ({id,item, images, mobile, cat, brand}) => {
    return (
        <div>
            <Row className='py-3'>
                <Col lg="4">
                    <ProductGallery images={images} mobile={mobile}/>
                </Col>

                <Col lg="8">
                       <ProductText item={item} cat={cat} brand={brand} />
                </Col>
            </Row>
            
        </div>
    )
}

export default ProductDetalis