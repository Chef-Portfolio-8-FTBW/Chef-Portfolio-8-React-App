//this is the presentational component; all universal components will be called here//

import React from "react";
import NavBar from "../universal/NavBar";
import SearchBar from "../universal/SearchBar";
import Footer from "../universal/Footer";

function Page({ children, history }) {
  return (
    <>
      <NavBar history={history} />
      <SearchBar />
      {children}
      <Footer />
    </>
  );
}

export default Page;
