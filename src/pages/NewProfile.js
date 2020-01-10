// new profile form goes here

// don't think we need this component anymore

import React from "react";
import Page from "../pages/Page";

function NewProfile(props) {
  const routeToChefProfile = () => {
    props.history.push("/chef-profile/:id");
  };

  return (
    <>
      <Page>
        <h1>I'll be a new profile form when I'm grown</h1>
        <button onClick={routeToChefProfile}>Submit</button>
      </Page>
    </>
  );
}

export default NewProfile;
