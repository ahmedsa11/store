import React from "react";
import { Container, Row } from "react-bootstrap";
import CardContainerHook from "../../../Hook/Product/card-container-hook";
import Subtitle from "../../Utility/Subtitle/Subtitle";
import ProductCard from "../ProductCard/ProductCard";
const ProductCardContainer = ({ title, btntitle, pathText, products }) => {
  const [favProd] = CardContainerHook()

  return (
    <Container>
      {products ? (
        <Subtitle title={title} btntitle={btntitle} pathText={pathText} />
      ) : null}
      <Row className="my-2 d-flex justify-content-between">
        {products
          ? products.map((item, idx) => {
              return <ProductCard key={idx} item={item} favProd={favProd}/>;
            })
          : null}
      </Row>
    </Container>
  );
};

export default ProductCardContainer;
