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

export interface SimulatorParameters {
  mass: number;
  materials: Array<{ materialId: string; share: number }>;
  productId: string;
  countryFabricCode: string;
  countryDyingCode: string;
  countryMakingCode: string;
  countrySpinningCode?: string;
  airTransportRatio?: number;
  quality?: number;
  reparability?: number;
  makingWaste?: number;
  picking?: number;
  surfaceMass?: number;
  disableFading?: boolean;
  disabledSteps?: Array<DisabledSteps>;
}
