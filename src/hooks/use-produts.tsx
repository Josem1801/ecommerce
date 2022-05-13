import { useQuery } from 'react-query';
import getProductsList, { Product } from 'services/getProductsList';

interface UseProductsProps {
  limit?: number;
  offset?: number;
  search?: string;
}
export default function useProducts({ limit, offset }: UseProductsProps) {
  return useQuery<Product[], Error>('groups', () =>
    getProductsList({ limit, offset }),
  );
}
