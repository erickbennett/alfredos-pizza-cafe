import Layout from '../components/common/Layout';
import About from '../components/About';
import Nav from '../components/common/Nav';

const AboutPage = () => (
  <Layout>
    <About />
    <Nav active={'About'} />
  </Layout>
);

export default AboutPage;
