import styled from 'styled-components';

const PageContent = styled.main`
  height: 80%;
  width: 100%;
  background-color: ${props => props.theme.red};
  display: flex;
  flex-direction: column;
  align-content: center;

  padding: 40px;
`;

const Home = () => (
  <PageContent>
    <h1 className="title">Welcome to Alfredo's Pizza Cafe</h1>
  </PageContent>
);

export default Home;
