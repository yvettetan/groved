import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.color.primary};
  text-align: center;
  padding: 4rem 2rem;
  display: flex;

  .logo {
    padding: 0 4rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <img className="logo" src={"/assets/images/logo-name.svg"} alt="logo" />
    </FooterContainer>
  );
};

export default Footer;
