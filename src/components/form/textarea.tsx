/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { InputStyle } from './formInput.style';
import InputError from './InputError';

interface IFormInput {
  disabled?: boolean;
  name: string;
  placeholder?: string;
  register: any;
  errors?: { message?: string };
  defaultValue?: string;
  handleDataChange?: (val: string | any) => void;
  watch?: (names?: string | string[]) => unknown;
  ariaErrorMessage: string;
}
const TextAreaInput: React.FC<IFormInput> = ({
  name,
  errors,
  disabled,
  ariaErrorMessage,
  placeholder,
  watch,
  handleDataChange,
  register,

  defaultValue,
}) => {
  useEffect(() => {
    // if field is changed
    watch &&
      watch(name) &&
      handleDataChange &&
      handleDataChange({ [name]: watch(name) });
  }, [watch && watch(name)]);

  return (
    <InputStyle disabled={disabled}>
      <label>
        <textarea
          rows={5}
          col={30}
          aria-label={name}
          className={errors && 'error-input'}
          id={name}
          placeholder={placeholder}
          autoComplete={name}
          aria-invalid="true"
          aria-errormessage={ariaErrorMessage}
          defaultValue={defaultValue}
          disabled={disabled}
          {...register(name)}
        />
      </label>
      {errors && (
        <InputError errId={ariaErrorMessage} message={errors.message} />
      )}
    </InputStyle>
  );
};

export default TextAreaInput;
