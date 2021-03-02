import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }

`;
const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const NavStyled = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
`;

const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

const ProductWrapper = styled.div`
  display: inline-block;
  margin-left: 150px;
  img {
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  p {
    text-align: center;
    &.product-price {
      color: ${(props) => props.theme.blue};
    }
  }
`;

const theme = {
  Light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    blue: "1b1b52",
    red: "#ff3232",
  },
  Dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    blue: "1b1b52",
    red: "#ff3232",
  },
};

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;

const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
export { GlobalStyle, ThemeButton, SearchBarStyled, theme, DetailWrapper };
export default ProductWrapper;
