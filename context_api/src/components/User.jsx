import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./context/Context";

const User = () => {
  const {user ,setuser} = useContext(UserContext);

  return (
    <div>
      <h1 className="text-4xl">UserList</h1>
      <div className="flex flex-col w-1/2">
        {user.map((u) => (
          <Link to={`/user/${u.id}`} key={u.id} className="bg-blue-200 m-2 px-2 ">
            {u.username} 
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
