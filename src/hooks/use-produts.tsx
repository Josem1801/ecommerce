import getProductsList from 'services/getProductsList';
import useSWR from 'swr';

interface UseProductsProps {
  limit?: number;
  offset?: number;
  search?: string;
}
export default function useProducts({ limit, offset }: UseProductsProps) {
  return useSWR('products', () => getProductsList({ limit, offset }));
}
