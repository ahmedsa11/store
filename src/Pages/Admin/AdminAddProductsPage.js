import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminAddProducts from '../../Components/Admin/AdminAddProducts/AdminAddProducts'
import AdminSideBar from '../../Components/Admin/AdminSidebar/AdminSidebar'
const AdminAddProductsPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                     <AdminAddProducts/>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAddProductsPage