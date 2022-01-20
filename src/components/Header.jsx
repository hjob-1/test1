import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="header--title-wrapper">
        <h1>We are creatives</h1>
        <div className="header--icon">
          <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
            <g
              stroke="#FFF"
              stroke-width="6"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 3v100M3 95.484l15 15 15-15" />
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
