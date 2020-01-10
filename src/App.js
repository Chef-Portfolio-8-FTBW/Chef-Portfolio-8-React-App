import React from "react";
import "./App.css";
import GuestHomepage from "./pages/GuestHomepage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
// import NewProfile from "./pages/NewProfile";
import ChefProfile from "./pages/ChefProfile";
import CreatePost from "./components/CreatePost";
import MeetChefs from "./pages/MeetChefs";
import RecipePage from "./pages/RecipePage";
import { Route, Switch } from "react-router-dom";
import RecipeEditForm from "./components/RecipeEditForm";
import PrivateRoute from "./authentication/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={GuestHomepage} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        {/* <Route exact path="/new-profile" component={NewProfile} /> */}
        <Route exact path="/chef-profile/:id" component={ChefProfile} />
        <PrivateRoute path="/create-post" component={CreatePost} />
        <Route path="/meet-the-chefs" component={MeetChefs} />
        <Route path="/recipe/:id" component={RecipePage} />
        <Route path="/edit-recipe/:id" component={RecipeEditForm} />
      </Switch>
    </div>
  );
}

export default App;
