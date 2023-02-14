/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
// import styled from 'styled-components';
import { compareFormSchema } from '../../validation/compare.schema';
import TextAreaInput from '../form/textarea';

const CompareForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    mode: 'all',
    resolver: yupResolver(compareFormSchema),
  });
  const onSubmit = (data: { data: { query: string } }) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextAreaInput
        name="query"
        defaultValue="“1 plate of rice and one whole chicken” vs. “1 bowl of cereal and one orange”"
        errors={errors.query}
        ariaErrorMessage="queryErr"
        register={register}
      />
    </form>
  );
};

export default CompareForm;
