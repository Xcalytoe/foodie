/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { InputStyle } from './formInput.style';
import InputError from './InputError';

interface IFormInput {
  disabled?: boolean;
  placeholder: string;
  label?: string;
  name: string;
  inputType: string;
  register: any;
  errors?: { message?: string };
  defaultValue?: string;
  handleDataChange?: (val: string | any) => void;
  watch?: (names?: string | string[]) => unknown;
  ariaErrorMessage: string;
}
const FormInput: React.FC<IFormInput> = ({
  placeholder,
  label,
  name,
  errors,
  disabled,
  ariaErrorMessage,

  watch,
  handleDataChange,
  register,
  inputType,
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
        {label && <div className="label">{label}</div>}
        <input
          aria-label={name}
          className={errors && 'error-input'}
          id={name}
          autoComplete={name}
          type={inputType}
          aria-invalid="true"
          aria-errormessage={ariaErrorMessage}
          defaultValue={defaultValue}
          placeholder={placeholder}
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

export default FormInput;
