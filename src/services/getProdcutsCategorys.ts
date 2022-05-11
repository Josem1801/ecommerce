import requester from 'services';

export interface ProductCategory {
  id: number;
  image: string;
  name: string;
}
export default function getProductsCategories(): Promise<ProductCategory[]> {
  return requester.get('/categories').then((data) => data.data);
}
