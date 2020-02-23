import AnimatedWrapper from '../common/AnimatedWrapper';
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

const Icon = styled.div`
  display: flex;
  justify-content: center;
  width: 99%;
`;

const IconImg = styled.div`
  height: 127px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    object-fit: contain;
  }
`;

const Label = styled.span`
  margin: 20px 0 0 0;
  font-family: ${props => props.theme.fontHeavy};
  font-size: 18px;
  line-height: 22px;
  color: ${props => (props.highlighted ? props.theme.red : props.theme.grey)};
  text-transform: uppercase;
`;

const VerticalSpacer = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  background-color: ${props => props.theme.navSpacerGrey};
  width: 1px;
  height: 170px;
`;

function Footer({ active }) {
  const pageCount = pages.length;

  return (
    <Nav>
      {pages.map(({ path, title, img, active_img }, i) => (
        <IconContainer key={title}>
          <Icon>
            <AnimatedWrapper path={path}>
              <IconImg>
                <img src={active === title ? active_img : img} alt={title} />
                <Label highlighted={active === title ? 1 : 0}>{title}</Label>
              </IconImg>
            </AnimatedWrapper>
          </Icon>
          <VerticalSpacer visible={i < pageCount - 1 ? 1 : 0} />
        </IconContainer>
      ))}
    </Nav>
  );
}

export default Footer;
