import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ViewAllReviewHook from '../../../Hook/review/View-All-Review-Hook'
import rate from '../../../images/rate.png'
import Pagination from '../../Utility/Pagination/Pagination'
import RateItem from '../RateItem/RateItem'
import RatePost from '../RatePost/RatePost'
import './RateContainer.css'
const RateContainer = ({rateQty,rateAvg}) => {
    const { id } = useParams()
    const [allReview, onPress] = ViewAllReviewHook(id)
    return (
        <Container className='rate-container'>
            <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">التقيمات</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}</div>
                    <div className="rate-count d-inline p-1 pt-2">({`${rateQty}  تقيم`})</div>
                </Col>
            </Row>
            <RatePost/>

            {allReview&&allReview.data ? (allReview.data.map((review, index) => {
                return (<RateItem key={index} review={review} />)
            })) : <h6>لا يوجد تقيمات الان</h6>} 


            {
                allReview.paginationResult && allReview.paginationResult.numberOfPages >= 2 ? (<Pagination pageCount={allReview.paginationResult ? allReview.paginationResult.numberOfPages : 0} onPress={onPress} />) : null
            }
        </Container>
    )
}

export default RateContainer