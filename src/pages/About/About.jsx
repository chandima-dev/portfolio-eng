import React, { useEffect, useRef } from 'react';
import styles from './About.module.css'; // Import CSS module
import SubSlider from '../../components/SubSlider/SubSlider';
import { teamMembers } from './MembersData'; // Import team members data

const AboutUs = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const teamTitleRef = useRef(null);
  const teamMembersRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const images = imageRef.current.children;
      const textElement = textRef.current;
      const titleElement = teamTitleRef.current;

      // Check if the text element is in the viewport
      if (textElement.getBoundingClientRect().top < window.innerHeight) {
        textElement.classList.add(styles.fadeIn);
      }

      // Check if images are in the viewport
      for (let image of images) {
        if (image.getBoundingClientRect().top < window.innerHeight) {
          image.classList.add(styles.slideInLeft);
        }
      }

      // Check if team title is in the viewport
      if (titleElement.getBoundingClientRect().top < window.innerHeight) {
        titleElement.classList.add(styles.fadeIn);
      }

      // Check if team members are in the viewport
      teamMembersRef.current.forEach(member => {
        if (member.getBoundingClientRect().top < window.innerHeight) {
          member.classList.add(styles.slideInUp);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SubSlider 
        title="Our Story" 
        description="We are an innovative Architectural and Engineering Design Firm" 
      />
      <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUsContent}>
          <div className={styles.aboutUsImages} ref={imageRef}>
            <div className={`${styles.imageSquare} ${styles.largeImage}`}>
              <img 
                src="/images/aboutUs/about1.jpeg" 
                alt="Falcon Engineering" 
              />
            </div>
            <div className={styles.imageSquare}>
              <img src="/images/aboutUs/about2.jpeg" alt="Falcon Engineering 2" />
            </div>
            <div className={styles.imageSquare}>
              <img src="/images/aboutUs/about3.jpeg" alt="Falcon Engineering 3" />
            </div>
          </div>
          <div className={styles.aboutUsText} ref={textRef}>
            <h2>Our core values are</h2>
            <p style={{ lineHeight: '1.8', fontFamily: 'Cerebri Sans, sans-serif', fontSize: '20px' }}>
              {/* At <span className={styles.boldText}>Falcon Engineering</span>, we bring together a diverse team of professionals passionate about pushing the boundaries of architectural and engineering design. With years of experience in the AEC industry, we pride ourselves on delivering bespoke services tailored to meet the unique needs of every client. Our commitment to excellence and innovation ensures that each project is handled with the utmost precision and care. */}
             Our journey began in 2018, when a group of passionate engineering graduates came together with a shared dream — to design with purpose and precision that reaches beyond borders. What started as a small collaboration has grown into a trusted firm, shaped by creativity, hard work, and genuine care for our clients. Over the years, we’ve built not just projects, but lasting relationships — earning the appreciation and satisfaction of clients from around the world. Every design we create carries a piece of our story — thoughtful, human, and made to inspire calm and comfort.
            </p>
          </div>
        </div>
      </div>

      {/* New Section for Falcon Engineering Team */}
      <h2 className={styles.seTeamTitle} ref={teamTitleRef}>Falcon Engineering Team</h2>
      <div className={styles.seTeamContainer}>
        {teamMembers.map((member, index) => (
          <div className={styles.seTeamMember} ref={el => teamMembersRef.current[index] = el} key={index}>
            <img 
              src={member.image} 
              alt={member.name} 
              className={styles.seTeamImage}
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.position}</p>
            <p>{member.education}</p>
            <p>{member.credentials}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
