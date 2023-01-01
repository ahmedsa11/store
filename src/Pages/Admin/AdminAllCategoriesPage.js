import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminAllCategories from '../../Components/Admin/AdminAllCategories/AdminAllCategories'
import AdminSideBar from '../../Components/Admin/AdminSidebar/AdminSidebar'
const AdminAllCategoriesPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllCategories  /> 
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllCategoriesPage