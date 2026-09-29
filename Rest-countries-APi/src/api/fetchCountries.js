const API_KEY = import.meta.env.VITE_REST_COUNTRIES_API_KEY;
export default async function fetchCountries() {
  try {
    const allCountries = [];
    let offset = 0;
    const limit = 100;
    let more = true;

    while (more) {
      const response = await fetch(
       `https://api.restcountries.com/countries/v5?response_fields=names.common,capitals,region,population,flag,codes.alpha_3&limit=${limit}&offset=${offset}`,
        {
          headers: {
            Authorization: `Bearer ${
              API_KEY
            }`,
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.errors?.[0]?.message ||
            `Failed to retrieve data: ${response.status}`
        );
      }

      allCountries.push(...result.data.objects);

      more = result.data.meta.more;
      offset += limit;
    }

    return allCountries;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
}