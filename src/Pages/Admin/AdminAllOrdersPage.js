import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminAllOrders from '../../Components/Admin/AdminAllProductsOrders/AdminAllProductsOrders'
import AdminSideBar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import Pagination from '../../Components/Utility/Pagination/Pagination'
const AdminAllOrdersPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar/>
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllOrders/>
                    <Pagination/>
                </Col>
            </Row>
        </Container>
    )
}
export default AdminAllOrdersPage