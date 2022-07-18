import React from "react";
import { Link, useLocation } from "react-router-dom";


const AppHeader = () => {
  const location = useLocation();
  // logo white when in landing page
  const logoWhite =location.pathname=== "/";
  return (
    <div className=" absolute flex justify-between items-center w-full flex-initial bg-slate-100/0 h-16">
      <Link to="/" className={" mx-20 " + (logoWhite?  "text-bWhite": "text-bBlack")}>
        Spreadsheet Sender
      </Link>
      <Link to="/contact" className=" mx-20 text-bBlack"> Contact Us</Link>
    </div>
  );
};

export default AppHeader;
