interface ImpactsRecord {
  acd: number;
  ozd: number;
  cch: number;
  fwe: number;
  swe: number;
  tre: number;
  pco: number;
  pma: number;
  ior: number;
  fru: number;
  mru: number;
  ldu: number;
}

const nameUnit: Record<keyof ImpactsRecord, { unit: string; name: string }> = {
  acd: { unit: 'mol H+ eq', name: 'Acidification' },
  ozd: { unit: 'kg CFC-11 eq', name: "Appauvrissement de la couche d'ozone" },
  cch: { unit: 'kg CO2 eq', name: 'Changement climatique' },
  fwe: { unit: 'kg P eq', name: 'Eutrophisation eaux douces' },
  swe: { unit: 'kg N eq', name: 'Eutrophisation marine' },
  tre: { unit: 'mol N eq', name: 'Eutrophisation terrestre' },
  pco: { unit: 'kg NMVOC eq', name: "Formation d'ozone photochimique" },
  pma: { unit: 'disease incidences', name: 'Particules' },
  ior: { unit: 'kg Bq-U235 eq', name: 'Radiations ionisantes' },
  fru: { unit: 'MJ', name: 'Utilisation de ressources fossiles' },
  mru: {
    unit: 'kg Sb eq',
    name: 'Utilisation de ressources minérales et métalliques',
  },
  ldu: { unit: 'pt', name: 'Utilisation des sols' },
};

interface DisplayImpactsProps {
  impacts: ImpactsRecord;
}

const isImpactKey = (key: string): key is keyof ImpactsRecord => {
  return Object.keys(nameUnit).includes(key);
};

const DisplayImpacts = ({ impacts }: DisplayImpactsProps) => {
  return (
    <ul>
      {Object.keys(impacts).map((key) => {
        if (isImpactKey(key)) {
          return (
            <li key={key} className="mb-1">
              {nameUnit[key].name}: <strong>{impacts[key]}</strong>{' '}
              <span className="whitespace-nowrap">{nameUnit[key].unit}</span>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default DisplayImpacts;
