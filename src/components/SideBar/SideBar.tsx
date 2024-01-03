import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-start w-[20vw] h-[100vh] p-3 gap-2">
      <Link to={"received"}>
        <button className="w-[100%]">My Letters</button>
      </Link>
      <Link to={'sended'}><button className="w-[100%]">Sended Letters</button></Link>
    </div>
  );
};

export default SideBar;
