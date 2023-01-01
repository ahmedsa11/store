import React from 'react'
import { Col,Card, Modal, Button } from 'react-bootstrap'
import AllBrandAdminHook from '../../../Hook/brand/manage-All-Brand';
import './AdminBrandCard.css'
const AdminBrandCard = ({item}) => {
const [,,show,handleClose,handelDelete,handleShow]=AllBrandAdminHook(item._id)
    return (
      
        <Col
        xs="6"
        sm="6"
        md="4"
        lg="2"
        className="my-2 d-flex justify-content-center">
           <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title> <div >تاكيد الحذف</div></Modal.Title>
                </Modal.Header>
                <Modal.Body><div >هل انتا متاكد من عملية الحذف للماركه</div></Modal.Body>
                <Modal.Footer>
                    <Button  variant="success" onClick={handleClose}>
                        تراجع
                    </Button>
                    <Button  variant="dark" onClick={handelDelete}>
                        حذف
                    </Button>
                </Modal.Footer>
            </Modal>
        <Card
          className="my-1"
          style={{
            width: "100%",
            height: "151px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
            margin:"15px"
          }}>
            <div className="deletee" onClick={handleShow}>ازاله</div>
          <Card.Img style={{ width: "100%", height: "151px" ,objectFit:"contain"}} src={item.image} />
        </Card>
      </Col>
    )
}

export default AdminBrandCard