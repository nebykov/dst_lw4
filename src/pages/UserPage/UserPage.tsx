import { Route, Routes } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import Letters from "../../components/Letters/Letters";
import React from "react";
import SendLetter from "../../components/Letters/SendLetter";

interface UserPageProps {
  received: boolean;
}

const UserPage: React.FC<UserPageProps> = ({ received }) => {
  return (
    <div className="flex">
      <SideBar />
      <Letters received={received} />
      <SendLetter/>
    </div>
  );
};

export default UserPage;
