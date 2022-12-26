import React from 'react'
import BrandFeatured from '../../Components/Brand/BrandFeature/BrandFeatuer'
import DiscountSection from '../../Components/Home/Discount/Discount'
import HomeCategory from '../../Components/Home/HomeCategory/HomeCategory'
import Slider from '../../Components/Home/Slider/slider'
import ProductCardContainer from '../../Components/Products/ProductContainer/ProductContainer'
import ViewHomeProductHook from '../../Hook/Product/view-home-product-hook'
function HomePage() {
  const [items]=ViewHomeProductHook()
  return (
    <div className='font' style={{ minHeight: '670px' }}>
    <Slider/>
    <HomeCategory />
    <ProductCardContainer products={items} title="الاكثر مبيعا" btntitle="المزيد" pathText="/products"/>
    <DiscountSection/>
    <ProductCardContainer products={items} title="احدث الازياء" btntitle="المزيد" pathText="/products" />
    <BrandFeatured title="اشهر الماركات" btntitle="المزيد" />
    </div>
  )
}

export default HomePage