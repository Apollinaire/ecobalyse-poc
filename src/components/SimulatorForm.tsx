import useSimulator, { SimulatorParameters } from '@/api/simulator';
import { useState } from 'react';
import Button from './Button';
import DisplayImpacts from './DisplayImpacts';
import FormControl from './FormControl';
import Input from './Input';
import MaterialSelect from './MaterialSelect';
import SelectCountry from './SelectCountry';
import SelectProduct from './SelectProduct';

const SimulatorForm = () => {
  const [state, setState] = useState<Omit<SimulatorParameters, 'materials'>>({
    mass: '0.17',
    product: 'tshirt',
    countryFabric: 'CN',
    countryDyeing: 'CN',
    countryMaking: 'CN',
    countrySpinning: '',
    airTransportRatio: '',
    quality: '',
    reparability: '',
    makingWaste: '',
    picking: '',
    surfaceMass: '',
    disableFading: false,
    disabledSteps: [],
    ennoblingHeatSource: undefined,
  });

  const [materials, setMaterials] = useState<SimulatorParameters['materials']>([
    { materialId: 'coton', share: '1' },
  ]);

  const { data, mutateAsync } = useSimulator();

  const onSubmit = () => {
    mutateAsync({ ...state, materials });
  };

  return (
    <div className="w-[700px] max-w-full space-y-8 bg-gray-100 p-4">
      <FormControl label="Type de produit">
        <SelectProduct
          selected={state.product}
          setSelected={(productId) => {
            if (productId) {
              setState((state) => ({ ...state, product: productId }));
            }
          }}
        />
      </FormControl>
      <FormControl
        label="Masse"
        htmlFor="mass"
        helper="Masse du produit fini, exprimée en kilogrammes"
      >
        <Input
          name="mass"
          id="mass"
          type="number"
          placeholder="0.17"
          value={state.mass}
          onChange={(e) => {
            setState((prev) => ({
              ...prev,
              mass: (e.target as any).value as string,
            }));
          }}
        />
      </FormControl>
      <FormControl
        label="Matériaux"
        helper="La somme des proportions doit valoir 1"
      >
        <MaterialSelect materials={materials} setMaterials={setMaterials} />
      </FormControl>
      <FormControl label="Pays de tissage/tricotage">
        <SelectCountry
          selected={state.countryFabric}
          setSelected={(s) => {
            if (s) {
              setState((prev) => ({ ...prev, countryFabric: s }));
            }
          }}
        />
      </FormControl>
      <FormControl label="Pays de teinture">
        <SelectCountry
          selected={state.countryDyeing}
          setSelected={(s) => {
            if (s) {
              setState((prev) => ({ ...prev, countryDyeing: s }));
            }
          }}
        />
      </FormControl>
      <FormControl label="Pays de confection">
        <SelectCountry
          selected={state.countryMaking}
          setSelected={(s) => {
            if (s) {
              setState((prev) => ({ ...prev, countryMaking: s }));
            }
          }}
        />
      </FormControl>

      {/* <p className="text-center text-gray-600">* paramêtres optionnels *</p> */}

      <Button onClick={onSubmit}>Calculer</Button>
      {data && (
        <>
          {data.impacts && <DisplayImpacts impacts={data.impacts} />}
          <p>{data.description}</p>
          {data?.errors && (
            <ul className="text-red-700">
              {Object.keys(data.errors).map((key) => (
                <li key={key}>
                  {key}: {data.errors[key]}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default SimulatorForm;
