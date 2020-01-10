//render the Header component here
// render two buttons for Chef Sign Up or Guest
//Chef Sign Up will pop open the Sign Up Modal
// render "already have an account" link -- will open the Sign In Modal

//decided that modals would be stretch

import React from "react";
import NavBar from "../universal/NavBar";

// import { Link } from "react-router-dom";

import SignIn from "../components/SignIn";
import Footer from "../universal/Footer";

function SignInPage(props) {
  console.log(props);
  // const routeToHomepage = () => {
  //   props.history.push("/");
  // };

  // const routeToNewProfile = () => {
  //   props.history.push("/new-profile");
  // };

  return (
    <>
      <NavBar />

      <SignIn history={props.history} match={props.match} />
      {/* <button onClick={routeToNewProfile}>
        Sign Up (this will link off to the sign up component eventually
      </button>
      <button onClick={routeToHomepage}>Guest</button>
      <Link>
        Already have an account? Sign in already!(this will link off to the sign
        in component eventually)
      </Link> */}
      <Footer />
    </>
  );
}

export default SignInPage;
