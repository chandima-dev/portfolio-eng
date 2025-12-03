import { Box, Grid, Typography } from '@mui/material';
import Slider from 'react-slick';

// Import slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsSection = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const testimonials = [
    {
      text: "Good job and great communication. We will place the next job soon.",
      name: "Wolfgang",
      country: "Cologne, Germany",
      image: "../../../public/images/Australia.svg",
    },
    {
      text: "It was nice working with Falcon — good quality professional work. Highly recommended.",
      name: "Buildrite Contractors",
      country: "CA, USA",
      image: "../../../public/images/Australia.svg",
    },
    {
      text: "I was very pleased with the service, communication was good and the turnover was quite impressive.",
      name: "GM Design Consultants",
      country: "UK",
      image: "../../../public/images/Australia.svg",
    },
    {
      text: "Falcon Designs is amazing! The floor plan was delivered on time and with great precision. We are very pleased with the results.",
      name: "Liam Samuel",
      country: "Singapore",
      image: "../../../public/images/Australia.svg",
    },
    {
      text: "The work was really good and we are happy with the designers. Thanks again and we’ll use your services in the future.",
      name: "EYB Renovations",
      country: "ON, Canada",
      image: "../../../public/images/Australia.svg",
    },
    {
      text: "Excellent company. They have completed several plans for me and have always completed the job successfully. I will continue using them.",
      name: "Louis Builders",
      country: "NC, USA",
      image: "../../../public/images/Australia.svg",
    },
    {
      text: "Always reliable, understandable, and they always exceed my expectations. Very dependable. Will continue to work with them for future projects — they are my go-to.",
      name: "Perez Engineering Group",
      country: "CA, USA",
      image: "../../../public/images/Australia.svg",
    },
    {
      text: "Excellent ability to work within the confines of the project. They were able to work with existing structures and measurements to show multiple design options. Looking forward to working with them more!",
      name: "Legato Group",
      country: "VIC, Australia",
      image: "../../../public/images/Australia.svg",
    },
    {
      text: "This was the second time using Falcon for our home plans. We came back with some edits after it had been finished. They completed all of them in a timely manner. Falcon does a fantastic job with communication which is really helpful. I believe they could do a little better with attention to detail but they are very helpful in every way possible. Definitely recommend.",
      name: "Chmielewski Builders",
      country: "Alabama, USA",
      image: "../../../public/images/Australia.svg",
    },
  ].sort((a, b) => a.text.length - b.text.length);

  return (
    <Box
      sx={{
        width: '100%',
        padding: '0.5rem 0 3rem',
        background: 'rgba(255, 255, 255, 1)', // Background color
      }}
    >
      {/* Section header */}
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontSize: '50px',
          color: 'rgba(0, 0, 0, 1)',
          fontWeight: 'bold',
          marginBottom: '2rem',
        }}
      >
        Testimonials
      </Typography>

      {/* Reduce space between slider and bullets */}
      <style>{`
        .slick-dots {
          margin-top: -10px !important;
        }
      `}</style>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              padding: '1.5rem',
              display: 'flex',
              justifyContent: 'center',
              ml: { xs: 0, md: '3rem' }, // responsive margin-left
            }}
          >
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
              sx={{
            background: '#fff',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 24px 24px rgba(0,0,0,0.08)',
                maxWidth: '380px',
              }}
            >
              {/* Logo */}
              {/* <Grid item>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    borderRadius: '50%',
                    width: 110,
                    height: 110,
                    objectFit: 'cover',
                    marginBottom: '1rem',
                  }}
                />
              </Grid> */}

              {/* Text */}
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'Nunito',
                    fontSize: '20px',
                    fontWeight: 600,
                    marginBottom: '0.6rem',
                  }}
                >
                  {testimonial.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '16px',
                    color: '#555',
                    marginBottom: '0.7rem',
                    maxWidth: '320px',
                    marginInline: 'auto',
                    lineHeight: '24px',
                  }}
                >
                  {testimonial.text}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '14px',
                    color: '#888',
                     fontWeight: 800,
                  }}
                >
                  {testimonial.country}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialsSection;
