import styled, { keyframes, css } from 'styled-components';

// Animations
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div.attrs(props => ({
  disabled: props.loading,
}))`
  color: #202023;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 50%;
    margin: 1rem 0 0.5rem;
    width: 100px;
  }

  h2 {
    margin: 0.5rem 0 1rem;
    text-transform: capitalize;
  }

  h3 {
    margin-top: 1rem;
  }

  h4 {
    text-transform: capitalize;
  }

  p {
    color: #606060;
    max-width: 400px;
    text-align: center;
    margin-bottom: 1rem;
  }

  a {
    color: #2980b9;
    text-decoration: none;
  }
`;

export const IssueList = styled.ul`
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-top: 1rem;

  li {
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 1rem 0;

    & + li {
      border-top: 1px solid #eee;
    }
  }

  section {
    flex: 1;
  }

  img {
    border: 5px solid #eee;
    border-radius: 50%;
    margin-right: 1rem;
    width: 75px;
  }

  strong {
    a {
      color: #444;
      text-decoration: none;

      &:hover {
        color: #2980b9;
      }
    }

    span {
      background-color: #2980b9;
      border-radius: 3px;
      color: #fff;
      font-size: 0.75rem;
      margin-left: 0.5rem;
      padding: 0.1rem 0.25rem;
    }
  }

  p {
    color: #808080;
  }
`;

export const RepoInfo = styled.section`
  align-items: center;
  background-color: #eee;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(150, 150, 150, 0.1);
  display: flex;
  flex-direction: row;
  height: 40px;
  justify-content: space-around;
  width: 100%;
`;

export const IssueState = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #2980b9;
  border: none;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(150, 150, 150, 0.2);
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  width: 100%;

  option {
    background-color: #808080;
    border-radius: 5px;
    font-weight: bold;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const PageNavigation = styled.section`
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 1rem;

  button {
    background-color: #2980b9;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    padding: 1rem;
  }
`;
