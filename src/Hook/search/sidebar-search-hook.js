import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBranddata } from "../../redux/actions/BrandsAction";
import { getAllCategoriesdata } from "../../redux/actions/CategoriesAction";
import ViewSearchProductHook from "../Product/view-search-product-hook";

const SidebarSearchHook=()=> {
  const [items, pagination, onPress, getProud, results] =
    ViewSearchProductHook();
    const [From, setPriceFrom] = useState(0)
    const [To, setToFrom] = useState(0)
  const dispatch = useDispatch();
  const [catChecked, setCatChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);
  var queryCat = "",
    queryBrand = "";
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategoriesdata());
      await dispatch(getAllBranddata());
    };
    get();
  }, []);
  const { Category } = useSelector((state) => state.getAllCategory);
  const { Brand } = useSelector((state) => state.getAllBrand);

  //to get category
  let category = [];
  try {
  if (Category.data) category = Category.data;}catch (e) { }

  //to get category
  let brand = [];
  try {
  if (Brand.data) brand = Brand.data;}catch (e) { }

  const clickCategory = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setCatChecked([]);
    } else {
      if (e.target.checked === true) {
        setCatChecked([...catChecked, value]);
      } else if (e.target.checked === false) {
        const newArry = catChecked.filter((e) => e !== value);
        setCatChecked(newArry);
      }
    }
  };

  useEffect(() => {
    queryCat = catChecked.map((val) => "category[in][]=" + val).join("&");
    localStorage.setItem("catCecked", queryCat);
    setTimeout(() => {
      getProud();
    }, 1000);
  }, [catChecked]);

  //when user press any category
  const clickBrand = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrandChecked([]);
    } else {
      if (e.target.checked === true) {
        setBrandChecked([...brandChecked, value]);
      } else if (e.target.checked === false) {
        const newArry = brandChecked.filter((e) => e !== value);
        setBrandChecked(newArry);
      }
    }
  };

  useEffect(() => {
    queryBrand = brandChecked.map((val) => "brand[in][]=" + val).join("&");
    localStorage.setItem("brandCecked", queryBrand);
    setTimeout(() => {
      getProud();
    }, 1000);
  }, [brandChecked]);



  const priceFrom = (e) => {
      localStorage.setItem("priceFrom", e.target.value)

      setPriceFrom(e.target.value)
  }
  const priceTo = (e) => {
      localStorage.setItem("priceTo", e.target.value)
      setToFrom(e.target.value)
  }

  useEffect(() => {
      setTimeout(() => {
        getProud();
      }, 1000);
  }, [From, To])



  return [category, brand, clickCategory, clickBrand,priceFrom,priceTo];
}

export default SidebarSearchHook;
