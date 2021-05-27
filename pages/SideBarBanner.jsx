import React from "react";
import styled from "styled-components";

const SidBarContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 16px;
  margin-right: 32px;
  align-items: center;
  background-color: #0d46c1;
  color: #ffffff;
`;
const SideBarText = styled.div`
  padding: 16px;
  font-size: 34px;
  text-align: center;
`;

const SideBarBanner = () => {
  return (
    <SidBarContainer>
      <SideBarText>
        <p>Linkedin Analytics, optimise content</p> <p>performance and grow.</p>
      </SideBarText>
    </SidBarContainer>
  );
};

export default SideBarBanner;