import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductsCard from '../AdminAllProductsCard/AdminAllProductsCard'
import './AdminAllProducts.css'
const AdminAllProducts = () => {
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع المنتجات</div>
            <Row className='justify-content-start'>
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
            </Row>
            
        </div>
    )
}

export default AdminAllProducts