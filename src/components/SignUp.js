import React, { useState } from "react";

import axios from "axios";
import { axiosWithAuth } from "../authentication/AxiosWithAuth";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const userSchema = Yup.object().shape({
  username: Yup.string()
    .required()
    .min(2),
  password: Yup.string()
    .required()
    .min(3),
  confirmPassword: Yup.string()
    .required()
    .min(3)
    .oneOf([Yup.ref("password")], "Passwords must match"),
  full_name: Yup.string().required(),
  email: Yup.string().email()
});

const SignUp = props => {
  console.log(props);
  const [user, setUser] = useState({});

  return (
    <>
      <h1>Sign Up</h1>

      <Formik
        initialValues={{
          username: "",
          password: "",
          confirmPassword: "",
          full_name: "",
          email: "",
          phone: "",
          bio: "",
          user_picture: ""
        }}
        onSubmit={(values, tools) => {
          tools.resetForm();
          axiosWithAuth()
            .post("/api/login/register", values)
            .then(res => {
              console.log("SUCCESSFUL", res);
              setUser(res.data);
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("user", res.data.id);
              props.props.history.push(`/chef-profile/${res.data.id}`);
            })
            .catch(err => {
              console.log("FAILURE", err);
            });
        }}
        validationSchema={userSchema}
        render={props => {
          return (
            <Form className="formContainer">
              {/* Required fields */}

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

              <label>
                *Confirm Password:
                <Field
                  className="input inputConfirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="confirm password"
                />
              </label>
              {props.errors.confirmPassword && props.touched.confirmPassword ? (
                <span className="red">{props.errors.confirmPassword}</span>
              ) : (
                ""
              )}

              <label>
                *Full name
                <Field
                  className="input inputFullName"
                  type="text"
                  name="full_name"
                  placeholder="Jon Snow"
                />
              </label>
              {props.errors.full_name && props.touched.full_name ? (
                <span className="red">{props.errors.full_name}</span>
              ) : (
                ""
              )}

              <label>
                *Email
                <Field
                  className="input inputEmail"
                  type="text"
                  name="email"
                  placeholder="jon@winterfell.com"
                />
              </label>
              {props.errors.email && props.touched.email ? (
                <span className="red">{props.errors.email}</span>
              ) : (
                ""
              )}

              {/* Non required fields*/}

              <label>
                Phone Number
                <Field
                  className="input inputPhoneNumber"
                  type="text"
                  name="phone"
                  placeholder="808-555-1234"
                />
              </label>

              <label>
                Bio:
                <br></br>
                <Field
                  className="input inputBio"
                  as="textarea"
                  name="bio"
                  placeholder="About me"
                />
              </label>

              <label>
                Profile Image:
                <br></br>
                <Field
                  className="input inputImage"
                  type="text"
                  name="user_picture"
                  placeholder="About me"
                />
              </label>

              <input className="submitButton" type="submit" />
            </Form>
          );
        }}
      />
      <Link to="/sign-in" className="signUpSwitch">
        Already have an account? Sign In!
      </Link>

      <Link to="/" className="guestSignIn">
        Just wanna browse? Continue as a guest.
      </Link>
    </>
  );
};

export default SignUp;
