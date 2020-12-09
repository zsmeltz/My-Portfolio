import React from "react";

function Footer() {
  return (
    <footer>
      <nav
        className="navbar justify-content-center"
        style={{
          display: "flex ",
          bottom: 0,
          backgroundColor: "#252525",
          color: "#A0A0A0",
        }}
      >
        <span className="navbar-text">©2020 Zach R. Smelcer</span>
      </nav>
    </footer>
  );
}

export default Footer;
