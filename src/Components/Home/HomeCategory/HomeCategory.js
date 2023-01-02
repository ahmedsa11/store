import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import HomeCategoryPage from "../../../Hook/category/home-category-hook";
import CategoreCard from "../../Category/CategoryCard/CategoreCard";
import Subtitle from "../../Utility/Subtitle/Subtitle";
function HomeCategory() {
  const [colors, Category, loading] = HomeCategoryPage();
  return (
    <>
      <Container>
        
        <Subtitle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <Row className="my-2 d-flex justify-content-between">
            {Category.data ? (
              Category.data.slice(0, 5).map((item, index) => {
                return (
                  <CategoreCard
                    key={index}
                    id={item._id}
                    title={item.name}
                    img={item.image}
                    background={colors[index]}
                  />
                );
              })
            ) : (
              <h3>لايوجد تصنيفات</h3>
            )}
          </Row>
        )}
      </Container>
    </>
  );
}

export default HomeCategory;
