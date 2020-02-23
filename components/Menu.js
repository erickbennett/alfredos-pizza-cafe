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

import styled from 'styled-components';

const PizzaOven = styled.div`
  height: 530px;
  width: 100%;
  padding: 10px;

  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 25px 25px;

  justify-items: center;

  overflow: auto;
`;

const PizzaBox = styled(animated.div)`
  background-image: linear-gradient(180deg, #ffffff, #f2f2f2);
  height: 150px;
  width: 150px;
  display: flex;
  border-radius: 4px;
`;

function Menu() {
  const [pizzas, setPizzas] = useState(PIZZAS);

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

  return (
    <PageContent backgroundImage="/images/menu.png">
      <Header>
        Our Pies! Not hot circles of garbage like that other Alfredo!
      </Header>
      <PizzaOven>
        {pizzasTransition.map(({ item, key, props }) => (
          <PizzaBox key={item.title} style={props}>
            <Icon title={item.title} img={item.img} />
          </PizzaBox>
        ))}
      </PizzaOven>
    </PageContent>
  );
}

export default Menu;
