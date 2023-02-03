import { useQuery } from '@tanstack/react-query';
import { get } from './utils';

const endpoint = '/textile/countries';

const useTextileCountries = () =>
  useQuery({
    queryKey: [endpoint],
    queryFn: get(endpoint),
  });

export default useTextileCountries;
