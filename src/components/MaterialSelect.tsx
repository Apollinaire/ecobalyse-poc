import { SimulatorParameters } from '@/api/simulator';
import { Dispatch, FC, SetStateAction } from 'react';
import Input from './Input';
import SelectMaterial from './SelectMaterial';

interface MaterialSelectProps {
  materials: SimulatorParameters['materials'];
  setMaterials: Dispatch<SetStateAction<SimulatorParameters['materials']>>;
}

const MaterialSelect: FC<MaterialSelectProps> = ({
  materials,
  setMaterials,
}) => {
  return (
    <>
      {materials.map(({ materialId, share }, i) => (
        <div className="flex gap-2" key={i}>
          <SelectMaterial
            selected={materialId}
            setSelected={(selected) => {
              if (selected === null) {
                return;
              }
              setMaterials((mats) =>
                mats.map((original, j) => ({
                  ...original,
                  materialId: j !== i ? original.materialId : selected,
                })),
              );
            }}
          />
          <Input
            type="number"
            value={share}
            onChange={(e) => {
              const newValue = (e.target as any).value;
              setMaterials((mats) =>
                mats.map((original, j) => ({
                  ...original,
                  share: j !== i ? original.share : newValue,
                })),
              );
            }}
          />
          <button
            type="button"
            onClick={() =>
              setMaterials((mats) => {
                const newMats = [...mats];
                newMats.splice(i, 1);
                return newMats;
              })
            }
          >
            x
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          setMaterials((mats) => [
            ...mats,
            { materialId: 'coton', share: '0' },
          ]);
        }}
      >
        +
      </button>
    </>
  );
};

export default MaterialSelect;
