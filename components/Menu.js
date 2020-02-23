import PageContent from './common/PageContent';
import styled from 'styled-components';

const PizzaBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;

  display: grid;
`;

const PizzaDisplay = styled.div`
  height: 200px;
  width: 200px;
  padding: 20px;
  border: 2px solid tomato;
`;

const products = [{ name: 'HI' }, { name: 'Margheretti' }];

const Menu = () => (
  <PageContent>
    <h1>Pizza Pies!</h1>
    <PizzaBox>
      {products.map(({ name }) => (
        <PizzaDisplay key={name}>
          <span>🍕 {name}</span>
        </PizzaDisplay>
      ))}
    </PizzaBox>
  </PageContent>
);

export default Menu;
