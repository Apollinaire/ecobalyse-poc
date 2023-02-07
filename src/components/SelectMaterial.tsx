import useTextileMaterials, { Material } from '@/api/textile-materials';
import AutoComplete from './AutoComplete';

interface SelectMaterialProps {
  selected: Material | null;
  setSelected: (selected: Material | null) => void;
}

const SelectMaterial = ({ selected, setSelected }: SelectMaterialProps) => {
  const { data, isSuccess } = useTextileMaterials();

  const options = isSuccess ? data : [];

  return (
    <AutoComplete
      searchField="name"
      idField="id"
      displayField="name"
      selected={selected}
      setSelected={setSelected}
      options={options}
      placeholder="Material"
    />
  );
};

export default SelectMaterial;
