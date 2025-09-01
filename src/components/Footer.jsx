import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
        padding: "4rem 1rem", 
        marginTop: "2rem",   
      }}
    >
      <h2>Footer Section</h2>
      <p>© {new Date().getFullYear()} Hybix. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
