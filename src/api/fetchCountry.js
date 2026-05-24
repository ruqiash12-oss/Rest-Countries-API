export default async function fetchCountry(id){
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}?fields=name,capital,region,population,flags,languages,currencies,tld,subregion,cca3,borders`);
    if (!response.ok) throw new Error('Failed to retrieve data from the server');
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error fetching data', err);
    throw err;
  }
}