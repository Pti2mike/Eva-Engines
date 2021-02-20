import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../assets/img/EvaEngines.png";
import "./Header.css";

const Header = () => {
  const history = useHistory();

  return (
    <div
      className="header-logo"
      onClick={() => {
        history.push("/");
      }}
    >
      <img src={Logo} alt="eva-engines-logo" />
    </div>
  );
};

export default Header;
