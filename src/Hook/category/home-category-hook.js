import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesdata } from "../../redux/actions/CategoriesAction";
const HomeCategoryPage=()=> {
  const colors = [
    "#F4DBA4",
    "#F4DBA4",
    "#0034FF",
    "#F4DBA4",
    "#FF6262",
    "F4DBA4",
  ];
  const dispatch = useDispatch();
  const { Category, loading } = useSelector((state) => state.getAllCategory);
  useEffect(() => {
    dispatch(getAllCategoriesdata());
  }, []);
  return [colors, Category, loading];
}

export default HomeCategoryPage;
