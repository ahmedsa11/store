import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap';
import './BrandContainer.css'
import BrandCard from '../BrandCard/BrandCard';
const BrandContainer = ({loading,Brand}) => {
    return (
        <Container>
            <div className="admin-content-text mt-2 ">كل الماركات</div>
            {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Row className="my-2 d-flex ">
          {Brand.data ? (
            Brand.data.map((item, index) => {
              return (
                <BrandCard
                  key={index}
                  title={item.name}
                  img={item.image}
                />
              );
            })
          ) : (
            <h3>لايوجد ماركات</h3>
          )}
        </Row>
      )}
        </Container>
    )
}

export default BrandContainer