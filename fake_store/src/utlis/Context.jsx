import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import instance from "./axios";

export const productsContext = createContext();

const Context = (props) => {
  const [products, setproducts] = useState(null);

  const getProduct = async () => {
    try {
      const { data } = await instance("/products");
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <productsContext.Provider value={[products, setproducts]}>
      {props.children}
    </productsContext.Provider>
  );
};

export default Context;
