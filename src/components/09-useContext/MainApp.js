import React, { useState } from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";

export const MainApp = () => {
  const user1 = {
    id: 123,
    nameUser: "Maria",
    emailUser: "maria@gmail.com",
  };

  const [user, setUser] = useState(user1);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
};
