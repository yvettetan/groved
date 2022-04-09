import React from "react";
import heroImg from "../assets/images/hero.png";
import styled from "styled-components";
import Button from "../shared/Button";

const HeroContainer = styled.div`
  background: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;
`;
const HeroText = styled.div`
  position: absolute;
  top: 40%;
  left: 12%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.color.light};

  h1 {
    font-size: 4rem;
    max-width: 40rem;
    margin: 0;
  }

  p {
    margin: 1rem 0 1.5rem 0;
    font-size: 1.25rem;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>
        <h1>Find your next worthwhile growth</h1>
        <p>Plant picks &amp; everything in between</p>
        <Button color="primary" width="50%">
          Shop Now
        </Button>
      </HeroText>
    </HeroContainer>
  );
};

export default Hero;
