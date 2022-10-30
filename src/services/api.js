const responseToJson = (response) => response.json();

export const apiCountries = () => {
  const urlCountries = 'https://amazon-api.sellead.com/country';
  return fetch(urlCountries).then(responseToJson);
};

export const apiCities = () => {
  const urlCities = 'https://amazon-api.sellead.com/city';
  return fetch(urlCities).then(responseToJson);
};
