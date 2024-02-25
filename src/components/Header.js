import { Link } from "react-router-dom";
import { Title } from "./Title";
import { useState } from "react";
import cart from "../../Images/cart.jpg";

const Header = () => {
  const [checkLogin, setCheckLogin] = useState(false);

  return (
    <div className="p-2">
      <nav className="h-26 flex items-center justify-between shadow-2xl shadow-black bg-orange-300">
        <Title />
        <div>
          <ul className="flex space-x-52 border-x-4 border-x-orange-500 text-emerald-800 hover:bg-orange-700">
            <Link>
              <li className="m-10 hover:bg-orange-600 hover:text-white" to="/">
                HOME
              </li>
            </Link>
            <Link>
              <li
                className="m-10  hover:bg-orange-600 hover:text-white "
                to="/about"
              >
                ABOUT
              </li>
            </Link>
            <Link>
              <li
                className="m-10  hover:bg-orange-600 hover:text-white "
                to="/contact"
              >
                CONTACT
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex">
          <img src={cart} className="size-10 p-1 mt-5 mr-2" alt="cart_logo" />
          {checkLogin ? (
            <button
              className="bg-green-400 h-10 p-1 mt-5 mr-10 border-4 border-green-200 rounded-lg"
              onClick={() => {
                setCheckLogin(false);
              }}
            >
              Login
            </button>
          ) : (
            <button
              className="bg-red-400 h-10 mt-5 mr-10 text-wrap p-1 border-4 border-red-200 rounded-lg "
              onClick={() => {
                setCheckLogin(true);
              }}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
