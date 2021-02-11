import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const AboutScreem = () => {
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <h1>AboutScreem</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => setUser({})}>
        Logout
      </button>
    </div>
  );
};

export default AboutScreem;
