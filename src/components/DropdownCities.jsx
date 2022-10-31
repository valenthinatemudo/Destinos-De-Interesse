import { useEffect, useState } from 'react';
import { apiCities } from '../services/api';
import { MultiSelect } from 'react-multi-select-component';

export const DropdownCities = ({ id, name }) => {
  const [cities, setCities] = useState([]);
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await apiCities().then((data) => {
        setCities(
          data?.map((city) => {
            const { id, name_ptbr } = city;
            return { label: name_ptbr, value: id };
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
        options={cities}
        value={selected}
        onChange={setSelected}
        labelledBy={'Selecione'}
      />
    </div>
  );
};
