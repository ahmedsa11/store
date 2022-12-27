import { useEffect, useState } from "react";
import notify from "../Notifcation";
import { getAllCategoriesdata } from "../../redux/actions/CategoriesAction";
import { useDispatch, useSelector } from "react-redux";
import { CreateSubcategory } from "../../redux/actions/SubcategoryAction";
const AddSubcategoryHook=()=> {
  const dispatch = useDispatch();
  const { Category } = useSelector((state) => state.getAllCategory);
  const {Subcategory} = useSelector((state) => state.getAllSubcategory);
  const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  useEffect(() => {
    dispatch(getAllCategoriesdata());
  }, [loading]);
  const handleChange = (e) => {
    e.persist();
    setId(e.target.value);
  };
  const changeName = (e) => {
    e.persist();
    setName(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || id === "0") {
      notify("من فضلك اكمل البيانات  ", "warn");
      return;
    }
    if (id === "0") {
      notify("من فضلك اختر تصنيف رئيسي", "warn");
      return;
    }
    if (name === "") {
      notify("من فضلك اكتب اسم التصنيف  ", "warn");
      return;
    }

    setLoading(true);
    setIsPress(true);
    await dispatch(
      CreateSubcategory({
        name,
        category: id,
      })
    );
    setLoading(false);
  };
  useEffect(() => {
    if (!loading) {
      setId("0");
      setName("");
      setIsPress(false);
      setTimeout(() => setLoading(true), 1500);
      if (Subcategory) {
        if (Subcategory.status === 201) {
          notify("تمت عملية الاضافة بنجاح", "success");
        } else {
          notify("هناك مشكله فى عملية الاضافة", "error");
        }
      }
    }
  }, [loading]);
  return [
    id,
    name,
    Category,
    Subcategory,
    handleChange,
    changeName,
    handleSubmit,
    loading,
    isPress,
  ];
}

export default AddSubcategoryHook;
