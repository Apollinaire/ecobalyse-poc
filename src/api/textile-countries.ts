import { useQuery } from '@tanstack/react-query';
import { get } from './utils';

export interface Country {
  code: string;
  name: string;
}

const endpoint = '/textile/countries';
const getFn = get<Country[]>(endpoint);

const useTextileCountries = () =>
  useQuery({
    queryKey: [endpoint],
    queryFn: getFn,
  });

export default useTextileCountries;
