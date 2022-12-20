import React from 'react'
import { Row,Col, Spinner } from 'react-bootstrap'
import './AdminAddBrand.css'
import AddBrandHook from '../../../Hook/brand/add-brand-hook'
import { ToastContainer } from 'react-toastify'
const AdminAddBrand = () => {
    const [img,Name,changeName,handleSubmt,onImageChange,loading,isPress]=AddBrandHook()
    return (
        <div>
            
        <Row className="justify-content-start ">
            <div className="admin-content-text pb-4">اضافه ماركه جديده</div>
            <Col sm="8">
                <div className="text-form pb-2">صوره الماركه</div>
                <div>
                <label htmlFor="upload-photo">
                <img src={img} alt="sgd" height="100px" width="120px"style={{cursor:"pointer"}} />
                </label>
                <input type="file" name="photo" id="upload-photo"onChange={onImageChange}/>
              </div>
                <input
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder="اسم التصنيف"
                    onChange={changeName}
                    value={Name}
                />
            </Col>
        </Row>
        <Row>
            <Col sm="8" className="d-flex justify-content-end ">
                <button className="btn-save d-inline mt-2 "onClick={handleSubmt}>حفظ التعديلات</button>
            </Col>
        </Row>
        {
            isPress ? loading ? <Spinner animation="border" variant="primary" /> : <h4>تم الانتهاء</h4> : null
        }
        <ToastContainer />
    </div>
    )
}

export default AdminAddBrand