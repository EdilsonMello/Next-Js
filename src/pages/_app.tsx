// Dependencies
import React from 'react'
import { AppProps } from 'next/app';

// Style
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Navbar from '../components/navbar/navbar.component';
import Header from '../components/header/header.component';
import LearnHow from '../components/learn-how/learn-how.component';
import Footer from '../components/footer/footer.component';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
      <Navbar/>
      <Header/>
      <LearnHow/>
      <Footer/>
    </ThemeProvider>
  );
}

export default MyApp;

