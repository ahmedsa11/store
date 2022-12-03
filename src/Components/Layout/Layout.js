import React from "react";
import Footer from "../Utility/footer/footer";
import Navbarr from "../Utility/Navbar/Navbar";
import './Layout.css'
function Layout({ children }) {
  return (
    <div className="layout">
      <Navbarr />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
