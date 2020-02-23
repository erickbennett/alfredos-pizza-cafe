import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme, globals } from '../styles/defaults';

const GlobalStyle = createGlobalStyle`${globals}`;

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
