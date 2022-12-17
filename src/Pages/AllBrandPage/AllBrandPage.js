import React from "react";
import BrandContainer from "../../Components/Brand/BrandContainer/BrandContainer";
import Pagination from "../../Components/Utility/Pagination/Pagination";
const AllBrand = () => {
  return (
    <div style={{minHeight:'670px'}}>
      <BrandContainer />
      <Pagination />
    </div>
  );
};

export default AllBrand;
