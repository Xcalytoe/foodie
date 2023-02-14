import React from 'react';
import styled from 'styled-components';
import { StyledFlex } from '../__style/ui-block.style';
// import ErrorIcon from '../../../public/assets/images/error-notification.svg';

const InputError = ({
  message,
  errId,
}: {
  errId: string;
  message?: string;
}) => {
  return (
    <ErrorMsgStyle align="center" className="error-msg">
      <ErrorIcon />
      <span id={errId}>{message}</span>
    </ErrorMsgStyle>
  );
};

export default InputError;
const ErrorMsgStyle = styled(StyledFlex)`
  margin-top: 12px;
  display: flex;
  align-items: center;
  column-gap: 2px;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--danger);
  }
`;

const ErrorIcon = () => (
  <>
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4998 19.9918C8.08381 19.9918 4.50781 16.4158 4.50781 11.9998C4.50781 7.58381 8.08381 4.00781 12.4998 4.00781C16.9158 4.00781 20.4918 7.58381 20.4918 11.9998C20.4918 16.4158 16.9158 19.9918 12.4998 19.9918ZM12.4998 18.3598C16.0038 18.3598 18.8598 15.5278 18.8598 11.9998C18.8598 8.49581 16.0278 5.63981 12.4998 5.63981C8.99581 5.63981 6.13981 8.47181 6.13981 11.9998C6.13981 15.5038 8.97181 18.3598 12.4998 18.3598ZM11.9958 7.00781H13.0038C13.2918 7.00781 13.5078 7.22381 13.4838 7.48781L13.2198 12.6958C13.2198 12.8878 13.0758 13.0078 12.9078 13.0078H12.0918C11.9238 13.0078 11.7798 12.8638 11.7798 12.6958L11.5158 7.48781C11.5158 7.22381 11.7318 7.00781 11.9958 7.00781ZM12.0918 14.5918H12.9078C13.1958 14.5918 13.4118 14.8078 13.3878 15.0958V15.8878C13.3878 16.1758 13.1718 16.3918 12.9078 16.3918H12.0918C11.8038 16.3918 11.5878 16.1758 11.5878 15.8878V15.0958C11.5878 14.8078 11.8038 14.5918 12.0918 14.5918Z"
        fill="#EB5757"
      />
    </svg>
  </>
);
