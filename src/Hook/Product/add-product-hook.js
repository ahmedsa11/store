import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBranddata } from "../../redux/actions/BrandsAction";
import { getAllCategoriesdata } from "../../redux/actions/CategoriesAction";
import { CreateProducts } from "../../redux/actions/ProductsAction";
import { GetOneSubcategory } from "../../redux/actions/SubcategoryAction";
import notify from "../Notifcation";
const AddProductHook=()=> {
  const { Category } = useSelector((state) => state.getAllCategory);
  const { Brand } = useSelector((state) => state.getAllBrand);
  const { Subcategory } = useSelector((state) => state.getAllSubcategory);
  const { Product } = useSelector((state) => state.getAllProduct);
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);
  const [images, setImages] = useState([]);
  const [ProdName, setProdName] = useState("");
  const [ProdDescription, setProdDescription] = useState("");
  const [PriceBefore, setPriceBefore] = useState();
  const [PriceAfter, setPriceAfter] = useState();
  const [Qty, setQty] = useState();
  const [Catid, setCatid] = useState("");
  const [SelectedSubcat, setSelectedSubcat] = useState([]);
  const [Brandid, setBrandid] = useState("");
  const [colors, setColors] = useState([]);
  const [showPic, setShowPic] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  useEffect(() => {
    dispatch(getAllCategoriesdata());
    dispatch(getAllBranddata());
  }, []);

  //to change name state
  const onChangeProdName = (event) => {
    event.persist();
    setProdName(event.target.value);
  };
  //to change name state
  const onChangeDesName = (event) => {
    event.persist();
    setProdDescription(event.target.value);
  };
  //to change name state
  const onChangePriceBefor = (event) => {
    event.persist();
    setPriceBefore(event.target.value);
  };
  //to change name state
  const onChangePriceAfter = (event) => {
    event.persist();
    setPriceAfter(event.target.value);
  }; //to change name state
  const onChangeQty = (event) => {
    event.persist();
    setQty(event.target.value);
  };
  const onChangeColor = (event) => {
    event.persist();
    setShowPic(!showPic);
  };

  const onSelectCategory = async (e) => {
    if (e.target.value === "0") {
      setOptions([]);
    } else if (e.target.value !== "0") {
      await dispatch(GetOneSubcategory(e.target.value));
    }
    setCatid(e.target.value);
  };
  useEffect(() => {
    if (Catid !== "0") {
      if (Subcategory.data) {
        setOptions(Subcategory.data);
      }
    }
  }, [Catid]);
  const onSelectBrand = (e) => {
    setBrandid(e.target.value);
  };
  const onSelectsubcat = (selectedList) => {
    setSelectedSubcat(selectedList);
  };
  const onRemovesubcat = (selectedList) => {
    setSelectedSubcat(selectedList);
  };

  const handleColors = (color) => {
    setColors([...colors, color.hex]);
    setShowPic(!showPic);
  };
  const removeColors = (color) => {
    const NewColors = colors.filter((e) => e !== color);
    setColors(NewColors);
  };
  //to convert base 64 to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      Catid === "0" ||
      ProdName === "" ||
      ProdDescription === "" ||
      images.length <= 0 ||
      PriceBefore <= 0
    ) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }
    // convert base 64 image to file
    const imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    //convert array of base 64 image to file
    const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
      (item, index) => {
        return dataURLtoFile(images[index], Math.random() + ".png");
      }
    );
    const formData = new FormData();
    formData.append("title", ProdName);
    formData.append("description", ProdDescription);
    formData.append("quantity", Qty);
    formData.append("price", PriceBefore);
    formData.append("priceAfterDiscount", PriceAfter);
    formData.append("imageCover", imgCover);
    formData.append("category", Catid);
    formData.append("brand", Brandid);
    itemImages.map((item) => formData.append("images", item));
    colors.map((color) => formData.append("availableColors", color));
    SelectedSubcat.map((item) => formData.append("subcategory", item._id));
    setLoading(true);
    setIsPress(true);
    await dispatch(CreateProducts(formData));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setCatid("0");
      setColors([]);
      setImages([]);
      setProdName("");
      setProdDescription("");
      setPriceBefore("السعر قبل الخصم");
      setPriceAfter("السعر بعد الخصم");
      setQty("الكمية المتاحة");
      setBrandid("0");
      setSelectedSubcat([]);
      setIsPress(false);
      setTimeout(() => setLoading(true), 1500);
      if (Product) {
        if (Product.status === 201) {
          notify("تم الاضافة بنجاح", "success");
        } else {
          notify("هناك مشكله", "error");
        }
      }
    }
  }, [loading]);
  return [
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
  ];
}

export default AddProductHook;
