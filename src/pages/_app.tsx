// Dependencies
import React from 'react'
import { AppProps } from 'next/app';

// Style
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

// Components
import Navbar from '../components/navbar/navbar.component';
import Header from '../components/header/header.component';
import LearnHow from '../components/learn-how/learn-how.component';
import Footer from '../components/footer/footer.component';
import Brand from '../components/brand/brand.component';
import JoinList from '../components/join-list/join-lis.component';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
      <div id="features">
        <Navbar/>
      </div>
      <Header/>
      <div id="services">
        <LearnHow/>
      </div>
      <div id="partners">
      <JoinList/>
      </div>
        <Brand/>
      <div id="pricing">
        <Footer />
      </div>
      </ThemeProvider>
  );
}

export default MyApp;

