import '../global.css';
import styles from './Form.module.css';
import imgDestination from '../assets/destination.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { DropdownCountries } from './DropdownCountries';
import { DropdownCities } from './DropdownCities';

const phoneNumber = /^\(\d{2}\) \d{4,5}-\d{4}$/gi;
const schema = yup
  .object({
    name: yup.string().required('O nome é obrigatório'),
    email: yup
      .string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    phone: yup
      .string()
      .matches(phoneNumber, 'O telefone é obrigatório')
      .required(),
    cpf: yup.string().min(11, 'O cpf é obrigatório').required(),
    country: yup.string().required('O país é obrigatório'),
    city: yup.string().required('A cidade é obrigatória'),
  })
  .required();

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(userData) {
    console.log(userData);
  }

  const [formValues, setFormValues] = useState({});
  const handleInputChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <img src={imgDestination} alt="Picture of undraw" />

      <div className={styles.forms}>
        <div className={styles.dadosP}>
          <h2>Dados Pessoais</h2>

          <label>
            Nome
            <input type="text" {...register('name')} />
            <span>{errors.name?.message}</span>
          </label>

          <label>
            Email
            <input type="text" {...register('email')} />
            <span>{errors.email?.message}</span>
          </label>

          <label>
            Telefone
            <input type="tel" {...register('phone')} />
            <span>{errors.phone?.message}</span>
          </label>

          <label>
            CPF
            <input
              type="text"
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
              {...register('cpf')}
            />
            <span>{errors.cpf?.message}</span>
          </label>
        </div>

        <div className={styles.dadosI}>
          <h2>Dados de interesse</h2>
          <label name="country" {...register('country')}>
            País
            <DropdownCountries
              id="country"
              name="country"
              onChange={handleInputChange}
            />
            <span>{errors.country?.message}</span>
          </label>

          <label name="city" {...register('city')}>
            Cidade
            <DropdownCities
              id="city"
              name="city"
              country={formValues.country}
              onChange={handleInputChange}
            />
            <span>{errors.city?.message}</span>
          </label>
        </div>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
