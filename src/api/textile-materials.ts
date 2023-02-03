import { useQuery } from '@tanstack/react-query';
import { get } from './utils';

const endpoint = '/textile/materials';

const useTextileMaterials = () =>
  useQuery({
    queryKey: [endpoint],
    queryFn: get(endpoint),
  });

export default useTextileMaterials;
