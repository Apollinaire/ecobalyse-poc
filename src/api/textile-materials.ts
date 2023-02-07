import { useQuery } from '@tanstack/react-query';
import { get } from './utils';

export interface Material {
  id: string;
  name: string;
}

const endpoint = '/textile/materials';
const getFn = get<Material[]>(endpoint);

const useTextileMaterials = () =>
  useQuery({
    queryKey: [endpoint],
    queryFn: getFn,
  });

export default useTextileMaterials;
