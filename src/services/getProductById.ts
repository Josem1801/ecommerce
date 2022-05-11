import requester from 'services';

interface GetProductByIdProps {
  id: number;
}

export default function getProductById({ id }: GetProductByIdProps) {
  return requester.get(`/products/${id}`).then((data) => data.data);
}
