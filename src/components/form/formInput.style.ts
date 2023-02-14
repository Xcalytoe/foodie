import styled from 'styled-components';

export const InputStyle = styled.div<{ disabled?: boolean }>`
  label {
    display: block;

    .label {
      font-style: normal;
      font-weight: 450;
      font-size: 14px;
      line-height: 18px;
      color: var(--primary-text);
      margin-bottom: 9px;
    }
  }
  input,
  textarea {
    height: 40px;
    padding: 0 12px;
    border: 1px solid var(--border);
    border-radius: 6px;
    width: 100%;
    background: ${({ disabled }) =>
      disabled ? 'var(--border-2)' : 'var(--white)'};
    transition: all 0.3s;
    box-shadow: var(--shadow_2);

    &:hover,
    &:focus {
      transition: all 0.2s;
      border: 1px solid
        ${({ disabled }) =>
          !disabled ? 'var(--primary-text)' : 'var(--border)'};
    }
    &::placeholder {
      font-family: var(--Primary-font);
    }
    &:focus {
      outline: none;
      box-shadow: none;
    }
    /* hide number arrow  */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    /* Firefox */
    -moz-appearance: textfield;
  }

  textarea {
    min-height: 186px;
    font-size: 24px;
    padding: 20px 15px;
    color: var(--secondary-text);
  }
  .phone-input {
    input[type='tel'] {
      border: none;
      padding-left: 0;
      height: 100%;
    }
    display: grid;
    align-items: center;
    border: 1px solid var(--border);
    border-radius: 4px;
    padding-left: 15px;
    height: 45px;
    transition: all 0.2s;
    &:hover,
    &:focus {
      transition: all 0.2s;
      border: 1px solid var(--primary-text);
    }
    .PhoneInputCountrySelect {
      border: none !important;
    }
  }

  .error {
    &-input {
      border: 1px solid var(--danger);
      border-radius: 4px;
      &:hover,
      &:focus {
        border: 1px solid var(--danger);
      }
    }
  }

  &.button {
    button {
      width: 100%;
      height: 50px;
      border-radius: 5px;
      font-style: normal;
      font-weight: 450;
      font-size: 16px;
      line-height: 20px;
      color: var(--white);
    }
  }
  /* Change autocomplete styles in WebKit */
  input:-webkit-autofill,
/* input:-webkit-autofill:hover, */
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
/* textarea:-webkit-autofill:hover, */
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
/* select:-webkit-autofill:hover, */
select:-webkit-autofill:focus {
    /* border: none !important; */
    -webkit-text-fill-color: unset !important;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
    box-shadow: 0 0 0px 1000px #fff inset !important;
    background-color: #fff !important;
    transition: background-color 5000s ease-in-out 0s !important;
  }
`;
