import React from "react";
import "./Footer.css";
import { CiMobile2 } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = ({map}) => {
  return (
    <footer>
      <h1 className="title">Contact Us</h1>
      <div className="contact-details">
        <div className="row">
          <h3 className="sub-title">Address</h3>
          <p>
            18, 3rd Main Rd, near Hotel Dwarka, NR Colony, Basavanagudi,
            Bengaluru, Karnataka 560019
          </p>
        </div>
        <div className="row">
          <h3 className="sub-title">Contact</h3>
          <p>
          Mobile : <br />
            +91 9945255552 <br />
            +91 9845698136
          </p>
          <p>
            Telephone: <br />
            080 2660 2666 <br />
            080 2660 2667
          </p>
          <p>   Email: <br />
            V2holdings.blr@gmail.com <br />
          </p>
        </div>
        <div className="row">
          <h3 className="sub-title">Sales and Enquiry</h3>
          <p>
          Mobile : <br />
            +91 99452 55552 <br />
            +91 99452 55553 <br />
            +91 90717 12000 <br />
            +91 99452 55550 <br />
            <br/>
            Email: <br />
            v2vajraelegance@gmail.com <br />
          </p>
        </div>
        <div className="row">
          <h3 className="sub-title">Opening Hours</h3>
          <p className="opening-date">Mon-Sun: 10:00 am to 07:00 pm</p>
          <p className="social-icons-footer"> 
          <a href="https://www.facebook.com/V2HoldingsHDPL"><FaFacebook  /></a>
          <a href="https://www.instagram.com/v2holdingshdpl/"><FaInstagram  /></a>
          <a href="https://www.youtube.com/@V2HoldingsHDPL"><FaYoutube  /></a>
          <a href="https://x.com/V2HoldingsHDPL"><FaX  /></a>
          <a href="https://in.pinterest.com/v2holdingshdpl/"><FaPinterest  /></a>
             </p>
        </div>
      </div>
      <div className={`map-details ${map!=="home"?'di-none':''}`}>
        <iframe
        title="map location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.03288625010345!2d77.56770334341246!3d12.938146393324637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158c00b2bf89%3A0xae8511c89c4a9f62!2sV2%20Holdings!5e0!3m2!1sen!2sin!4v1724411559304!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="copyright">
        <p >@ 2024 Official website of V2holdings HDPL | All Rights Reserved</p>
        <p className="portfolio"> Developed by <a href="https://sheikhnizam.xyz">Sheikh Nizam</a> </p>
      </div>
    </footer>
  );
};

export default Footer;
