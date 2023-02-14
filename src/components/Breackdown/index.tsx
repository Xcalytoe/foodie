import React from 'react';
import styled from 'styled-components';
import { HeadingText } from '../__style/global.style';
import { StyledUnderline } from '../__style/ui-block.style';

const Breakdown = () => {
  return (
    <StyledContainer>
      <HeadingText
        fsize="2.15em"
        lh="1.15em"
        fw="800"
        color="var(--primary-dark)"
      >
        Nutrition Facts
      </HeadingText>
      <StyledUnderline border="1px solid var(--primary-dark)" />
    </StyledContainer>
  );
};

export default Breakdown;

const StyledContainer = styled.div`
  width: 100%;
  background-color: var(--white);
  border: 1px solid var(--primary-dark);
  min-height: 200px;
  padding: 6px;
`;
