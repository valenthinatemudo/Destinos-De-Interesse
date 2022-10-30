import { useEffect, useState } from 'react';
import { apiCountries } from '../services/api';

export const DropdownCountries = ({ id, name, onChange = () => {} }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    apiCountries().then((countries) => {
      setCountries(countries);
    });
  });

  return (
    <select id={id} name={name} onChange={onChange}>
      <option value="">Selecione um país...</option>
      {countries.map((country) => {
        const { code, name_ptbr } = country;
        return (
          <option key={code} value={code}>
            {name_ptbr}
          </option>
        );
      })}
    </select>
  );
};
