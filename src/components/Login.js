import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required Field")
    .email("Invalid Input Format"),
  password: Yup.string()
    .required("Password is required Field")
    .min(8, "Min 8 Characters are required."),
});

const Login = () => {
  const navigate = useNavigate();

  const HandelNavigate = (values) => {
    alert(values);
    setTimeout(() => {
      navigate("/");
    }, 0);
  };

  return (
    <>
      {
        <Formik
          validationSchema={schema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            HandelNavigate(JSON.stringify(values));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div className="login-container">
              <div className="login-form">
                <form noValidate onSubmit={handleSubmit}>
                  <span>Login</span>
                  {
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Enter you Email Address"
                      id="email"
                      className="form-control inp_text"
                    />
                  }
                  <p className="error">{errors.email && touched.email}</p>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Please enter you password"
                    id="Password"
                    className="form-control"
                  />
                  <p>{errors.password && touched.password}</p>
                  <button type="submit">Login</button>
                </form>
              </div>
            </div>
          )}
        </Formik>
      }
    </>
  );
};

export default Login;
