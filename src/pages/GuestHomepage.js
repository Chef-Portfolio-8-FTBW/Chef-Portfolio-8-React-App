//render the Recipes component here.

import React from "react";
import Page from "../pages/Page";
import Recipes from "../components/Recipes";

function GuestHomepage() {
  return (
    <Page>
      <Recipes />
    </Page>
  );
}

export default GuestHomepage;
