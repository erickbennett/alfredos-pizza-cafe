import PageContent from './common/PageContent';
import styled from 'styled-components';

const Background = styled.div`
  height: 100%;
  width: 100%;

  background-image: url('/pizza_parlor.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  border: 2px solid ${props => props.theme.black};

  h1 {
    color: ${props => props.theme.white};
    text-indent: 40px;
  }
`;

const Home = () => (
  <PageContent>
    <Background>
      <h1 className="title">Welcome to Alfredo's Pizza Cafe</h1>
    </Background>
  </PageContent>
);

export default Home;
