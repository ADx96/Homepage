import img1 from "../images/1.jpg";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: #1b1b52;
`;
const Description = styled.h4`
  text-align: center;
  color: #1b1b52;
`;

const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
function ShopComponents() {
  return (
    <div>
      <div className="title">
        <Title>Games Shop</Title>
        <Description>Get Your Games </Description>
        <ShopImage alt="Games Shop" src={img1} />
      </div>
    </div>
  );
}

export default ShopComponents;
