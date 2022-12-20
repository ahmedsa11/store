import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import './AdminAddCategory.css'
import AddCategoryHook from '../../../Hook/category/add-category-hook'
const AdminAddCategory = () => {
    const [img,Name,changeName,handleSubmt,onImageChange,loading,isPress]=AddCategoryHook()
    return (
        <div>
            
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره التصنيف</div>
                   
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

export default AdminAddCategory