import SearchBar from "../feature/SearchBar";
import FilterRegion from "../feature/FilterBar";

export default function Search(){
  return(
    <div className="flex flex-col sm:flex-row justify-between gap-4 h-12 mb-20 md:mb-12  ">
    <SearchBar />
    <FilterRegion />
    </div>
  )
}
