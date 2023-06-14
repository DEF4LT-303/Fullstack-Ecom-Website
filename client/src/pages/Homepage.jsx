import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Catagories from '../components/Catagories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';
import { mobile } from '../responsive';

const DivTitles = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  font-size: 4rem;
  font-weight: 300;
  text-align: center;
  margin-top: 70px;
  /* font-family: 'Bebas Neue', sans-serif; */
  ${mobile({ fontSize: '2rem' })}

  &.categories {
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    /* font-family: 'Bebas Neue', sans-serif; */
    color: #333;
  }

  &.best-sellers {
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    /* font-family: 'Bebas Neue', sans-serif; */
    color: #333;
  }
`;

const SectionWithBackground = styled.section`
  position: relative;
  background: url('https://rare-gallery.com/mocahbig/397692-wallpaper-yoru-valorant-characters-4k-hd.jpg')
    no-repeat fixed center center;
  background-size: cover;
  min-height: 400px;
  margin-left: 23px;
  margin-right: 23px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 18px 34px;
  background-color: #0f379a;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover {
    background-color: #faf9f6;
    color: #000000;
    transform: scale(1.1);
  }
`;

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <DivTitles className='categories'>Categories</DivTitles>
      <Catagories />
      <DivTitles className='best-sellers'>Best Sellers</DivTitles>
      <Products />

      <Products />
      <SectionWithBackground>
        <Button>BUY VP</Button>
      </SectionWithBackground>
      <Footer />
    </div>
  );
};

export default Home;
