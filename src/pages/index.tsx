/* eslint-disable max-len */
import CategoryProducts from 'components/Templates/Home/CategoryProducts';
import FeaturedProducts from 'components/Templates/Home/FeaturedProducts';
import Hero from 'components/Templates/Home/Hero';
import PopularProducts from 'components/Templates/Home/PopularProducts';
import Layout from 'layout/Layout';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import getProductsCategories, {
  ProductCategory,
} from 'services/getProdcutsCategorys';
import getProductsList, { Product } from 'services/getProductsList';

interface HomeProps {
  featuredProducts: Product[];
  popularProducts: Product[];
  productsCategories: ProductCategory[];
}
export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const featuredProducts = await getProductsList();
  const popularProducts = await getProductsList({ offset: 10, limit: 9 });
  const productsCategories = await getProductsCategories();
  return {
    props: {
      featuredProducts,
      popularProducts,
      productsCategories,
    },
  };
};

export default function Home({
  featuredProducts,
  popularProducts,
  productsCategories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout title="Home">
      <Hero
        image={featuredProducts[1].images[0]}
        alt={featuredProducts[0].title}
      />
      <FeaturedProducts productList={featuredProducts} />
      <PopularProducts productList={popularProducts} />
      <CategoryProducts categories={productsCategories} />
    </Layout>
  );
}
