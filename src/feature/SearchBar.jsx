import { useCountriesStore } from "../store/useCountriesStore";
import { FaSearch } from "react-icons/fa";
export default function SearchBar(){
  const searchQuery = useCountriesStore((state) => state.searchQuery);
  const setSearchQuery = useCountriesStore((state) => state.setSearchQuery);
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return(
    <div className="relative w-full sm:max-w-md">
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 " />
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleInputChange}
        value={searchQuery}
        className="w-full pl-10 p-2 rounded shadow text-black focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white h-12 w-full "
      />
      
    </div>
  );
}