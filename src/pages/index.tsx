import CategoryProducts from 'components/templates/Home/CategoryProducts';
import FeaturedProducts from 'components/templates/Home/FeaturedProducts';
import Hero from 'components/templates/Home/Hero';
import PopularProducts from 'components/templates/Home/PopularProducts';
import WhyShopWithUs from 'components/templates/Home/WhyShopWithUs';
import Layout from 'layout/Layout';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <Layout title="Home">
    <Hero />
    <FeaturedProducts />
    <WhyShopWithUs />
    <PopularProducts />
    <CategoryProducts />
  </Layout>
);

export default Home;
