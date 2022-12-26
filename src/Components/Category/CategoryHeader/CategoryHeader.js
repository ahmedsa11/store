import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderSearchHook from "../../../Hook/search/header-search-hook";
import "./CategoryHeader.css";
const CategoryHeader = () => {
  const [Categories, getCat, getCategories] = HeaderSearchHook();
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            {Categories
              ? Categories.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      onClick={() => getCat(item._id)}
                      className="cat-text-header "
                    >
                      {item.name}
                    </div>
                  );
                })
              : null}
              <div  className="cat-text-header "> المزيد
              </div>
  
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;
