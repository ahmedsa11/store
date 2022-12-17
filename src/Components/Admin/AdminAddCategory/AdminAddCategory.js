import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import avatar from '../../../images/avatar.png'
import { CreateCategory } from '../../../redux/actions/getAllCategories'
import './AdminAddCategory.css'
const AdminAddCategory = () => {
    const dispatch=useDispatch()
    const [img,setImg]=useState(avatar)
    const [Name,setName]=useState('')
    const [selected,setSelected]=useState(null)
    const onImageChange = (e) => {
        if(e.target.files&&e.target.files[0]){
            setImg(URL.createObjectURL(e.target.files[0]))
            setSelected(e.target.files[0])
        }
    }
    const handleSubmt = (e) => {
        e.preventDefault()
        const formdata=new FormData()
        formdata.append("name",Name)
        formdata.append("image",selected)
        console.log(Name)
        console.log(img)
        dispatch(CreateCategory(formdata))
        setName('')
        setImg(avatar)
    }
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
                        onChange={(e)=>setName(e.target.value)}
                        value={Name} 
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 "onClick={handleSubmt}>حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddCategory