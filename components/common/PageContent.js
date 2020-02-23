import styled from 'styled-components';

const Content = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const PageContent = ({ children }) => <Content>{children}</Content>;

export default PageContent;
