import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SubSlider from '../../components/SubSlider/SubSlider';
import { Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Fade } from 'react-awesome-reveal';
import cardData from './ProjectData'; 

const MultiActionAreaCard = ({ image, title, delay, index }) => {
  const navigate = useNavigate();

  return (
    <Fade direction="up" delay={delay} triggerOnce>
      <Card
        sx={{
          width: '100%',
          maxWidth: 360,
          my: 2,
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
        style={{ cursor: 'pointer' }}
      >
        <CardMedia component="img" height="250" image={image} alt={title} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            textAlign="center"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </CardContent>
      </Card>
    </Fade>
  );
};

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SubSlider
        title="Our Projects"
        description="Explore our portfolio of valuable and impactful projects"
      />

      <Container sx={{ mt: { xs: -26, md: 10 }, mb: { xs: 4, md: 0 } }}>
        <Grid container spacing={2} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <MultiActionAreaCard
                image={card.image}
                title={card.title}
                delay={index * 100}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ---------------- GIF FULL-WIDTH ANIMATION ---------------- */}
      <div 
        style={{ 
          textAlign: "center", 
          marginTop: "50px", 
          marginBottom: "-5px", 
          backgroundColor: "rgb(43, 41, 41)", 
          overflow: "hidden" 
        }}
      >
        <h2 
          style={{ 
            color: "#fff", 
            fontSize: "2.5rem", 
            marginBottom: "5px", 
            animation: "zoomIn 1s ease forwards" 
          }}
        >
          Trusted Services, Connecting the World
        </h2>

        <img
          src="/images/Australia (9).gif"
          alt="Animated GIF"
          className="gif-responsive"
          style={{
            width: "100%",
            height: "80vh",     // Desktop view
            objectFit: "contain",
          }}
        />
      </div>

      <style>
        {`
          @keyframes floatAnimation {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }

          @keyframes zoomIn {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }

          /* -------- MOBILE VIEW (MAKE GIF SMALLER) -------- */
          @media (max-width: 600px) {
            .gif-responsive {
              height: 40vh !important;   /* Smaller on mobile */
              margin-top: 10px;
              margin-bottom: 10px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
