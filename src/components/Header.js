import { Link } from "react-router-dom";
import { Title } from "./Title";
import { useState } from 'react';
const Header = () => {
  const [checkLogin, setCheckLogin] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {checkLogin ? (
              <button
                className="login-button"
                onClick={() => {
                  setCheckLogin(false);
                }}
              >
                Login
              </button>
            ) : (
              <button
                className="logout-button"
                onClick={() => {
                  setCheckLogin(true);
                }}
              >
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
