import React from 'react';
import Navbar from '../../components/Navbar';
import Intro from "./intro"
import Upload from '../../components/Upload';
const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className='relative'>
        <Intro />
        <Upload />
      </div>
    </div>
  );
}

export default Home;
