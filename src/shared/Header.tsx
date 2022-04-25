import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  margin: 0 auto;
  box-shadow: 0px 4px 40px 2px rgba(48, 26, 75, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: ${(props) => props.theme.color.light};
`;
const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0rem;
  position: relative;
  background-color: ${(props) => props.theme.color.light};

  .hamburger-menu {
    height: 2.5rem;
    width: 2.5rem;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.color.primary};
    transition: background-color 0.2s ease-in-out;
    position: absolute;
    right: 1.5rem;
    margin: 0 auto;
    display: none;

    &:hover {
      background-color: ${(props) => props.theme.color.primaryLight};
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
    }

    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;
const NavBrand = styled.div`
  font-size: 1.5rem;
  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
  }
  .logo {
    padding-right: 0.5rem;
  }
`;
const NavLinks = styled.div`
  &.nav-menu ul {
    display: flex;
    padding: 0;
    align-items: center;
  }

  &.nav-menu li {
    list-style-type: none;
    margin: 0 1rem;
  }
  &.nav-menu a {
    display: block;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    &.nav-menu ul {
      display: none;
      position: absolute;
      top: 60px;
      left: 0;
      flex-direction: column;
      width: 100%;
      height: calc(100vh - 77px);
      background-color: white;
      border-top: 1px solid black;
    }
    &.nav-menu.expanded ul {
      display: block;

      li {
        padding: 1.5rem 0;
        text-align: center;
      }

      a {
        width: 100%;
        font-size: 1.5rem;
        &:hover {
          background-color: ${(props) => props.theme.color.primary};
          color: ${(props) => props.theme.color.light};
        }
      }
    }
  }
`;

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [accessDropdown, setAccessDropdown] = useState(false);

  const hideExpanded = () => {
    if (isNavExpanded) {
      setIsNavExpanded(false);
    }
  };

  return (
    <HeaderContainer>
      <Nav>
        <NavBrand>
          <Link to="/" className="logo-container">
            <img className="logo" src={"/assets/images/logo.svg"} alt="logo" />
            <span>groved</span>
          </Link>
        </NavBrand>
        <button
          className="hamburger-menu"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <img src="/assets/hamburger.svg" alt="" />
        </button>
        <NavLinks className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
          <ul>
            <Link to="/shop" onClick={hideExpanded}>
              <li>Shop</li>
            </Link>
            <Link to="/blog" onClick={hideExpanded}>
              <li>Blog</li>
            </Link>
            <li
              onClick={() => {
                setAccessDropdown(!accessDropdown);
              }}
            >
              <img
                className="icon"
                src={"/assets/images/user.svg"}
                alt="user"
              />
            </li>
            <li
              onClick={() => {
                setAccessDropdown(!accessDropdown);
              }}
            >
              <img
                className="icon"
                src={"/assets/images/shopping-cart.svg"}
                alt="shopping-cart"
              />
            </li>
          </ul>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
