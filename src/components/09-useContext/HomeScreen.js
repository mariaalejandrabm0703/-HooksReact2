import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  const userContext = useContext(UserContext);

  let { user } = userContext;
  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
      <h3>{user.id}</h3>
      <h3>{user.nameUser}</h3>
      <h3>{user.emailUser}</h3>
    </div>
  );
};

export default HomeScreen;
