import requester from 'services';

export default function getProductByCategoryId(id: string) {
  return requester.get(`/categories/${id}/products`).then((data) => data.data);
}
