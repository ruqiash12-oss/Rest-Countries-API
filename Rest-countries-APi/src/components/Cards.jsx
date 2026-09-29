import { useCountriesStore } from "../store/useCountriesStore";
import { Link } from "react-router-dom";

export default function Cards() {
  const selectedRegion = useCountriesStore(
    (state) => state.selectedRegion
  );

  const getFilteredCountries = useCountriesStore(
    (state) => state.getFilteredCountries
  );

  const filteredCountries = getFilteredCountries();

  const allCountries =
    selectedRegion === "All" || !selectedRegion
      ? filteredCountries
      : filteredCountries.filter(
          (country) => country.region === selectedRegion
        );

  return (
    <div>
      {allCountries.length === 0 ? (
        <div className="py-10 text-center text-lg">
          No countries found!
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-15 sm:grid-cols-2 md:grid-cols-3 md:px-10 lg:grid-cols-4">
          {allCountries.map((country, index) => (
            <Link
              key={
                country.codes?.alpha_3 ||
                `${country.names?.common}-${index}`
              }
              to={`/country/${country.codes?.alpha_3 || index}`}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105 dark:bg-blue-900"
            >
              {country.flag?.url_png ? (
                <img
                  src={country.flag.url_png}
                  alt={`${country.names?.common || "Country"} flag`}
                  className="h-40 w-full object-cover"
                />
              ) : (
                <div className="flex h-40 items-center justify-center bg-gray-200 text-5xl">
                  {country.flag?.emoji || "🏳️"}
                </div>
              )}

              <div className="p-6">
                <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">
                  {country.names?.common || "Unknown country"}
                </h2>

                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Population:</span>{" "}
                  {country.population?.toLocaleString() || "N/A"}
                </p>

                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Region:</span>{" "}
                  {country.region || "N/A"}
                </p>

                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Capital:</span>{" "}
                  {country.capitals?.[0]?.name || "N/A"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}