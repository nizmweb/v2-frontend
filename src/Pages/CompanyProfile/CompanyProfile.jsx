import React, { useEffect } from "react";
import './CompanyProfile.css'
import dp from "../../Components/Assets/cp.jpeg";
import Footer from "../../Components/Footer/Footer";

const CompanyProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <div className="profilec">
    <div className="img-div">

    <img src={dp} alt="" />
    </div>
    
  <Footer map={'home'}/>
  </div>
  );
};

export default CompanyProfile;
