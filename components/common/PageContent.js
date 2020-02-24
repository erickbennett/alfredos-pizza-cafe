import styled from 'styled-components';

const Content = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Background = styled.div`
  height: 100%;
  width: 100%;

  background-image: ${props => (props.src ? `url(${props.src})` : 'none')};
  background-size: cover;
  background-repeat: no-repeat;

  border: 2px solid ${props => props.theme.black};
`;

const PageContent = ({ children, backgroundImage }) => (
  <Content>
    <Background src={backgroundImage}>{children}</Background>
  </Content>
);

export default PageContent;
