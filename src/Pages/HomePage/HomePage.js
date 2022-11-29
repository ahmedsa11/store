import React from 'react'
import BrandFeatured from '../../Components/Brand/BrandFeature/BrandFeatuer'
import DiscountSection from '../../Components/Home/Discount/Discount'
import HomeCategory from '../../Components/Home/HomeCategory/HomeCategory'
import Slider from '../../Components/Home/Slider/slider'
import ProductCardContainer from '../../Components/Products/ProductContainer/ProductContainer'
import Footer from '../../Components/Utility/footer/footer'
import Navbarr from '../../Components/Utility/Navbar/Navbar'
function HomePage() {
  return (
    <div className='font' style={{ minHeight: '670px' }}>
      <Navbarr/>
    <Slider/>
    <HomeCategory />
    <ProductCardContainer title="الاكثر مبيعا" btntitle="المزيد" pathText="/products"/>
    <DiscountSection/>
    <ProductCardContainer title="احدث الازياء" btntitle="المزيد" pathText="/products" />
    <BrandFeatured title="اشهر الماركات" btntitle="المزيد" />
    <Footer/>
    </div>
  )
}

export default HomePage