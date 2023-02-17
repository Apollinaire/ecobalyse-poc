import { useMutation } from '@tanstack/react-query';
import qs from 'qs';

export enum DisabledSteps {
  Material = 'material',
  Spinning = 'spinning',
  Fabric = 'fabric',
  Ennobling = 'ennobling',
  Making = 'making',
  Distribution = 'distribution',
  Use = 'use',
  Eol = 'eol',
}

export enum EnnoblingHeatSource {
  Coal = 'coal',
  Gas = 'naturalgas',
  LightFuel = 'lightfuel',
  HeavyFuel = 'heavyFuel',
}

export enum DyeingMedium {
  Article = 'article',
  Fabric = 'fabric',
  Yarn = 'yarn',
}

type NumberStr = string;

export interface MaterialInput {
  materialId: string;
  share: NumberStr;
}

export interface SimulatorParameters {
  mass: NumberStr;
  materials: Array<MaterialInput>;
  product: string;
  countryFabric: string;
  countryDyeing: string;
  countryMaking: string;
  countrySpinning?: string;
  airTransportRatio?: NumberStr;
  quality?: NumberStr;
  reparability?: NumberStr;
  makingWaste?: NumberStr;
  picking?: NumberStr;
  surfaceMass?: NumberStr;
  disableFading?: boolean;
  disabledSteps?: Array<DisabledSteps>;
  ennoblingHeatSource?: EnnoblingHeatSource;
  dyeingMedium?: DyeingMedium;
  printing?: { value: string; share: string };
}

const simulatorKeys = [
  'mass',
  'materials',
  'product',
  'countryFabric',
  'countryDyeing',
  'countryMaking',
  'countrySpinning',
  'airTransportRatio',
  'quality',
  'reparability',
  'makingWaste',
  'picking',
  'surfaceMass',
  'disableFading',
  'disabledSteps',
  'ennoblingHeatSource',
];

const isKey = (key: string): key is keyof SimulatorParameters => {
  return simulatorKeys.includes(key);
};

const endpoint = '/simulator';

const cleanEmptyParams = (params: any): SimulatorParameters => {
  const keys = Object.keys(params);
  const result: any = {};

  keys.forEach((key: any) => {
    if (isKey(key)) {
      if (params[key]) {
        result[key] = params[key];
      }
    }
  });
  return result;
};

const useSimulator = () =>
  useMutation({
    mutationFn: async ({ materials, ...params }: SimulatorParameters) => {
      const matsQuery = materials
        .map(
          ({ materialId, share }) => `materials%5B%5D=${materialId};${share}`,
        )
        .join('&');

      const query = qs.stringify(cleanEmptyParams(params));

      const res = await fetch(
        '/api' + endpoint + '?' + matsQuery + '&' + query,
      );
      return res.json();
    },
  });

export default useSimulator;
