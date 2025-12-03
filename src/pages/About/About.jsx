import React, { useEffect, useRef } from 'react';
import styles from './About.module.css';
import SubSlider from '../../components/SubSlider/SubSlider';
import { teamMembers } from './MembersData';

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

      if (textElement.getBoundingClientRect().top < window.innerHeight) {
        textElement.classList.add(styles.fadeIn);
      }

      for (let image of images) {
        if (image.getBoundingClientRect().top < window.innerHeight) {
          image.classList.add(styles.slideInLeft);
        }
      }

      if (titleElement.getBoundingClientRect().top < window.innerHeight) {
        titleElement.classList.add(styles.fadeIn);
      }

      teamMembersRef.current.forEach(member => {
        if (member && member.getBoundingClientRect().top < window.innerHeight) {
          member.classList.add(styles.slideInUp);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Split team into triangle shape
  const rows = [
    [teamMembers[0]],                        // row 1 -> 1 member
    teamMembers.slice(1, 4),               // row 2 -> 3 members
    teamMembers.slice(4, 8)                // row 3 -> 4 members
  ];

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
              <img src="/images/aboutUs/about1.jpeg" alt="Falcon Engineering" />
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

      <h2 className={styles.seTeamTitle} ref={teamTitleRef}>Falcon Engineering Team</h2>

      {/* TRIANGLE LAYOUT */}
      <div className={styles.triangleWrapper}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.teamRow}>
          {row.map((member, index) => {
            const refIndex = rowIndex === 0 ? 0 : rowIndex === 1 ? index + 1 : index + 4;
            return (
              <div
                key={index}
                className={`${styles.seTeamMember} ${rowIndex === 0 ? styles.featuredMember : ''}`}
                ref={(el) => (teamMembersRef.current[refIndex] = el)}
              >
                <img src={member.image} alt={member.name} className={styles.seTeamImage} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p>{member.position}</p>
                <p>{member.education}</p>
                <p>{member.credentials}</p>
              </div>
            );
          })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
