import PageContent from './common/PageContent';
import { useState } from 'react';
import Header from './common/Header';
import Icon from './common/Icon';
import { PIZZAS } from '../data';
import { useSpring, animated, useTransition, config } from 'react-spring';
import {
  INNER_CARD_ELEMENT_TRANSITION_UP,
  INNER_CARD_ELEMENT_TRANSITION_DOWN
} from '../styles/animations';
import Modal from './common/Modal';
import styled from 'styled-components';

const PizzaOven = styled.div`
  height: 530px;
  width: 100%;
  padding: 10px;

  background-image: linear-gradient(180deg, #ffffff, #f8f8f8);

  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 25px 25px;

  justify-items: center;

  overflow: auto;
`;

const PizzaBox = styled(animated.div)`
  background-color: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
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

function Menu() {
  const [pizzas, setPizzas] = useState(PIZZAS);

  const [on, toggle] = useState(false);
  const [item, setItem] = useState({ title: '', img: '' });

  const pizzasTransition = useTransition(pizzas, item => item.title, {
    from: { ...INNER_CARD_ELEMENT_TRANSITION_DOWN },
    enter: { ...INNER_CARD_ELEMENT_TRANSITION_UP },
    leave: { ...INNER_CARD_ELEMENT_TRANSITION_DOWN },
    config: item => {
      const i =
        pizzas.length > 1 ? pizzas.findIndex(pizza => pizza === item) : 0;
      return {
        mass: 1,
        tension: 150,
        friction: i + 17
      };
    }
  });

  const selectItem = item => {
    setItem(item);
    toggle(!on);
  };

  return (
    <PageContent>
      {on && (
        <Modal title={item.title} toggle={() => toggle(false)}>
          <IconImg alt={item.title} src={`/images/${item.img}`} />
        </Modal>
      )}
      <Header>
        Our Pies! Not hot circles of garbage like that other Alfredo!
      </Header>
      <PizzaOven>
        {pizzasTransition.map(({ item, key, props }) => (
          <PizzaBox
            key={item.title}
            style={props}
            onClick={() => selectItem(item)}
          >
            <>
              <IconImg alt={item.title} src={`/images/${item.img}`} />
              <Label>{item.title}</Label>
            </>
          </PizzaBox>
        ))}
      </PizzaOven>
    </PageContent>
  );
}

export default Menu;
