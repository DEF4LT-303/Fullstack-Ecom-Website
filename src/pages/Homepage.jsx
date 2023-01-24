import React from 'react';
import Announcement from '../components/Announcement';
import Catagories from '../components/Catagories';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Catagories />
    </div>
  );
};

export default Home;
