import React from "react";
import styled, { css } from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  color: "primary" | "secondary" | "linkDark" | "linkLight"; // styling options
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  width?: string;
};

const COLOR = {
  primary: css`
    color: ${(props) => props.theme.color.light};
    background: ${(props) => props.theme.color.primary};
    border: 1px solid ${(props) => props.theme.color.primary};
    &:hover {
      background-color: ${(props) => props.theme.color.light};
      color: ${(props) => props.theme.color.primary};
    }
  `,
  secondary: css`
    color: ${(props) => props.theme.color.primary};
    background: ${(props) => props.theme.color.light};
    border: 1px solid ${(props) => props.theme.color.primary};
    transition: all 0.35s;

    &:hover {
      background-color: ${(props) => props.theme.color.primary};
      color: ${(props) => props.theme.color.light};
    }
  `,
  linkDark: css`
    color: ${(props) => props.theme.color.primary};
    border: 1px solid ${(props) => props.theme.color.light};
    padding: 1rem;
  `,
  linkLight: css`
    color: ${(props) => props.theme.color.light};
    padding: 1rem;
  `,
};

const ButtonContainer = styled.div<ButtonProps>`
  padding: 1rem 2rem;
  cursor: pointer;
  font-family: ${(props) => props.theme.fontFamily.default};
  font-weight: 400;
  width: ${(props) => props.width};
  text-align: center;
  ${(props) => props.color && COLOR[props.color]}
  transition: all .35s;
`;

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  color,
  disabled,
  width,
}) => {
  return (
    <>
      <ButtonContainer
        onClick={onClick}
        color={color}
        disabled={disabled}
        width={width}
      >
        {children}
      </ButtonContainer>
    </>
  );
};

export default Button;
