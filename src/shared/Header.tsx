import logo from "../../src/assets/images/logo.svg";
import cart from "../../src/assets/images/shopping-cart.svg";
import user from "../../src/assets/images/user.svg";
import Button from "./Button";
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
`;
const NavBrand = styled.div`
  font-size: 1.5rem;
  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    padding-right: 0.5rem;
  }
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;

  .icon {
    margin-left: 1rem;
  }

  a {
    margin: 0 0.5rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavBrand>
          <Link to="/" className="logo-container">
            <img className="logo" src={logo} alt="logo" />
            <span>groved</span>
          </Link>
        </NavBrand>
        <NavLinks>
          <Link to="/about">About us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/shop">Shop</Link>
          <Button color="secondary">Log in</Button>

          <img className="icon" src={user} alt="user" />
          <img className="icon" src={cart} alt="shopping-cart" />
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
