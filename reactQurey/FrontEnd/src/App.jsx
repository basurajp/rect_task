import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [product, setproduct] = useState([]);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);
  const [search, setsearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setloading(true);
        seterror(false);
        const response = await axios.get("api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log(response.data);
        setproduct(response.data);
        setloading(false);
      } catch (error) {
        if (axios.isCancel.error) {
          log(error.message);
          return;
        }
        seterror(true);
        setloading(false);
      }
    })();

    // clean up code
    return () => {
      controller.abort();
    };
  }, [search]);

  // if (error) {
  //   return <h1> Something went wrong </h1>;
  // }

  // if (loading) {
  //   return <h1>Loading....</h1>;
  // }
  return (
    <>
      <h1>Api handling iin react </h1>

      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />

      {error && <h1>Something went wrong </h1>}
      {loading && <h1>loading ..........</h1>}
      <h2>Number of product are : {product.length}</h2>
    </>
  );
}

export default App;
