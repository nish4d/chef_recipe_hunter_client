import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-[#374151] text-base-content">
        <div>
          <h2 className="font-bold text-5xl text-primary">Americana</h2>
        </div>
        <div className="grid grid-flow-col gap-4 text-white">
          <Link to='/' className="link font-semibold text-md link-hover">Home</Link>
          <Link to='/blog' className="link font-semibold text-md link-hover">Blog</Link>
          <Link to='/contact' className="link font-semibold text-md link-hover">Contact</Link>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link to=''> <FaTwitter className="text-2xl text-primary"></FaTwitter> </Link>
            <Link to=''> <FaLinkedin className="text-2xl text-primary"></FaLinkedin> </Link>
            <Link to=''> <FaFacebook className="text-2xl text-primary"></FaFacebook> </Link>
          </div>
        </div>
        <div>
          <p className="text-white">Copyright © 2023 - All right reserved by Americana</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
