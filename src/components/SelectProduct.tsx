import useTextileProducts, { Product } from '@/api/textile-products';
import AutoComplete from './AutoComplete';

interface SelectProductProps {
  selected: Product | null;
  setSelected: (selected: Product | null) => void;
}

const SelectProduct = ({ selected, setSelected }: SelectProductProps) => {
  const { data, isSuccess } = useTextileProducts();

  const options = isSuccess ? data : [];

  return (
    <AutoComplete
      searchField="name"
      idField="id"
      displayField="name"
      selected={selected}
      setSelected={setSelected}
      options={options}
      placeholder="Product"
    />
  );
};

export default SelectProduct;
