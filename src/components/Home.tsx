'use client';

import { Country } from '@/api/textile-countries';
import { Material } from '@/api/textile-materials';
import { Product } from '@/api/textile-products';
import { useState } from 'react';
import SelectCountry from './SelectCountry';
import SelectMaterial from './SelectMaterial';
import SelectProduct from './SelectProduct';

export default function Home() {
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(
    null,
  );
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <SelectMaterial
        selected={selectedMaterial}
        setSelected={setSelectedMaterial}
      />
      <SelectCountry
        selected={selectedCountry}
        setSelected={setSelectedCountry}
      />
      <SelectProduct
        selected={selectedProduct}
        setSelected={setSelectedProduct}
      />
    </>
  );
}
