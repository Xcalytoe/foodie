/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useSearchData } from '../../hooks/data.store';
import { useCompareFoodMutation } from '../../hooks/useCompareFoodMutation';
import { compareFormSchema } from '../../validation/compare.schema';
import TextAreaInput from '../form/textarea';
import Spinner from '../loader/Spinner';
import { ParagraphText } from '../__style/global.style';
import { StyledButton, StyledDiv } from '../__style/ui-block.style';

const CompareForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    mode: 'all',
    resolver: yupResolver(compareFormSchema),
  });
  const { mutate, isLoading, data } = useCompareFoodMutation();

  const onSubmit = (data: { query: string }) => {
    mutate(data);
  };

  const setSearchData = useSearchData(({ addToStore }) => addToStore);
  // Update state when data is returned
  useEffect(() => {
    data && setSearchData(data.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="comparism-form">
      <TextAreaInput
        name="query"
        aria-label="query"
        defaultValue="“1 plate of rice and one whole chicken” vs. “1 bowl of cereal and one orange”"
        errors={errors.query}
        ariaErrorMessage="queryErr"
        register={register}
      />
      <StyledDiv mt="30px">
        <StyledButton
          aria-label="Calculate Foods"
          color="var(--white)"
          bg="var(--background-primary)"
          borderR="6px"
          border="1px solid var(--background-primary)"
          style={{ height: 40 }}
          hoverC="var(--primary-text)"
          hoverB="var(--btn-hover)"
          type="submit"
        >
          <StyledBtnText p="0 16px" fsize="16px" lh="22px" fw="500">
            {isLoading && <Spinner />}
            Calculate Foods
          </StyledBtnText>
        </StyledButton>
      </StyledDiv>
    </form>
  );
};

export default CompareForm;

const StyledBtnText = styled(ParagraphText)`
  display: flex;
  column-gap: 6px;
`;
