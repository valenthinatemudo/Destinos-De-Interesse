import { useEffect, useState } from 'react';
import { apiCities } from '../services/api';

export const DropdownCities = ({ id, name, country, onChange = () => {} }) => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    apiCities(country).then((cities) => {
      setCities(cities);
    });
  }, [country]);

  return (
    <select id={id} name={name} onChange={onChange}>
      <option value="">Selecione uma cidade...</option>
      {cities.map((city) => {
        const { id, name_ptbr } = city;
        return (
          <option key={id} value={id}>
            {name_ptbr}
          </option>
        );
      })}
    </select>
  );
};
