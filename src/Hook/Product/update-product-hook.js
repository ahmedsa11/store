import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBranddata } from "../../redux/actions/BrandsAction";
import { getAllCategoriesdata } from "../../redux/actions/CategoriesAction";
import {
  GetOneProducts,
  updateProducts,
} from "../../redux/actions/ProductsAction";
import { GetOneSubcategory } from "../../redux/actions/SubcategoryAction";
import notify from "../Notifcation";
function UpdateProductHook(id) {
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
  const item = useSelector((state) => state.getAllProduct.OneProduct);
  useEffect(() => {
    const Go = async () => {
      await dispatch(GetOneProducts(id));
      await dispatch(getAllCategoriesdata());
      await dispatch(getAllBranddata());
    };
    Go();
  }, []);
  const Category = useSelector((state) => state.getAllCategory.Category);
  const { Brand } = useSelector((state) => state.getAllBrand);
  const { Subcategory } = useSelector((state) => state.getAllSubcategory);
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

  const onSelectCategory = (e) => {
    setCatid(e.target.value);
  };
  useEffect(() => {
    if (Catid != 0) {
      const run = async () => {
        await dispatch(GetOneSubcategory(Catid));
      };
      run();
    }
  }, [Catid]);
  useEffect(() => {
    if (Subcategory) {
      setOptions(Subcategory.data);
    }
  }, [Subcategory]);

  useEffect(() => {
    if (item.data) {
      setImages(item.data.images);
      setProdName(item.data.title);
      setProdDescription(item.data.description);
      setPriceBefore(item.data.price);
      setQty(item.data.quantity);
      setCatid(item.data.category);
      setBrandid(item.data.brand);
      setColors(item.data.availableColors);
    }
  }, [item]);

  const onSelectBrand = (e) => {
    setBrandid(e.target.value);
  };
  const onSelectsubcat = (selectedList) => {
    console.log(SelectedSubcat);
    setSelectedSubcat(selectedList);
  };
  const onRemovesubcat = (selectedList) => {
    console.log(SelectedSubcat);
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

  //convert url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

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
    let imgCover;
    if (images[0].length <= 1000) {
      convertURLtoFile(images[0]).then((val) => (imgCover = val));
    } else {
      imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    }
    let itemImages = [];
    //convert array of base 64 image to file
    Array.from(Array(Object.keys(images).length).keys()).map((item, index) => {
      if (images[index].length <= 1000) {
        convertURLtoFile(images[index]).then((val) => itemImages.push(val));
      } else {
        itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"));
      }
    });

    const formData = new FormData();
    formData.append("title", ProdName);
    formData.append("description", ProdDescription);
    formData.append("quantity", Qty);
    formData.append("price", PriceBefore);
    formData.append("category", Catid);
    formData.append("brand", Brandid);

    setTimeout(() => {
      formData.append("imageCover", imgCover);
      itemImages.map((item) => formData.append("images", item));
    }, 1000);

    colors.map((color) => formData.append("availableColors", color));
    SelectedSubcat.map((item) => formData.append("subcategory", item._id));
    setTimeout(async () => {
      setLoading(true);
      setIsPress(true);
      await dispatch(updateProducts(id, formData));
      setLoading(false);
    }, 1000);
  };
  const { UpdateProducts } = useSelector((state) => state.getAllProduct);
  useEffect(() => {
    if (loading === false) {
      setCatid(0);
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
      if (UpdateProducts) {
       
        if (UpdateProducts.status === 200) {
          notify("تم الاضافة بنجاح", "success");
        } else {
          notify("هناك مشكله", "error");
        }
      }
    }
  }, [loading]);
  return [
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
  ];
}

export default UpdateProductHook;
