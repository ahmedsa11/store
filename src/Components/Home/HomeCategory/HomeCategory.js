import React, { useEffect } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoreCard from '../../Category/CategoryCard/CategoreCard'
import Subtitle from '../../Utility/Subtitle/Subtitle'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategoriesdata } from '../../../redux/actions/getAllCategories'
function HomeCategory() {
  const colors=['#F4DBA4','#F4DBA4','#0034FF','#F4DBA4','#FF6262','F4DBA4']
  const dispatch=useDispatch()
  const {Category,loading}=useSelector(state=>state.getAllCategory)
  useEffect(()=>{
      dispatch(getAllCategoriesdata())
     
  },[])
  return (
   <>
         <Container>
            <Subtitle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
            {loading?(<Spinner animation="border" variant="primary" />):(        <Row className='my-2 d-flex justify-content-between'>
              {
                Category.data?(
                  Category.data.slice(0,5).map((item,index)=>{
                    return(
                      <CategoreCard key={index} title={item.name} img={item.image} background={colors[index]} />
                    )
                  })
                ):(<h3>لايوجد تصنيفات</h3>)
              }
             
            </Row>)}
    
        </Container>
   </>
  )
}

export default HomeCategory