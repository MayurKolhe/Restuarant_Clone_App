import { useState,useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import marathi_img from "../../Images/marathi_food.jpeg";
import userDetailsContext from "../hooks/useGetUserDetail";
const About = () => {
  const [show, setShow] = useState(false);
  const { loggedInUser } = useContext(userDetailsContext);

  return (
    <div>
      <div className="about-profile-container">
        {show ? (
          <>
            <Link to={"/about"}>
              <button
                className="about-profile-button"
                onClick={() => setShow(false)}
              >
                Hide My Profile
              </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to={"profile"}>
            <button
              className="about-profile-button"
              onClick={() => setShow(true)}
            >
              Show My Profile
            </button>
          </Link>
        )}
      </div>
      <div className="about-container">
        <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br />
            <span> {loggedInUser} </span> 
            Restaurant App
            <span> Tasty & Fresh Food.</span>
          </h1>
          <h4>
            "Better you will feel if you eat a with Special Marathi Dishes
            <span> With Fire</span> healthy meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={marathi_img} alt="Marathi Food" />
        </div>
      </div>
    </div>
  );
};

export default About;
