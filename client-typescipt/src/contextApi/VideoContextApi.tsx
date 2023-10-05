import React, { createContext, useState, ReactNode } from 'react';

interface VideoContextType {
  fetchedUserVideos: any[];
  handleFetchedUserVideos: (videos: any[]) => void;
  updatedList: number;
  handleUpdatedList: () => void;
  searchResults: any[];
  searchVideo: (videos: any[]) => void;
  showUpload: boolean;
  handleShowUpload: (command: boolean) => void;
  allVideos: any[];
  handleSetAllVideos: (videos: any[]) => void;
}

export const VideoContext = createContext<VideoContextType | null>(null);

interface VideoContextProviderProps {
  children: ReactNode;
}

const VideoContextProvider: React.FC<VideoContextProviderProps> = ({ children }) => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showUpload, setShowUpload] = useState(false);
  const [allVideos, setAllVideos] = useState<any[]>([]);
  const [updatedList, setUpdatedList] = useState(0);
  const [fetchedUserVideos, setFetchedUserVideos] = useState<any[]>([]);

  return (
    <VideoContext.Provider value={{
      fetchedUserVideos,
      handleFetchedUserVideos: (videos) => {
        setFetchedUserVideos(videos);
      },
      updatedList,
      handleUpdatedList: () => {
        setUpdatedList(prev => prev + 1);
      },
      searchResults,
      searchVideo: (videos) => {
        setSearchResults(videos);
      },
      showUpload,
      handleShowUpload: (command) => {
        setShowUpload(command);
      },
      allVideos,
      handleSetAllVideos: (videos) => {
        setAllVideos(videos);
      }
    }}>
      {children}
    </VideoContext.Provider>
  );
}

export default VideoContextProvider;
