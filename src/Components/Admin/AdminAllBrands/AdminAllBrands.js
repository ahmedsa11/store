import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap';
import AllBrandAdminHook from '../../../Hook/brand/manage-All-Brand';
import AdminBrandCard from '../AdminBrandCard/AdminBrandCard';
import './AdminAllBrands.css'
const AdminAllBrands = () => {
  const [Brand,loading] =AllBrandAdminHook()
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
                <AdminBrandCard
                  key={index}
                  item={item}

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

export default AdminAllBrands