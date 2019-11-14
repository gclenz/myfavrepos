import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header>
        <h1>MyFavRepos</h1>
      </Header>
      <Routes />
      <GlobalStyle />
      <Footer>
        <p>
          Created by{' '}
          <a
            href="https://github.com/gclenz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gabriel Lenz
          </a>
        </p>
      </Footer>
    </>
  );
}

export default App;
