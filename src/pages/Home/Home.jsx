import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './Home.module.css'; // Import as a module
import HomeProjects from '../../components/HomeProjects/HomeProjects';
import HomServices from '../../components/HomeServices/HomServices';
import HomeBottom from '../../components/HomeBottom/HomeBottom';
import HomeOverall from '../../components/HomeOverall/HomeOverall';
import HomeAboutus from '../../components/HomeAboutus/HomeAboutus';
import Testimonials from '../../components/Testimonials/Testimonials';

const Slideshow = () => {

  return (
    <div className={styles.slideshow}>
      {/* <p>testing</p> This is just a placeholder. You can replace it with the actual slider component */}
      <HomeOverall />
      <HomServices />
      <HomeAboutus />
      <HomeProjects  />
      <Testimonials/>
      <HomeBottom  />
    </div>
  );
};

export default Slideshow;
