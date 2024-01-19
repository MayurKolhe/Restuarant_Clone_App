import data from "../../data.json";


const Card = () => {
    return (
    <div>
      <div>
        {data.AVAILABLE.map((ele) => {
          return (
            <div>
              <h2>{ele.id}</h2>
              <h2>{ele.label}</h2>
              <h2>{ele.icon}</h2>
              <h2>{ele.info}</h2>
            </div>
          );
        })}
      </div>
      <div>
        {data.COMING_SOON.map((ele) => {
          return (
            <div>
              <h2>{ele.id}</h2>
              <h2>{ele.label}</h2>
              <h2>{ele.icon}</h2>
              <h2>{ele.info}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
