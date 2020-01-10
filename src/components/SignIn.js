import React from "react";
import { axiosWithAuth } from "../authentication/AxiosWithAuth";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

///need to bring in state here

const userSchema = Yup.object().shape({
  username: Yup.string()
    .required()
    .min(2),
  password: Yup.string()
    .required()
    .min(3)
});

function SignIn({ history, match }) {
  return (
    <>
      <h1>Sign In</h1>

      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        onSubmit={(values, tools) => {
          tools.resetForm();
          axiosWithAuth()
            .post("/api/login/login", values)
            .then(res => {
              console.log(res);
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("user", res.data.id);
              history.push(`/chef-profile/${res.data.id}`);
            });
        }}
        validationSchema={userSchema}
        render={props => {
          return (
            <Form className="formContainer">
              <label>
                *Username:
                <Field
                  className="input inputName"
                  name="username"
                  type="text"
                  placeholder="enter username"
                />
              </label>
              {props.errors.username && props.touched.username ? (
                <span className="red">{props.errors.username}</span>
              ) : (
                ""
              )}

              <label>
                *Password:
                <Field
                  className="input inputPassword"
                  name="password"
                  type="password"
                  placeholder="enter password"
                />
              </label>
              {props.errors.password && props.touched.password ? (
                <span className="red">{props.errors.password}</span>
              ) : (
                ""
              )}

              <input className="submitButton" type="submit" />
            </Form>
          );
        }}
      />
      <Link to="/sign-up" className="signUpSwitch">
        Don't have an account? Sign up!
      </Link>

      <Link to="/" className="guestSignIn">
        Just wanna browse? Continue as a guest.
      </Link>
    </>
  );
}

export default SignIn;
