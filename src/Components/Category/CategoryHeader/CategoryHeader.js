import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllCategoryPageHook from "../../../Hook/category/all-category-page-hook";
import "./CategoryHeader.css";
const CategoryHeader = () => {
  const [category, loading, pageCount, getPage] = AllCategoryPageHook()

  const [items, setItems] = useState([])
  useEffect(() => {
    if (category)
      setItems(category.data)

  }, [category])
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">

            {
              items ? (items.map((item, index) => {
                return (<Link key={index} to={`/products/category/${item._id}`} style={{ textDecoration: 'none' }}>
                  <div  className="cat-text-header ">{item.name}</div>
                </Link>
                )  
              })) : null 
            }
            <Link to="/allcategory" style={{ textDecoration: 'none' }}>
              <div className="cat-text-header">المزيد</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default CategoryHeader;
