import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoreCard from "../CategoryCard/CategoreCard";
import "./CategoryContianer.css";
const CategoryContainer = ({loading,Category}) => {
  const colors = [
    "#F4DBA4",
    "#F4DBA4",
    "#0034FF",
    "#F4DBA4",
    "#FF6262",
    "F4DBA4",
  ];
  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل التصنيفات</div>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Row className="my-2 d-flex justify-content-between row">
          {Category.data ? (
            Category.data.map((item, index) => {
              return (
                <CategoreCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[Math.floor(Math.random()*5)+1]}
                />
              );
            })
          ) : (
            <h3>لايوجد تصنيفات</h3>
          )}
        </Row>
      )}
    </Container>
  );
};

export default CategoryContainer;
