import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;

  input {
    border: 2px solid #eee;
    border-radius: 10px;
    flex: 1;
    font-size: 1rem;
    padding: 1rem;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background-color: #2980b9;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  margin-left: 1rem;
  padding: 0 1rem;

  &[disabled] {
    cursor: not-allowed;
    background-color: #202023;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  padding: 1rem;
  padding-inline-start: 0;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    & + li {
      border-top: 1px solid #eee;
    }
  }

  a {
    color: #2980b9;
    text-decoration: none;
  }
`;
