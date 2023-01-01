import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap';
import AllCategoryAdminHook from '../../../Hook/category/manage-All-Category';
import AdminCategoryCard from '../AdminCategoryCard/AdminCategoryCard';
import './AdminAllCategories.css'
const AdminAllCategories= () => {
  const [Category,loading] =AllCategoryAdminHook()
    return (
        <Container>
            <div className="admin-content-text mt-2 ">كل التصنيفات</div>
            {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Row className="my-2 d-flex ">
          {Category.data ? (
            Category.data.map((item, index) => {
              return (
                <AdminCategoryCard
                  key={index}
                  item={item}

                />
              );
            })
          ) : (
            <h3>لايوجد تصنيفات</h3>
          )}
        </Row>
      )}
        </Container>
    )
}

export default AdminAllCategories