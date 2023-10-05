import React from "react";
import MainVideo from "./MainVideo";
import SideList from "./SideList";
import Navbar from "../../components/Navbar";
import { Upload } from "react-feather";

const VideoPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="md:flex relative">
        <MainVideo />
        <SideList />
        <Upload />
      </div>
    </>
  );
};

export default VideoPage;
