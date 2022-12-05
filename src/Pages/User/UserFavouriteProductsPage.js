import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserFavoriteProduct from '../../Components/User/UserFavouriteProduct/UserFavouriteProduct'
import UserSideBar from '../../Components/User/UserSidebar/UserSidebar'
const UserFavoriteProductsPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <UserFavoriteProduct />
                </Col>
            </Row>
        </Container>
    )
}

export default UserFavoriteProductsPage