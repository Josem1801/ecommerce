import Navigation from 'components/Navigation';
import ProductDetail from 'components/templates/Detail/ProductDetail';
import ProductsRelated from 'components/templates/Detail/ProductsRelated';
import Layout from 'layout/Layout';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';
import getProductById from 'services/getProductById';
import getProductsList, { Product } from 'services/getProductsList';

interface DetailProps {
  product: Product;
  productsRelated: Product[];
}
type PathType = {
  params: {
    productId: string;
    categoryId: string;
  };
};
export const getStaticProps: GetStaticProps<DetailProps> = async ({
  params,
}) => {
  const slug = params?.productId;
  try {
    const product = await getProductById({ id: Number(slug) });
    const productsRelated = await getProductsList({ limit: 10 });
    return {
      props: {
        product,
        productsRelated,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const ProductsToGenerate = await getProductsList({ limit: 10 });
  const paths: PathType[] = ProductsToGenerate.map(({ id, category }) => ({
    params: { productId: String(id), categoryId: String(category.id) },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};
export default function Detail({
  product,
  productsRelated,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const NavigationRoutes = [
    { name: 'Home', route: '/' },
    {
      name: product.category.name,
      route: `/category/${product.category.name}`,
    },
    {
      name: product.title,
      route: '',
    },
  ];
  return (
    <Layout title="Detail">
      <Navigation routes={NavigationRoutes} name={product.title} />
      <ProductDetail product={product} />
      <ProductsRelated productList={productsRelated} />
    </Layout>
  );
}
