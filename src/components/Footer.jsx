import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            ></FaHome>
            <div>
              <p>A-143 Beta</p>
              <p>Uttar Pradesh, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              ></FaPhone>
              <p>+91 9113729865</p>
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              ></FaMailBulk>
              <p>prashantpipra21@gmail.com</p>
            </h4>
          </div>
        </div>
        <div className="right">
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            illum reprehenderit, doloribus sequi,
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            ></FaFacebook>
            <FaTwitter
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            ></FaTwitter>
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            ></FaLinkedin>
          </div>
        </div>
      </div>
    </div>
  );
}
