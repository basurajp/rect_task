import React, { createContext, useState, useEffect } from "react";
import instance from "./axios";

export const ProductContext = createContext();

const Context = ({ children }) => {
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const { data } = await instance("/products");
    
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {children}
    </ProductContext.Provider>
  );
};

export default Context;