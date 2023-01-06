import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Subtitle from "../../Utility/Subtitle/Subtitle";
import HomeBrandPage from "../../../Hook/brand/home-brand-hook";
import BrandCard from "../BrandCard/BrandCard";
const BrandFeatured = ({ title, btntitle }) => {
  const [Brand, loading] = HomeBrandPage();
  return (
    <Container>
      <Subtitle title={title} btntitle={btntitle} pathText="/allbrand" />
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Row className="my-2 d-flex justify-content-between">
          {Brand&&Brand.data ? (
            Brand.data.slice(0, 5).map((item, index) => {
              return (
                <BrandCard key={index} title={item.name}id={item._id} img={item.image} />
              );
            })
          ) : (
            <h3>لايوجد ماركات</h3>
          )}
        </Row>
      )}
    </Container>
  );
};

export default BrandFeatured;
