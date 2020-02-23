import Layout from '../components/common/Layout';
import Home from '../components/Home';
import Nav from '../components/common/Nav';

const HomePage = () => (
  <Layout>
    <Home />
    <Nav active={'Home'} />
  </Layout>
);

export default HomePage;
