import React from 'react';
import CompareForm from '../components/CompareForm';
import { ParagraphText } from '../components/__style/global.style';
import {
  StyledDiv,
  StyledFlex,
  StyledFlexItem,
} from '../components/__style/ui-block.style';
import styled from 'styled-components';
import Breakdown from '../components/Breackdown';
import ComparismTable from '../components/ComparismTable';

const Home = () => {
  return (
    <StyledMainContainer>
      <StyledContainer p="45px 15px">
        <ParagraphText
          fsize="14px"
          lh="20px"
          fw="700"
          spacing="1px"
          color="var(--primary-text)"
          mb="30px"
        >
          Enter a query like{' '}
          <ParagraphText
            fsize="15px"
            lh="20px"
            fw="400"
            as="span"
            spacing="1px"
            color="var(--background-primary)"
          >
            " 1 cup mashed potatoes and 2 tbsp gravy "
          </ParagraphText>{' '}
          to see how it works. We support tens of thousands of foods, including
          international dishes.
        </ParagraphText>

        <StyledFlex flexW="wrap" rg="20px" cg="20px">
          {/* Form container */}
          <StyledFlexItem mWidth="598px" basis="300px" grow>
            <CompareForm />
            {/* Comparism Table */}
            <StyledHorizontalScroll minusPx="66px" mt="40px">
              <ComparismTable />
            </StyledHorizontalScroll>
          </StyledFlexItem>
          {/* Preview Container  */}
          <StyledFlexItem mWidth="280px" basis="280px" grow>
            <Breakdown />
          </StyledFlexItem>
        </StyledFlex>
      </StyledContainer>
    </StyledMainContainer>
  );
};

export default Home;

export const StyledHorizontalScroll = styled(StyledDiv)<{ minusPx: string }>`
  overflow-x: auto;
  max-width: calc(100vw - ${({ minusPx }) => minusPx});
`;
const StyledContainer = styled(StyledDiv)`
  max-width: 944px;
  margin: auto;
  background-color: var(--white);
  border: 1px solid var(--border-2);
  width: 100%;
  min-height: 555px;
`;

const StyledMainContainer = styled.main`
  padding: 100px 15px;
`;
