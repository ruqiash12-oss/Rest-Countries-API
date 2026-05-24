import { useCountriesStore } from "../store/useCountriesStore";
import {HiArrowLeft} from "react-icons/hi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StatusHandlers from "../components/StatusHandlers";
export default function CountryDetails(){
 const { id } = useParams();
  const { countries } = useCountriesStore();
  const country = countries.find(c => c.cca3 === id);
  const { loadCountryById } = useCountriesStore();
  
    useEffect(() => {
      
      loadCountryById(id);
    }, [loadCountryById, id]);
  
  const borderCountries = country?.borders || [];
   if (!country) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-blue-950 flex items-center justify-center text-xl font-bold">
        Loading Country Details...
      </div>
    );
  }
  return(
    <div className="min-h-screen bg-gray-50 text-gray-950 dark:bg-blue-950 dark:text-white transition-colors duration-300 px-10 py-20 ">
          <StatusHandlers />
          <Link to='/' className='py-3 px-8 bg-white rounded shadow text-center dark:bg-blue-900 md:ml-35'>
          <HiArrowLeft className='inline-block mr-2' />
          Back</Link>
          <div className='grid grid-cols-1  md:grid-cols-2 gap-20 mt-20 max-w-6xl mx-auto'>
            {country && (
              <div className='col-span-1'>
                <img src={country.flags.png} alt={country.name.common} className='w-full h-auto rounded-[10px]' />
              </div>
            )}
           <div className='grid md:grid-cols-2'>
              <div className='col-span-1'>
                <h1 className='text-3xl font-bold mb-4'>{country?.name.common}</h1>
                <p className='mb-2'><span className='font-semibold'>Native Name:</span> {country?.name?.nativeName ? Object.values(country.name.nativeName)[0].common : 'N/A'}</p>
                <p className='mb-2'><span className='font-semibold'>Population:</span> {country?.population.toLocaleString()}</p>
                <p className='mb-2'><span className='font-semibold'>Region:</span> {country?.region}</p>
                <p className='mb-2'><span className='font-semibold'>Sub Region:</span> {country?.subregion}</p>
                <p className='mb-2'><span className='font-semibold'>Capital:</span> {country?.capital?.[0] || 'N/A'}</p>
              </div>
              <div className='col-span-1 mt-12'>
                <p className='mb-2'><span className='font-semibold'>Top Level Domain:</span> {country?.tld?.[0] || 'N/A'}</p>
                <p className='mb-2'><span className='font-semibold'>Currencies:</span> {country?.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A'}</p>
                <p className='mb-2'><span className='font-semibold'>Languages:</span> {country?.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
              </div>
              <div className='mt-10'>
                <div>{borderCountries.length > 0 && (
                  <div>
                    <h2 className='text-xl font-bold mb-4'>Border Countries:</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:w-100'>
                      {borderCountries.map(border => (
                        <Link to={`/country/${border}`} key={border} className='bg-white dark:bg-blue-900 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white py-2 px-3 rounded shadow text-center'>
                          {countries.find(c => c.cca3 === border)?.name.common || border}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}</div>
            </div>
           </div>
          </div>
          
        </div>
  )
}
