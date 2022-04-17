import React from "react";
import styled from "styled-components";

const FooterContainer = styled.section`
  background-color: ${(props) => props.theme.color.primary};
  text-align: center;
  padding: 4rem 2rem;
  display: flex;

  .logo {
    color: ${(props) => props.theme.color.light};
    padding: 0 4rem;
  }

  .footer-links-container {
    display: flex;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0 4rem;
    a {
      color: ${(props) => props.theme.color.light};
      padding: 0.5rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <img className="logo" src={"/assets/images/logo-name.svg"} alt="logo" />
      <div className="footer-links-container">
        <div className="footer-links">
          <a href="/">Newsletter</a>
          <a href="/">About us</a>
          <a href="/">Contact us</a>
        </div>
        <div className="footer-links">
          <a href="/">Privacy policy</a>
          <a href="/">Terms and conditions</a>
          <a href="/">FAQs</a>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
