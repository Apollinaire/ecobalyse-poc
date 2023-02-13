import useTextileProducts, { Product } from '@/api/textile-products';
import AutoComplete from './AutoComplete';

interface SelectProductProps {
  selected: string | null;
  setSelected: (selected: string | null) => void;
}

const SelectProduct = ({ selected, setSelected }: SelectProductProps) => {
  const { data, isSuccess } = useTextileProducts();

  const options = isSuccess ? data : [];
  const selectedProduct = options.find(({ id }) => id === selected) ?? null;
  const setSelectedProduct = (s: Product | null) => setSelected(s?.id ?? null);

  return (
    <AutoComplete
      searchField="name"
      idField="id"
      displayField="name"
      selected={selectedProduct}
      setSelected={setSelectedProduct}
      options={options}
      placeholder="T-shirt"
    />
  );
};

export default SelectProduct;
