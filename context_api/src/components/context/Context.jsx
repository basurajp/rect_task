import React, { createContext, useState } from "react";

export const UserContext = createContext();

const Context = ({ children }) => {
  const [user, setuser] = useState([
    { id: 0, username: "basu", city: "goa" },
    { id: 1, username: "ajay", city: "margao" },
    { id: 2, username: "raj", city: "mapsua" },
    { id: 3, username: "yallapa", city: "rajasthan" },
  ]);

  return <UserContext.Provider value={{ user, setuser }}>{children}</UserContext.Provider>;
};

export default Context;
