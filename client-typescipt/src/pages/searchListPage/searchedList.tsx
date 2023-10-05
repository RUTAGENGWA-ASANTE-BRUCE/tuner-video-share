import React, { useContext } from "react";
import { VideoContext } from "../../contextApi/VideoContextApi";
import Pagination from "../../components/Pagination";
import Upload from "../../components/Upload";
import Navbar from "../../components/Navbar";

const SearchedList: React.FC = () => {
  const { searchResults } = useContext<any>(VideoContext);

  return (
    <div className="bg-[#0F121FF5] w-full h-screen max-sm:h-full max-sm:bg-[#0F121FF5]">
      <Navbar />
      <div className="relative">
        <Pagination videos={searchResults} source={'searchlist'} videosPerLoad={12} />
        <Upload />
      </div>
    </div>
  );
};

export default SearchedList;
