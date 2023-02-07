import { useQuery } from '@tanstack/react-query';
import { get } from './utils';

export interface Product {
  id: string;
  name: string;
}

const endpoint = '/textile/products';
const getFn = get<Product[]>(endpoint);

const useTextileProducts = () =>
  useQuery({
    queryKey: [endpoint],
    queryFn: getFn,
  });

export default useTextileProducts;
