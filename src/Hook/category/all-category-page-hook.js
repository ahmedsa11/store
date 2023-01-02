import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesdata } from "../../redux/actions/CategoriesAction";
const AllCategoryPageHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const get =async()=>{
      await  dispatch(getAllCategoriesdata(5));
    }
    get();

  }, []);

  const { Category, loading } = useSelector((state) => state.getAllCategory);
  let PageCount = 0;
  // let limit=0
  // if(Category.paginationResult)
  // limit=Category.paginationResult.limit
  try {
    if (Category.paginationResult)
      PageCount = Category.paginationResult.numberOfPages;
  } catch (e) {}


  const getPage = async(page) => {
   await dispatch(getAllCategoriesdata(5, page));
  };
  return [Category, loading, getPage, PageCount];
};

export default AllCategoryPageHook;
