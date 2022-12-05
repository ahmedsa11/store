import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllOrdersItem from '../AdminAllOrdersItem.js/AdminAllOrdersItem'
import './AdminAllProductsOrders.css'
const AdminAllOrders = () => {
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع الطلبات</div>
            <Row className='justify-content-start'>
                <AdminAllOrdersItem/>
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
            </Row>
        </div>
    )
}

export default AdminAllOrders