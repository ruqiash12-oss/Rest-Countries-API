import { useCountriesStore } from "../store/useCountriesStore";
import { Link } from "react-router-dom";
export default function Cards(){
  const selectedRegion = useCountriesStore((state) => state.selectedRegion);
  const getFilteredCountries = useCountriesStore((state) => state.getFilteredCountries);
  const filteredCountries = getFilteredCountries();
  const AllCountries = selectedRegion === "All"|| !selectedRegion? filteredCountries : filteredCountries.filter(country => country.region === selectedRegion);

  return(
    <div>
        {AllCountries.length === 0 ? (
        <div className="text-center py-10 text-lg">No countries found!</div>
      ) : (
        <div className="grid grid-cols-1 md:px-10  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-15 ">
      {AllCountries.map((country) => (
        <Link to ={`/country/${country.cca3}`} key={country.cca3} className="bg-white dark:bg-blue-900 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
          <img src={country.flags.png} alt={country.name.common} className="w-full h-40 object-cover" />
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 dark:text-white">{country.name.common}</h2>
            <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
            <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">Region:</span> {country.region}</p>
            <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">Capital:</span> {country.capital ? country.capital[0] : "N/A"}</p>
          </div>
        </Link>
      ))}
    </div>
      )}
    </div>
  );
}