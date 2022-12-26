import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductsCard from '../AdminAllProductsCard/AdminAllProductsCard'
import './AdminAllProducts.css'
const AdminAllProducts = ({products}) => {
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع المنتجات</div>
            <Row className='justify-content-start'>
              {products?
              (
                products.map((item,idx)=>{return (<AdminAllProductsCard key={idx} item={item} />)})):(<h1>لا توجد منتجات</h1>)} 
            </Row>
            
        </div>
    )
}

export default AdminAllProducts