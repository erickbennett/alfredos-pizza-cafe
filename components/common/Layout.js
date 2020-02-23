import Head from 'next/head';
import styled from 'styled-components';

const PageLayout = styled.div`
  margin: 0;
  height: ${props => props.theme.maxHeight};
  width: ${props => props.theme.maxWidth};
`;

const Layout = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Better Pizza</title>
      <link rel="icon" href="/images/pizza_slice.svg" />
    </Head>
    <PageLayout data-testid="page-layout">{children}</PageLayout>
  </>
);

export default Layout;
