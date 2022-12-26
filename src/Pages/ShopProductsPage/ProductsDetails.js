import React from "react";
import { Container } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader/CategoryHeader";
import ProductCardContainer from "../../Components/Products/ProductContainer/ProductContainer";
import ProductDetalis from "../../Components/Products/ProductDetalis/ProductDetalis";
import RateContainer from "../../Components/Rate/RateContainer/RateContainer";
import { useParams } from "react-router-dom";
import ViewOneProductHook from "../../Hook/Product/view-product-details-hook";
const ProductDetalisPage = () => {
  const { id } = useParams();
  const [item, images, mobile, cat, brand, prod] = ViewOneProductHook(id);
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetalis
          item={item}
          mobile={mobile}
          cat={cat}
          brand={brand}
          images={images}
          id={id}
        />
        <RateContainer />
        <ProductCardContainer products={prod} title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetalisPage;
