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
    <div className="text-area-p">
      <p>V2 Holdings Housing Development Pvt. Ltd. is a leading real estate company known for creating high-quality residential and commercial projects. With a commitment to excellence, V2 Holdings focuses on delivering innovative designs and premium living spaces that blend luxury with functionality. Each project is thoughtfully planned, incorporating modern architecture, top-notch amenities and prime locations.</p>
      <br />
      <p>The company’s dedication to customer satisfaction and transparency has earned it a solid reputation in the real estate industry. V2 Holdings ensures that every property reflects its core values of quality, reliability and sustainability. Whether it's luxury apartments or commercial complexes, V2 Holdings continues to set benchmarks in real estate, offering spaces that elevate lifestyles.</p>
    </div>
    
  <Footer map={'home'}/>
  </div>
  );
};

export default CompanyProfile;
