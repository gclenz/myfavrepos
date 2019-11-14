import styled from 'styled-components';

export const Loading = styled.div`
  color: #202023;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
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

  h1 {
    margin: 0.5rem 0 1rem;
    text-transform: capitalize;
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
  display: flex;
  flex-direction: row;
  height: 40px;
  justify-content: space-around;
  width: 100%;
`;
