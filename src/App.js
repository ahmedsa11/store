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
import CartPage from "./Pages/CartPage/CartPage";
import ChoosePayMethoudPage from "./Pages/CheckOut/ChoosePaymentMethod";
import AdminAllProductsPage from "./Pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./Pages/Admin/AdminOrdersDetails";
import AdminAddBrandPage from "./Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminAddProductsPage from "./Pages/Admin/AdminAddProductsPage";
import AdminAddSubCategoryPage from "./Pages/Admin/AdminAddSubcategoryPage";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Pages/User/UserFavouriteProductsPage";
import UserAllAddresPage from "./Pages/User/UserAllAdressPage";
import UserAddAddressPage from "./Pages/User/UserAddAdressPage";
import UserEditAddressPage from "./Pages/User/UserEditAddressPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import AdminUpdateProductPage from "./Pages/Admin/AdminUpdateProductPage";
import Forgetpassword from "./Pages/auth/Forgetpassword/Forgetpassword";
import VerifyPassword from "./Pages/auth/VerifyPassword/VerifyPassword";
import Resetpassword from "./Pages/auth/Resetpassword/Resetpassword";
import AdminAddCouponPage from "./Pages/Admin/AdminAddCouponPage";
import AdminEditCouponPage from "./Pages/Admin/AdminEditCouponPage";
import AdminAllBrandsPage from "./Pages/Admin/AdminAllBrandsPage";
import AdminAllCategoriesPage from "./Pages/Admin/AdminAllCategoriesPage";
function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/allcategory" element={<AllCategoryPage />} />
            <Route path="/allbrand" element={<AllBrand />} />
            <Route path="/Products" element={<ShopProductsPage />} />
            <Route path="/Products/:id" element={<ProductDetalisPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="/order/paymethoud"
              element={<ChoosePayMethoudPage />}
            />

            <Route
              path="/admin/allproducts"
              element={<AdminAllProductsPage />}
            />
            <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
            <Route
              path="/admin/orders/:id"
              element={<AdminOrderDetalisPage />}
            />
            <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
            <Route
              path="/admin/addcategory"
              element={<AdminAddCategoryPage />}
            />
            <Route
              path="/admin/addsubcategory"
              element={<AdminAddSubCategoryPage />}
            />
            <Route
              path="/admin/addproduct" 
              element={<AdminAddProductsPage />}
            />
            <Route path="/user/allorders" element={<UserAllOrdersPage/>} />
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
          <Route path="/user/addresses" element={<UserAllAddresPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address/:id" element={<UserEditAddressPage />} />  
          <Route path="/user/profile" element={<UserProfilePage />} /> 
          <Route path="/admin/updateproduct/:id" element={<AdminUpdateProductPage />} /> 
          <Route path="/user/forget-password" element={<Forgetpassword />} />
          <Route path="/user/verify-code" element={<VerifyPassword />} />
          <Route path="/user/reset-password" element={<Resetpassword />} />
          <Route path="/admin/addcoupon" element={<AdminAddCouponPage />} />
          <Route path="/admin/editcoupon/:id" element={<AdminEditCouponPage />} />
          <Route path="/admin/allbrands" element={<AdminAllBrandsPage />} />
          <Route path="/admin/allcategories" element={<AdminAllCategoriesPage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
