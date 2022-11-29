import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoreCard from '../../Category/CategoryCard/CategoreCard'
import Subtitle from '../../Utility/Subtitle/Subtitle'
import clothe from '../../../images/clothe.png'
import cat2 from '../../../images/cat2.png'
import labtop from '../../../images/labtop.png'
import pic from '../../../images/pic.png'
import sale from '../../../images/sale.png'
function HomeCategory() {
  return (
   <>
         <Container>
            <Subtitle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
                <CategoreCard title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
                <CategoreCard title="اجهزة منزلية" img={cat2} background="#F4DBA4" />
                <CategoreCard title="اجهزة منزلية" img={labtop} background="#0034FF" />
                <CategoreCard title="اجهزة منزلية" img={sale} background="#F4DBA4" />
                <CategoreCard title="اجهزة منزلية" img={clothe} background="#FF6262" />
                <CategoreCard title="اجهزة منزلية" img={pic} background="#F4DBA4" />
            </Row>
        </Container>
   </>
  )
}

export default HomeCategory