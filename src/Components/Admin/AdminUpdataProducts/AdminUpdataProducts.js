import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import add from "../../../images/add.png";
import "./AdminUpdataProducts.css";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import UpdateProductHook from "../../../Hook/Product/update-product-hook";
import { useParams } from "react-router-dom";
const AdminUpdataProducts = () => {
    const {id}=useParams()
const [ 
  Brandid,
  Catid,
  loading,
  isPress,
  setImages,
  onSelectsubcat,
  onRemovesubcat,
  options,
  handleColors,
  removeColors,
  onSelectCategory,
  handleSubmit,
  onSelectBrand,
  onChangeDesName,
  onChangeQty,
  onChangeColor,
  onChangePriceAfter,
  onChangePriceBefor,
  onChangeProdName,
  showPic,
  Category,
  Brand,
  PriceAfter,
  images,
  colors,
  PriceBefore,
  Qty,
  ProdDescription,
  ProdName,
]=UpdateProductHook(id)
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> تعديل المنتج </div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>
          <MultiImageInput
            images={images}
            setImages={setImages}
            theme={"light"}
            allowCrop={false}
            max={5}
          />
          <input
            value={ProdName}
            onChange={onChangeProdName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
          />
          <textarea
            value={ProdDescription}
            onChange={onChangeDesName}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
          />
          <input
            value={PriceBefore}
            onChange={onChangePriceBefor}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
          />
          <input
            value={PriceAfter}
            onChange={onChangePriceAfter}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="سعر المنتج"
          />
          <input
            value={Qty}
            onChange={onChangeQty}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكميه المتاحه"
          />
          <select
          value={Catid}
            name="categories"
            id="cat"
            className="select input-form-area mt-3 px-2 "
            onChange={onSelectCategory}
          >
            <option value="0">التصنيف الرئيسي</option>
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

          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelectsubcat}
            onRemove={onRemovesubcat}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
          value={Brandid}
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2 "
            onChange={onSelectBrand}
          >
            <option value="0">الماركة</option>
            {Brand.data
              ? Brand.data.map((item) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {colors.length > 0
              ? colors.map((item, index) => {
                  return (
                    <div
                      onClick={() => removeColors(item)}
                      key={index}
                      className="color text-center ms-2 border  mt-1"
                      style={{ backgroundColor: item, color: "#fff" }}
                    >
                      x
                    </div>
                  );
                })
              : null}

            <img
              style={{ cursor: "pointer" }}
              onClick={onChangeColor}
              src={add}
              alt=""
              width="30px"
              height="35px"
              className=""
            />
            {showPic ? <CompactPicker onChangeComplete={handleColors} /> : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
        {
                isPress ? loading ? <Spinner animation="border" variant="primary" /> : <h4>تم الانتهاء</h4> : null
            }
        <ToastContainer/>
      </Row>
    </div>
  );
};

export default AdminUpdataProducts;
