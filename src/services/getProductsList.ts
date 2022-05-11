import requester from 'services';

export interface Product {
  id: number;
  description: string;
  title: string;
  category: {
    id: number;
    image: string;
    name: string;
  };
  images: string[];
  price: number;
}
export default function getProductsList({
  limit = 10,
  offset = 0,
}: {
  limit?: number;
  offset?: number;
} = {}): Promise<Product[]> {
  return requester
    .get(`/products?offset=${offset}&limit=${limit}`)
    .then((data) => data.data);
}
