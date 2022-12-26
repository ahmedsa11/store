import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import mobile from "../../images/mobile.png";
import { getOneCategory } from "../../redux/actions/CategoriesAction";
import {
  GetOneProducts,
  GetProductsLike,
} from "../../redux/actions/ProductsAction";
import { GetOneBrand } from "../../redux/actions/BrandsAction";
function ViewOneProductHook(id) {
  const dispatch = useDispatch();
  const OneProduct = useSelector((state) => state.getAllProduct.OneProduct);
  const OneCategory = useSelector((state) => state.getAllCategory.OneCategory);
  const OneBrand = useSelector((state) => state.getAllBrand.OneBrand);
  const ProductLike = useSelector((state) => state.getAllProduct.ProductLike);
  useEffect(() => {
    dispatch(GetOneProducts(id));
  }, []);
  let item = [];
  if (OneProduct.data) {
    item = OneProduct.data;
  } else {
    item = [];
  }
  useEffect(() => {
    if (item.category) {
      dispatch(getOneCategory(item.category));
    }
    if (item.brand) {
      dispatch(GetOneBrand(item.brand));
    }
    if (item.category) {
      dispatch(GetProductsLike(item.category));
    }
  }, [item]);

  let images = [];
  if (item.images) {
    images = item.images.map((img) => {
      return { original: img };
    });
  } else {
    images = [{ original: `${mobile}` }];
  }

  let cat = [];
  if (OneCategory.data) {
    cat = OneCategory.data;
  } else {
    cat = [];
  }

  let brand = [];
  if (OneBrand.data) {
    brand = OneBrand.data;
  } else {
    brand = [];
  }
  let prod = [];
  if (ProductLike) {
    prod = ProductLike.data;
    if(prod){
      prod = ProductLike.data.slice(0,4);
    }
  } else {
    prod = [];
  }
  return [item, images, mobile, cat, brand, prod];
}
export default ViewOneProductHook;
