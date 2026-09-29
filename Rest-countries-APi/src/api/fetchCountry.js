const API_KEY = import.meta.env.VITE_REST_COUNTRIES_API_KEY;
export default async function fetchCountry(id) {
  try {
    const response = await fetch(
      `https://api.restcountries.com/countries/v5/codes.alpha_3/${
        id
      }?response_fields=names.common,names.official,capitals,region,subregion,population,flag,languages,currencies,tld,codes.alpha_3,borders`,
      {
        headers: {
          Authorization: `Bearer ${
            API_KEY
          }`,
        },
      }
    );
    console.log(response)
    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.errors?.[0]?.message ||
          `Failed to retrieve data: ${response.status}`
      );
    }

    return result.data.objects[0];
  } catch (err) {
    console.error("Error fetching country:", err);
    throw err;
  }
}