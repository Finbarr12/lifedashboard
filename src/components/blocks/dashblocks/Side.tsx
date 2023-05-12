import React from "react";
import styled from "styled-components";

const Side = () => {
  return <Container></Container>;
};

export default Side;

const Container = styled.div`
  width: 300px;
  height: 100vh;
  background: #8a2be2;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
