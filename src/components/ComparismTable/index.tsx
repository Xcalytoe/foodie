/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  StyledDiv,
  StyledGrid,
  StyledUnderline,
} from '../__style/ui-block.style';
import styled from 'styled-components';
import { HeadingText, ParagraphText } from '../__style/global.style';
import { useSearchData } from '../../hooks/data.store';

const ComparismTable = () => {
  // Get food data from store
  const getSearchData = useSearchData(({ searchData }) => searchData);

  return (
    <StyledTableContainer>
      {/* Table header  */}
      <StyledGrid gtc="minmax(60px, 1fr) minmax(41px, 1fr) minmax( 94px, 1fr) minmax(125px, 1fr) minmax(90px, 1fr) minmax(65px, 1fr) minmax(92px, 1fr)">
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
      {getSearchData?.foods?.length > 0 &&
        getSearchData.foods.map((val: IFood, index: string) => (
          <Tbody key={index} data={val} />
        ))}
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
interface IFood {
  serving_qty: number;
  food_name: string;
  serving_unit: string;
  nf_calories: string;
  serving_weight_grams: number;
  photo: { thumb: string };
  tags: { food_group: string };
}
const Tbody = ({ data }: { data: IFood }) => {
  const qty = data.serving_qty;
  const unit = data.serving_unit;
  const name = data.food_name;
  const calories = data.nf_calories;
  const weight = data.serving_weight_grams;
  const img = data.photo.thumb;
  const group = +data.tags.food_group;
  const type =
    group === 3
      ? 'Fruit'
      : group === 5
      ? 'Grain'
      : group === 2
      ? 'Protein'
      : group === 4
      ? 'Vegetable'
      : 'Dairy';

  return (
    <StyledDiv pt="10px">
      <StyledGrid
        align="center"
        gtc="minmax(60px, 1fr) minmax(41px, 1fr) minmax( 94px, 1fr) minmax(125px, 1fr) minmax(90px, 1fr) minmax(65px, 1fr) minmax(92px, 1fr)"
      >
        <StyledImg src={img} alt="img" />
        <ParagraphText
          fw="400"
          fsize="16px"
          lh="18px"
          color="var(--primary-text)"
        >
          {qty}
        </ParagraphText>
        <ParagraphText
          fw="400"
          fsize="14px"
          lh="18px"
          color="var(--primary-text)"
        >
          {unit}
        </ParagraphText>
        <ParagraphText
          fw="400"
          fsize="14px"
          lh="18px"
          color="var( --background-primary)"
        >
          {name}
        </ParagraphText>
        <ParagraphText
          fw="400"
          fsize="15px"
          lh="18px"
          color="var(--primary-text)"
        >
          {calories} kcal
        </ParagraphText>
        <ParagraphText
          fw="400"
          fsize="15px"
          lh="18px"
          color="var(--primary-text)"
        >
          {weight} g
        </ParagraphText>
        <ParagraphText
          fw="400"
          fsize="15px"
          lh="18px"
          color="var(--primary-text)"
        >
          {type}
        </ParagraphText>
      </StyledGrid>
      <StyledUnderline border="2px solid var(--border)" mt="10px" />
    </StyledDiv>
  );
};
