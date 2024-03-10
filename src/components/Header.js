import { Link } from "react-router-dom";
import { Title } from "./Title";
import { useState, useContext } from "react";
import cart from "../../Images/cart.jpg";
import userDetailsContext from "../hooks/useGetUserDetail";

const Header = () => {
  const [checkLogin, setCheckLogin] = useState(false);

  const { loggedInUser } = useContext(userDetailsContext);

  return (
    <div className="p-2">
      <nav className="h-26 flex items-center justify-between shadow-2xl shadow-black bg-orange-300">
        <Title />
        <div>
          <ul className="flex space-x-52 border-x-4 border-x-orange-500 text-emerald-800">
            <Link to="/">
              <li className="m-10 hover:text-white">HOME</li>
            </Link>
            <Link to="/about">
              <li className="m-10 hover:text-white ">ABOUT</li>
            </Link>
            <Link to="/contact">
              <li className="m-10 hover:text-white">CONTACT</li>
            </Link>
            <li className="m-10 p-1 text-black font-bold">{loggedInUser}</li>
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
