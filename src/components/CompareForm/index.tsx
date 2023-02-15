/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { usePinState, useSearchData } from '../../hooks/data.store';
import { useCompareFoodMutation } from '../../hooks/useCompareFoodMutation';
import { compareFormSchema } from '../../validation/compare.schema';
import InputError from '../form/InputError';
import TextAreaInput from '../form/textarea';
import Spinner from '../loader/Spinner';
import { ParagraphText } from '../__style/global.style';
import { StyledButton, StyledDiv } from '../__style/ui-block.style';

const CompareForm = () => {
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    mode: 'all',
    resolver: yupResolver(compareFormSchema),
  });
  const { mutate, isLoading, data, error } = useCompareFoodMutation();

  const onSubmit = (data: { query: string }) => {
    mutate(data);
  };
  // Add to state
  const setSearchData = useSearchData(({ addToStore }) => addToStore);

  // Add to state
  const pinSearchData = useSearchData(({ pinToStore }) => pinToStore);

  // Clear pinned state
  const clearearchData = useSearchData(({ clearStore }) => clearStore);

  // Get pinned state
  const pinState = usePinState(({ pinState }) => pinState);

  // Update state when data is returned
  useEffect(() => {
    data && setSearchData(data.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  // Request error message
  const requestErr = error?.response?.data?.message;

  const handleOnChange = () => {
    if (checked) {
      clearearchData();
      setChecked(false);
    } else {
      pinSearchData(data.data);
      setChecked(true);
    }
  };

  useEffect(() => {
    // Get pinned status
    pinState?.foods?.length > 0 ? setChecked(true) : setChecked(false);
  }, [pinState?.foods]);

  return (
    <StyledDiv>
      {/* Error response  */}
      {requestErr && (
        <StyledDiv mb="10px">
          <InputError errId="requestErr" message={`${requestErr}`} />
        </StyledDiv>
      )}
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
          {(checked || data?.data) && (
            <StyledDiv mt="20px">
              <StyledLabel>
                <input
                  type="checkbox"
                  name="pin-request"
                  checked={checked}
                  value="pin"
                  onChange={handleOnChange}
                />
                <ParagraphText
                  fsize="15px"
                  lh="20px"
                  fw="400"
                  as="span"
                  spacing="1px"
                  color="var(--primary-dark)"
                >
                  {checked ? 'Unpin pinned result' : 'Pin result'}
                </ParagraphText>
              </StyledLabel>
            </StyledDiv>
          )}
        </StyledDiv>
      </form>
    </StyledDiv>
  );
};

export default CompareForm;

const StyledBtnText = styled(ParagraphText)`
  display: flex;
  column-gap: 6px;
`;
const StyledLabel = styled.label`
  display: flex;
  column-gap: 6px;
`;
