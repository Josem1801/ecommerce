/* eslint-disable max-len */
import CategoryProducts from 'components/templates/Home/CategoryProducts';
import FeaturedProducts from 'components/templates/Home/FeaturedProducts';
import Hero from 'components/templates/Home/Hero';
import PopularProducts from 'components/templates/Home/PopularProducts';
import Layout from 'layout/Layout';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import getProductsCategories, {
  ProductCategory,
} from 'services/getProdcutsCategorys';
import getProductsList, { Product } from 'services/getProductsList';

interface HomeProps {
  featuredProducts: Product[];
  popularProducts: Product[];
  productsCategories: ProductCategory[];
}
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
