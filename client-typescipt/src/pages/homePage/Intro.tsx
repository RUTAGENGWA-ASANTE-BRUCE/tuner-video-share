import React, { useContext, useEffect, useState } from "react";
import "./Intro.css";
import { getAllVideos } from "../../services/nodeApi";
import { VideoContext } from "../../contextApi/VideoContextApi";
import HomeCarousel from "./HomeCarousel";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";

const Content: React.FC = () => {
  const [banner, setBanner] = useState<string>("");
  const [name, setName] = useState<string>("View all");
  const { handleSetAllVideos, updatedList, allVideos } = useContext<any>(VideoContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getVideos = async () => {
      try {
        setIsLoading(true);
        const response:any = await getAllVideos();
        const reversedResponse = response.reverse();
        handleSetAllVideos(reversedResponse);
        setIsLoading(false);
      } catch (err:any) {
        console.log(err.message);
      }
    };
    getVideos();
  }, [updatedList]);

  const handleViewButton = () => {
    if (banner) {
      setBanner("");
    } else {
      setBanner("class");
    }
    if (name === "View all") {
      setName("View less");
    } else {
      setName("View all");
    }
  };

  return (
    <>
      <HomeCarousel />
      {!isLoading ? (
        <div className={`video-content ${banner ? "relative translate-y-[-125px]" : ""}`}>
          <div className="btns">
            <div className="recent">Recent</div>
            <div className="view-all" onClick={handleViewButton}>
              {name}
            </div>
          </div>
          <div className="videos">
            {
              !banner ? 
              <Pagination videos={allVideos.slice(0, 4)} source={'home'} videosPerLoad={12} /> :
              <Pagination videos={allVideos} source={'home'} videosPerLoad={12}/>
            }
          </div>
        </div>
      ) : <Loader />}
    </>
  );
};
export default Content;
