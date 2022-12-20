import React from "react";
import BrandContainer from "../../Components/Brand/BrandContainer/BrandContainer";
import Pagination from "../../Components/Utility/Pagination/Pagination";
import AllBrandPageHook from "../../Hook/brand/all-brand-page-hook";
const AllBrand = () => {
  const [Brand,loading,getPage,PageCount]=AllBrandPageHook()
  return (
    <div style={{minHeight:'670px'}}>
      <BrandContainer  Brand={Brand} loading={loading} />
      {PageCount>1?( <Pagination PageCount={PageCount}onPress={getPage} />):null }
    </div>
  );
};

export default AllBrand;
