import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import AdminUpdataProducts from '../../Components/Admin/AdminUpdataProducts/AdminUpdataProducts'
const AdminUpdateProductPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                     <AdminUpdataProducts/>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminUpdateProductPage