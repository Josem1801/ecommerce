import requester from 'services';

export interface ProductCategory {
  id: number;
  image: string;
  name: number;
}
export default function getProductsCategories(): Promise<ProductCategory[]> {
  return requester.get('/categories').then((data) => data.data);
}
