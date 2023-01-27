import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Catagories from '../components/Catagories';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';

const DivTitles = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  font-size: 4rem;
  font-weight: 300;
  text-align: center;
  margin-top: 70px;
  font-family: 'Roboto', sans-serif;
`;

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <DivTitles>Catagories</DivTitles>
      <Catagories />
      <DivTitles>Best Sellers</DivTitles>
      <Products />
    </div>
  );
};

export default Home;
