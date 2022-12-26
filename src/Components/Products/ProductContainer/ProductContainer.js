import React from "react";
import { Container, Row } from "react-bootstrap";
import Subtitle from "../../Utility/Subtitle/Subtitle";
import ProductCard from "../ProductCard/ProductCard";
const ProductCardContainer = ({ title, btntitle, pathText, products }) => {
  return (
    <Container>
      {products ? (
        <Subtitle title={title} btntitle={btntitle} pathText={pathText} />
      ) : null}
      <Row className="my-2 d-flex justify-content-between">
        {products
          ? products.map((item, idx) => {
              return <ProductCard key={idx} item={item}/>;
            })
          : null}
      </Row>
    </Container>
  );
};

export default ProductCardContainer;
