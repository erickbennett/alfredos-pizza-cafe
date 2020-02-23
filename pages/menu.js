import Layout from '../components/common/Layout';
import Menu from '../components/Menu';
import Nav from '../components/common/Nav';

const MenuPage = () => (
  <Layout>
    <Menu />
    <Nav active={'Menu'} />
  </Layout>
);

export default MenuPage;
