import useTextileMaterials, { Material } from '@/api/textile-materials';
import AutoComplete from './AutoComplete';

interface SelectMaterialProps {
  selected: string | null;
  setSelected: (selected: string | null) => void;
}

const SelectMaterial = ({ selected, setSelected }: SelectMaterialProps) => {
  const { data, isSuccess } = useTextileMaterials();

  const options = isSuccess ? data : [];

  const selectedObject = options.find(({ id }) => id === selected) || null;
  const setSelectedObject = (s: Material | null) => setSelected(s?.id ?? null);

  return (
    <AutoComplete<Material>
      searchField="name"
      idField="id"
      displayField="name"
      selected={selectedObject}
      setSelected={setSelectedObject}
      options={options}
      placeholder="Materiau"
    />
  );
};

export default SelectMaterial;
