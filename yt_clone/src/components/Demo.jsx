import React, { useMemo, useState } from "react";
import { nthPrime } from "./utlis/helper";

const Demo = () => {
  const [inpVal, setinpVal] = useState(0);
  const [boxTheme, setboxTheme] = useState(false);

  console.log("Rendering.........", Math.random());

  const primeData = useMemo(() => nthPrime(inpVal), [inpVal]);
  return (
    <div
      className={`h-96 w-96 border border-black p-2 m-5 ${
        boxTheme ? "bg-red-200" : "bg-white"
      } `}
    >
      <button
        className={`py-1 px-3 ${
          boxTheme ? "bg-green-600" : "bg-red-400"
        } text-white font-semibold rounded-lg my-4`}
        onClick={() => setboxTheme(!boxTheme)}
      >
        Toggle
      </button>
      <h1>UseMemo Demo </h1>
      <input
        className="px-2 py-1 border border-black mt-3"
        type="number"
        value={inpVal}
        onChange={(e) => setinpVal(e.target.value)}
      />
      <div className="text-2xl font-bold mt-2">
        Nth prime Number : {primeData}
      </div>
    </div>
  );
};

export default Demo;
