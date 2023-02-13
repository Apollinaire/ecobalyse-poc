import useTextileCountries, { Country } from '@/api/textile-countries';
import AutoComplete from './AutoComplete';

interface SelectCountryProps {
  selected: string | null;
  setSelected: (selected: string | null) => void;
}

const SelectCountry = ({ selected, setSelected }: SelectCountryProps) => {
  const { data, isSuccess } = useTextileCountries();

  const options = isSuccess ? data : [];
  const selectedCountry = options.find(({ code }) => code === selected) ?? null;
  const setSelectedCountry = (s: Country | null) =>
    setSelected(s?.code ?? null);

  return (
    <AutoComplete
      searchField="name"
      idField="code"
      displayField="name"
      selected={selectedCountry}
      setSelected={setSelectedCountry}
      options={options}
      placeholder="Country"
    />
  );
};

export default SelectCountry;
