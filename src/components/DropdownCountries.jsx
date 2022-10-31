import { useEffect, useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import { apiCountries } from '../services/api';

export const DropdownCountries = ({ id, name }) => {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await apiCountries().then((data) => {
        setCountries(
          data?.map((country) => {
            const { code, name_ptbr } = country;
            return { label: name_ptbr, value: code };
          })
        );
      });
    }
    fetchData();
  }, []);

  return (
    <div>
      <MultiSelect
        id={id}
        name={name}
        options={countries}
        value={selected}
        onChange={setSelected}
        labelledBy={'Selecione'}
      />
    </div>
  );
};
