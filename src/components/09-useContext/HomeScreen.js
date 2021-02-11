import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  const userContext = useContext(UserContext);
  let { id, nameUser, emailUser } = userContext;
  return (
    <div>
      <h1>HomeScreen</h1>
      <h3>{id}</h3>
      <h3>{nameUser}</h3>
      <h3>{emailUser}</h3>
    </div>
  );
};

export default HomeScreen;
