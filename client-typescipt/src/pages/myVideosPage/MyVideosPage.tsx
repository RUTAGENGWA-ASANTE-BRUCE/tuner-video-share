import React, { useState } from 'react'
import List from './List'
import Edit from './Edit'
import Navbar from '../../components/Navbar';
import Upload from '../../components/Upload';

const MyVideosPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string>('');

  const handleSelectedVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  }

  return (
    <div>
      <Navbar />
      <div className='flex relative max-sm:flex-col'>
        <List handleSelectedVideo={handleSelectedVideo}/>
        <Edit handleSelectedVideo={handleSelectedVideo} selectedVideo={selectedVideo} />
        <Upload />
      </div>
    </div>
  );
}

export default MyVideosPage;
