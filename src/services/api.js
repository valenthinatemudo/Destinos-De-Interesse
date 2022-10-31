export const apiCountries = async () => {
  const urlCountries = 'https://amazon-api.sellead.com/country';
  return await fetch(urlCountries).then(
    async (response) => await response.json()
  );
};

export const apiCities = async () => {
  const urlCities = 'https://amazon-api.sellead.com/city';
  return await fetch(urlCities).then(async (response) => await response.json());
};
