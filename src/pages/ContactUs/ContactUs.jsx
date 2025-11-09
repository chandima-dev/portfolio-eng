import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  StyledContainer,
  StyledFormSection,
  StyledImageSection,
  StyledFormWrapperWithBorder,
  StyledFormHeader,
  StyledSocialSection,
  StyledSocialIcon,
} from "./ContactUsStyles";
import contactImage from "../../../public/images/contactus.svg";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaViber } from 'react-icons/fa';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import SubSlider from '../../components/SubSlider/SubSlider';

// Custom Mobile Toast Component
const MobileToast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Toast disappears after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="mobile-toast">
      {message}
      <style jsx>{`
        .mobile-toast {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #333;
          color: #fff;
          padding: 10px 20px;
          border-radius: 20px;
          font-size: 14px;
          opacity: 0.9;
          text-align: center;
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

const ContactUs = () => {
  const form = useRef();
  const [mobileToast, setMobileToast] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Detect mobile view initially

  // Update `isMobile` when window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => {
          if (isMobile) {
            setMobileToast("Message sent successfully!");
          } else {
            toast.success("Message sent successfully!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          form.current.reset();
        },
        () => {
          if (isMobile) {
            setMobileToast("Failed to send message. Please try again.");
          } else {
            toast.error("Failed to send message. Please try again later.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SubSlider 
        title="Connect with Us" 
        description="We’re Here for Consultations, Collaborations, and Your Inquiries" 
      />

      <StyledContainer>
        <StyledFormWrapperWithBorder>
          <StyledFormSection>
            <StyledFormHeader>
              <h1>We're here to help</h1>
            </StyledFormHeader>
            <p>Whether you have a project in mind or need expert guidance on an upcoming design, we’re here to help.</p>
            <p>Send us a message, and our team will get back to you as soon as possible!</p>
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="user_name">Name</label>
              <input id="user_name" type="text" name="user_name" required />
              <label htmlFor="user_email">Email</label>
              <input id="user_email" type="email" name="user_email" />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </StyledFormSection>

          <StyledImageSection>
            <img src={contactImage} alt="Decorative Image" />
          </StyledImageSection>
        </StyledFormWrapperWithBorder>
      </StyledContainer>

      {/* Social Media Section */}
      <StyledSocialSection>
        <h2>Follow Our Social Network</h2>
        <p>Stay in touch with our projects and services</p>
        <div>
          <StyledSocialIcon href="https://web.facebook.com/falcondesignstudio" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FaFacebook size={35} />
          </StyledSocialIcon>
          <StyledSocialIcon href="https://lk.linkedin.com/company/falcon-engineering-and-architects" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin size={35} />
          </StyledSocialIcon>
          <StyledSocialIcon href={`https://wa.me/+94728130647`} target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <IoLogoWhatsapp size={35} />
          </StyledSocialIcon>
          <StyledSocialIcon href={`viber://chat?number=94728130647`} target="_blank" rel="noopener noreferrer" title="Viber">
            <FaViber size={35} />
          </StyledSocialIcon>
          <StyledSocialIcon href={`imo://chat?number=94728130647`} title="IMO">
            <IoChatbubbleEllipsesOutline size={35} />
          </StyledSocialIcon>
        </div>
      </StyledSocialSection>

      {/* Toast Containers for Web and Mobile */}
      {!isMobile && <ToastContainer />}
      {isMobile && mobileToast && (
        <MobileToast
          message={mobileToast}
          onClose={() => setMobileToast(null)}
        />
      )}
    </>
  );
};

export default ContactUs;
