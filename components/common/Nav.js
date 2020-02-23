import Icon from './Icon';
import { pages } from '../../data';
import styled from 'styled-components';

const Nav = styled.footer`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${props => props.theme.bsNav};
`;

const IconContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.navGrey};
`;

const VerticalSpacer = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  background-color: ${props => props.theme.navSpacerGrey};
  width: 1px;
  height: 95%;
`;

function Footer({ active }) {
  const pageCount = pages.length;

  return (
    <Nav>
      {pages.map(({ path, title, img }, i) => (
        <IconContainer key={title}>
          <Icon path={path} title={title} img={img} active={active} />
          <VerticalSpacer visible={i < pageCount - 1 ? 1 : 0} />
        </IconContainer>
      ))}
    </Nav>
  );
}

export default Footer;
