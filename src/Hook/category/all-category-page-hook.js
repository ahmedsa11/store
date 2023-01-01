import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesdata } from "../../redux/actions/CategoriesAction";
const AllCategoryPageHook = () => {
  const dispatch = useDispatch();
  const { Category, loading } = useSelector((state) => state.getAllCategory);
  let PageCount = 0;
  // let limit=0
  // if(Category.paginationResult)
  // limit=Category.paginationResult.limit
  try {
    if (Category.paginationResult)
      PageCount = Category.paginationResult.numberOfPages;
  } catch (e) {}
  useEffect(() => {
    const get =async()=>{
      await  dispatch(getAllCategoriesdata(5));
    }
    get();

  }, []);

  const getPage = (page) => {
    dispatch(getAllCategoriesdata(3, page));
  };
  return [Category, loading, getPage, PageCount];
};

export default AllCategoryPageHook;
