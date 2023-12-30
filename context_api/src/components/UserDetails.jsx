import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams and useNavigate from react-router-dom
import { useContext } from "react";
import { UserContext } from "./context/Context";

const UserDetails = () => {
  const { id } = useParams(); 
  const { user } = useContext(UserContext);
  const navigate = useNavigate(); 
 

  return (
    <div>
      <h1>{user[id].username}</h1>
      <h1>{user[id].city}</h1>
      <button
        onClick={() => navigate(-1)}
        className="py-1 px-3 bg-red-600 text-white font-semibold"
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
