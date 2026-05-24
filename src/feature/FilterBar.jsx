import { useCountriesStore } from "../store/useCountriesStore";
import { useShallow } from "zustand/shallow";
import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
export default function FilterRegion() {
  const [isOpen, setIsOpen] = useState(false);
  const Regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  const { selectedRegion, setSelectedRegion} = useCountriesStore(
    useShallow((state) => ({
      selectedRegion: state.selectedRegion,
      setSelectedRegion: state.setSelectedRegion,
    }))
  )
  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    setIsOpen(false);
  };
  return(
    <div >
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between h-12 w-48 px-4 py-2 bg-white dark:bg-gray-700 dark:text-white rounded shadow">
          <span>{selectedRegion == "" ? "Filter by Region" : selectedRegion}</span>

          {isOpen ? <HiChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300" /> : <HiChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300" />}
        </button>
        {isOpen && (<ul className={`absolute mt-2 w-48 bg-white dark:bg-gray-700 dark:text-white rounded shadow ${isOpen ? 'block' : 'hidden'}`}>
          {Regions.map((region) => (
            <li key={region} value={region} onClick={()=>handleRegionChange(region)} className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
              {region}
            </li>
          ))}
        </ul>

        )}  
        
    </div>
  );
}