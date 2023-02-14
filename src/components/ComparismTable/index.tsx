import React from 'react';
import {
  StyledDiv,
  StyledGrid,
  StyledUnderline,
} from '../__style/ui-block.style';
import styled from 'styled-components';
import { HeadingText, ParagraphText } from '../__style/global.style';

const ComparismTable = () => {
  return (
    <StyledTableContainer>
      {/* Table header  */}
      <StyledGrid gtc="minmax(60px, 1fr) minmax(41px, 1fr) minmax( 94px, 1fr) minmax(125px, 1fr) minmax(87px, 1fr) minmax(65px, 1fr) minmax(92px, 1fr)">
        <HeadingText
          fw="400"
          fsize="16px"
          lh="30px"
          color="var(--primary-text)"
        ></HeadingText>
        <HeadingText
          fw="800"
          fsize="14px"
          lh="30px"
          color="var(--primary-text)"
        >
          Qty
        </HeadingText>
        <HeadingText
          fw="800"
          fsize="14px"
          lh="30px"
          color="var(--primary-text)"
        >
          Unit
        </HeadingText>
        <HeadingText
          fw="800"
          fsize="14px"
          lh="30px"
          color="var(--primary-text)"
        >
          Food
        </HeadingText>
        <HeadingText
          fw="800"
          fsize="14px"
          lh="30px"
          color="var(--primary-text)"
        >
          Calories
        </HeadingText>
        <HeadingText
          fw="800"
          fsize="14px"
          lh="30px"
          color="var(--primary-text)"
        >
          Weight
        </HeadingText>
        <HeadingText
          fw="800"
          fsize="14px"
          lh="30px"
          color="var(--primary-text)"
        >
          Food Group
        </HeadingText>
      </StyledGrid>
      <StyledUnderline border="2px solid var(--border)" />
      {/* Table Body  */}
      <Tbody />
    </StyledTableContainer>
  );
};

export default ComparismTable;

const StyledTableContainer = styled.div`
  overflow-x: scroll;
`;

const StyledImg = styled.img`
  max-width: 60px;
  height: auto;
  object-fit: contain;
`;

const Tbody = () => {
  return (
    <StyledDiv pt="10px">
      <StyledGrid gtc="minmax(60px, 1fr) minmax(41px, 1fr) minmax( 94px, 1fr) minmax(125px, 1fr) minmax(87px, 1fr) minmax(65px, 1fr) minmax(92px, 1fr)">
        <StyledImg src="" alt="img" />
        <ParagraphText
          fw="400"
          fsize="16px"
          lh="30px"
          color="var(--primary-text)"
        >
          cup
        </ParagraphText>
        <ParagraphText
          fw="400"
          fsize="14px"
          lh="30px"
          color="var(--primary-text)"
        >
          cup
        </ParagraphText>
        <ParagraphText
          fw="400"
          fsize="16px"
          lh="30px"
          color="var( --background-primary)"
        >
          cup
        </ParagraphText>
        <ParagraphText
          fw="400"
          fsize="16px"
          lh="30px"
          color="var(--primary-text)"
        >
          cup
        </ParagraphText>
        <ParagraphText
          fw="400"
          fsize="16px"
          lh="30px"
          color="var(--primary-text)"
        >
          cup
        </ParagraphText>
        <ParagraphText
          fw="400"
          fsize="16px"
          lh="30px"
          color="var(--primary-text)"
        >
          cup
        </ParagraphText>
      </StyledGrid>
      <StyledUnderline border="2px solid var(--border)" mt="10px" />
    </StyledDiv>
  );
};
