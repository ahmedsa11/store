import React from "react";
import internet from "../../images/undraw_Signal_searching_re_yl8n.png";
import "./internet.css";
const Internet = () => {
  return (
    <div className="internet">
      <h2>تأكد من اتصالك بالانترنت</h2>

      <img src={internet} alt="internet" />
    </div>
  );
};

export default Internet;
