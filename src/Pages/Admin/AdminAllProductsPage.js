import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts/AdminAllProducts'
import AdminSideBar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import Pagination from '../../Components/Utility/Pagination/Pagination'
import ViewProductAdminHook from '../../Hook/Product/view-product-admin'
const AdminAllProductsPage = () => {
    const [items, pagination,onPress]=ViewProductAdminHook()
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllProducts products={items} />
                 {pagination>1?<Pagination onPress={onPress}PageCount={pagination}/>:null} 
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductsPage