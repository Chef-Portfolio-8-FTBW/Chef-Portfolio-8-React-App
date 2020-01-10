//map over the array of chefs and render a ChefCard for each chef here
import React, { useEffect, useState } from "react";
import axios from "axios";

import ChefCard from "../components/ChefCard";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    axios.get("https://chef-2.herokuapp.com/api/user/allusers").then(res => {
      setChefs(res.data);
    });
  }, []);

  return (
    <div>
      {chefs.map(chef => (
        <ChefCard
          key={chef.id}
          id={chef.id}
          img={chef.user_picture}
          name={chef.full_name}
          location={chef.Location}
          email={chef.email}
          bio={chef.Bio}
        />
      ))}
    </div>
  );
};

export default Chefs;
