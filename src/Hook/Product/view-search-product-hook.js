import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsSearch } from "../../redux/actions/ProductsAction";
function ViewSearchProductHook() {
  const dispatch = useDispatch();
  let limit = 8;
  const getProud = async () => {
    getStorge();
    sortData();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${brandCat}${pricefromString}${priceToString}`
      )
    );
  };
  useEffect(() => {
    getProud();
  }, []);
  const AllProducts = useSelector((state) => state.getAllProduct.AllProducts);
  let items = [];
  let pagination = [];
  let results = 0;
  if (AllProducts.data) {
    items = AllProducts.data;
  } else {
    items = [];
  }
  if (AllProducts.paginationResult) {
    pagination = AllProducts.paginationResult.numberOfPages;
  } else {
    pagination = [];
  }
  if (AllProducts.results) {
    results = AllProducts.results;
  } else {
    pagination = [];
  }

  let pricefromString = "",
    priceToString = "";
  let word = "",
    queryCat = "",
    brandCat = "",
    priceTo = "",
    priceFrom = "",
    OneCat = "",
    OneCatString = "";
  const getStorge = () => {
    if (localStorage.getItem("searchWord") != null)
      word = localStorage.getItem("searchWord");
    if (localStorage.getItem("catCecked") != null)
      queryCat = localStorage.getItem("catCecked");
    if (localStorage.getItem("brandCecked") != null)
      brandCat = localStorage.getItem("brandCecked");
    if (localStorage.getItem("priceTo") != null)
      priceTo = localStorage.getItem("priceTo");
    if (localStorage.getItem("priceFrom") != null)
      priceFrom = localStorage.getItem("priceFrom");
    // if (localStorage.getItem("OneCat") != null)
    //   OneCat = localStorage.getItem("OneCat");
    // if (OneCat === "") {
    //   OneCatString = "";
    // } else {
    //   OneCatString = `&category=${OneCat}`;
    //   console.log(OneCatString);
    // }
    if (priceFrom === "" || priceFrom <= 0) {
      pricefromString = "";
    } else {
      pricefromString = `&price[gt]=${priceFrom}`;
    }

    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }
  };

  let sortType = "",
    sort;
  ///when user choose sort type
  const sortData = () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }

    if (sortType === "السعر من الاقل للاعلي") sort = "+price";
    else if (sortType === "السعر من الاعلي للاقل") sort = "-price";
    else if (sortType === "") sort = "";
    else if (sortType === "الاكثر مبيعا") sort = "-sold";
    else if (sortType === "الاعلي تقييما") sort = "-quantity";
  };

  const onPress = async (page) => {
    let word = "";
    if (localStorage.getItem("searchWord") != null) {
      word = localStorage.getItem("searchWord");
    }
    getStorge();
    sortData();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${brandCat}${pricefromString}${priceToString}`
      )
    );
  }; 
  return [items, pagination, onPress, getProud, results];
}

export default ViewSearchProductHook;
