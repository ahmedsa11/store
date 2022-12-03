import HomePage from "./Pages/HomePage/HomePage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/auth/Login/Login";
import Layout from "./Components/Layout/Layout";
import Register from "./Pages/auth/Register/Register";
import AllCategoryPage from "./Pages/AllCategoryPage/AllCategoryPage";
import AllBrand from "./Pages/AllBrandPage/AllBrandPage";
import ShopProductsPage from "./Pages/ShopProductsPage/ShopProductsPage";
import ProductDetalisPage from "./Pages/ShopProductsPage/ProductsDetails";
function App() {
  return (
    <>
    <Layout>
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/allcategory" element={<AllCategoryPage/>}/>
        <Route path="/allbrand" element={<AllBrand/>}/>
        <Route path="/Products" element={<ShopProductsPage/>}/>
        <Route path="/Products/:id" element={<ProductDetalisPage/>}/>
      </Routes>
      </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
