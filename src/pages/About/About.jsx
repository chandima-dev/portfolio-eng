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
            <p style={{ lineHeight: '1.8', fontFamily: 'Cerebri Sans, sans-serif', fontSize: '20px' }}>
             Our journey began in 2018, when a group of passionate engineering graduates came together with a shared dream — to design with purpose and precision that reaches beyond borders. What started as a small collaboration has grown into a trusted firm, shaped by creativity, hard work, and genuine care for our clients. Over the years, we’ve built not just projects, but lasting relationships — earning the appreciation and satisfaction of clients from around the world. Every design we create carries a piece of our story — thoughtful, human, and made to inspire calm and comfort.
            </p>
          </div>
        </div>
      </div>

      {/* Falcon Engineering Team Section */}
      <h2 className={styles.seTeamTitle} ref={teamTitleRef}>Falcon Engineering Team</h2>

      <div className={styles.seTeamWrapper}>
        {/* Row 1 – First Member Large */}
        <div className={styles.rowOne}>
          <div
            className={`${styles.seTeamMember} ${styles.firstMember}`}
            ref={(el) => (teamMembersRef.current[0] = el)}
          >
            <img src={teamMembers[0].image} alt={teamMembers[0].name} className={styles.firstMemberImage} />
            <h3>{teamMembers[0].name}</h3>
            <p>{teamMembers[0].role}</p>
            <p>{teamMembers[0].position}</p>
            <p>{teamMembers[0].education}</p>
            <p>{teamMembers[0].credentials}</p>
          </div>
        </div>

        {/* Row 2 – 3 Members */}
        <div className={styles.rowTwo}>
          {teamMembers.slice(1, 4).map((member, index) => (
            <div
              className={styles.seTeamMember}
              ref={(el) => (teamMembersRef.current[index + 1] = el)}
              key={index}
            >
              <img src={member.image} alt={member.name} className={styles.seTeamImage} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.position}</p>
              <p>{member.education}</p>
              <p>{member.credentials}</p>
            </div>
          ))}
        </div>

        {/* Row 3 – 4 Members */}
        <div className={styles.rowThree}>
          {teamMembers.slice(4, 8).map((member, index) => (
            <div
              className={styles.seTeamMember}
              ref={(el) => (teamMembersRef.current[index + 4] = el)}
              key={index}
            >
              <img src={member.image} alt={member.name} className={styles.seTeamImage} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.position}</p>
              <p>{member.education}</p>
              <p>{member.credentials}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
