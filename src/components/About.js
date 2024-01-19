import marathi_img from "../../Images/marathi_food.jpeg";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br />
          Mayur Resturant App
          <span>Tasty & Fresh Food</span>
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
  );
};

export default About;
