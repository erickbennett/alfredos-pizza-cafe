import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.white};
  text-indent: 20px;
`;

const Header = ({ children }) => <Title>{children}</Title>;
export default Header;
