import Layout from '../components/common/Layout';
import Reviews from '../components/Reviews';
import Nav from '../components/common/Nav';

const ReviewsPage = () => (
  <Layout>
    <Reviews />
    <Nav active={'Reviews'} />
  </Layout>
);

export default ReviewsPage;
