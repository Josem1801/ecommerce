import ItemsGrid from 'components/ItemsGrid';
import Navigation from 'components/Navigation';
import ProductCard from 'components/ProductCard';
import Products from 'components/templates/Shop/Products/styles';
import Search from 'components/templates/Shop/Search';
import useProducts from 'hooks/use-produts';
import Layout from 'layout/Layout';
import { useRouter } from 'next/router';
import { useState } from 'react';

const NavigationRoutes = [
  { name: 'Home', route: '/' },
  { name: 'shop', route: '' },
];
export default function Shop() {
  const { query } = useRouter();
  const [search, setSearch] = useState(
    () => (query.categoryId as string) || '',
  );
  const { data } = useProducts({ limit: 50, search });
  return (
    <Layout title="Shop">
      <Navigation name="Shop" routes={NavigationRoutes} />
      <Search handleSearch={(searchInput) => setSearch(searchInput.search)} />
      <Products>
        <ItemsGrid>
          {data?.map(({ category, id, images, price, title }) => (
            <ProductCard
              categoryName={category.name}
              id={id}
              image={images[0]}
              price={price}
              title={title}
              key={id}
            />
          ))}
        </ItemsGrid>
      </Products>
    </Layout>
  );
}
