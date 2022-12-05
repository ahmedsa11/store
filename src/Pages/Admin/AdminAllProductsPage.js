import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts/AdminAllProducts'
import AdminSideBar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import Pagination from '../../Components/Utility/Pagination/Pagination'
const AdminAllProductsPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllProducts />
                    <Pagination />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductsPage