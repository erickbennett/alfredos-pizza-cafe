import AnimatedWrapper from '../common/AnimatedWrapper';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 99%;
`;

const IconImg = styled.img`
  height: 60px;
  object-fit: contain;
`;

const Label = styled.span`
  font-family: ${props => props.theme.fontHeavy};
  font-size: 18px;
  line-height: 22px;
  color: ${props => (props.highlighted ? 'tomato' : props.theme.steel)};
  text-transform: uppercase;
  text-align: center;
`;

function Icon({ path = null, title, img, active }) {
  const isActive = active === title;

  return (
    <Container>
      <AnimatedWrapper path={path}>
        <IconImg
          src={isActive ? `/images/active_${img}` : `/images/${img}`}
          alt={title}
        />
      </AnimatedWrapper>
      <Label highlighted={isActive ? 1 : 0}>{title}</Label>
    </Container>
  );
}

export default Icon;
