import React from "react";
import "./Header.css";

const Header = () => {
  
  return (
    <header className="header">
      <div className="btns">
        <a href="/homework-state-slice">
          <button className="btn">State Slice</button>
        </a>
        <a href="/homework-state-obj">
          <button className="btn">State obj</button>
        </a>
        <a href="/homework-state-any">
          <button className="btn">State Any</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
