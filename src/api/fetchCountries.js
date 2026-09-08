export default async function fetchCountries(){
  try {
  const response = await fetch('https://api.restcountries.com/countries/v5/all?fields=name,capital,region,population,flags,cca3');
  if (!response.ok) throw new Error('Failed to retrieve data from the server');
  const data = await response.json();
  return data;
  } catch (err) {
    console.error('Error fetching data', err);
    throw err;
  }
}