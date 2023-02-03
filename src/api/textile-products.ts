import { useQuery } from '@tanstack/react-query';
import { get } from './utils';

const endpoint = '/textile/products';

const useTextileProducts = () =>
  useQuery({
    queryKey: [endpoint],
    queryFn: get(endpoint),
  });

export default useTextileProducts;
