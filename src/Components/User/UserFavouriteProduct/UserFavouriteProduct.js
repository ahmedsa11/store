import React from 'react'
import { Row } from 'react-bootstrap';
import ProductCard from '../../Products/ProductCard/ProductCard';
import Pagination from '../../Utility/Pagination/Pagination';
const UserFavoriteProduct = () => {
    return (
        <div>
            <div className="admin-content-text pb-4">قائمة المفضلة</div>
            <Row className='justify-content-start'>
                <ProductCard/>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Row>
            <Pagination/>
        </div>
    )
}

export default UserFavoriteProduct