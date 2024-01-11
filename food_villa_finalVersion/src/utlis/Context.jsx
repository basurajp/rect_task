import React, { createContext, useState } from "react";

export const userNameContext = createContext();

const Context = ({ children }) => {
  const [userName, setUserName] = useState('Context data serchHere ');

  return (
    <userNameContext.Provider value={[userName, setUserName]}>
      {children}
    </userNameContext.Provider>
  );
};

export default Context;
