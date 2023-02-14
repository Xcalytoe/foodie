import React from 'react';
import styled from 'styled-components';
// import { StyledSpinner } from './Spinner.styled';

function Spinner() {
  return <StyledSpinner />;
}

export default Spinner;

const StyledSpinner = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid var(--white);
  border-radius: 50%;
  border-top-color: var(--primary-dark);
  color: transparent !important;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
