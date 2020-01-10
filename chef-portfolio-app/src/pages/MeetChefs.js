//render the Chefs component here
//include button back to Guest Homepage (recipes)

import React from "react";
import Page from "../pages/Page";
import Chefs from "../components/Chefs";

function MeetChefs(props) {
  const routeToGuestHomepage = () => {
    props.history.push("/");
  };

  return (
    <>
      <Page>
        <Chefs />
        <button onClick={routeToGuestHomepage} className="greenButton">Back to Recipes</button>
      </Page>
    </>
  );
}

export default MeetChefs;
