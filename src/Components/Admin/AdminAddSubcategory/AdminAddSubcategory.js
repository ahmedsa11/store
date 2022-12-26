import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import "./AdminAddSubcategory.css";
import { ToastContainer } from "react-toastify";
import AddSubcategoryHook from "../../../Hook/subcategory/add-subcategory-hook";
const AdminAddSubCategory = () => {
    const [
      id,
      name,
      Category,
      Subcategory,
      handleChange,
      changeName,
      handleSubmit,
      loading,
      isPress,
    ]=AddSubcategoryHook()
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
            onChange={changeName}
            value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
          />
          <select
            name="Category"
            id="category"
            className="select mt-3 px-2 "
            onChange={handleChange}
          >
            <option value="0">اختر تصنيف رئيسي</option>
            {Category.data
              ? Category.data.map((item) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {isPress ? (
        loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <h4>تم الانتهاء</h4>
        )
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default AdminAddSubCategory;
