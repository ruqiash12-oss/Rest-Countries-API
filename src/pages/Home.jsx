import {useCountriesStore} from "../store/useCountriesStore";
import {useEffect} from "react";
import Cards from "../components/Cards";
import Search from "../components/Search";
import StatusHandlers from "../components/StatusHandlers";
export default function Home(){
  const { LoadCountries } = useCountriesStore();

  useEffect(() => {
    LoadCountries();
  }, [LoadCountries]);

  return(
    <div className="min-h-screen bg-gray-50 text-gray-950 dark:bg-blue-950 dark:text-white transition-colors duration-300 px-10 md:px-20 py-10">
      <StatusHandlers />
      <Search />
      <Cards />
    </div>
  );
}
