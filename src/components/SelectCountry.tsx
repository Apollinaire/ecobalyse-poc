import useTextileCountries, { Country } from '@/api/textile-countries';
import AutoComplete from './AutoComplete';

interface SelectCountryProps {
  selected: Country | null;
  setSelected: (selected: Country | null) => void;
}

const SelectCountry = ({ selected, setSelected }: SelectCountryProps) => {
  const { data, isSuccess } = useTextileCountries();

  const options = isSuccess ? data : [];

  return (
    <AutoComplete
      searchField="name"
      idField="code"
      displayField="name"
      selected={selected}
      setSelected={setSelected}
      options={options}
      placeholder="Country"
    />
  );
};

export default SelectCountry;
