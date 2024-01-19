import { useRouteError, Link } from "react-router-dom";

import ErrorImg from "../../Images/404_Error.jpg";

const Error = () => {
    const error = useRouteError();
    return (
      <div className="error-page">
        <img src={ErrorImg} alt="Error Image" />
        <h1>
          Sorry Restuarant which you are looking for is not Serviceable Now
        </h1>
        <h2 className="error-data">{error.data}</h2>
        <h3 className="error-back-home">
          <Link to="/">Back To Home</Link>
        </h3>
      </div>
    );
}

export default Error;