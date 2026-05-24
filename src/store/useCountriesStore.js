import {create} from "zustand";
import fetchCountries from "../api/fetchCountries";
import fetchCountry from "../api/fetchCountry";
export const useCountriesStore = create((set,get) => ({
  countries: [],
  searchQuery: "",
  selectedRegion: "",
  loading: false,
  error: null,
  LoadCountries: async () => {
    set({ loading: true, error: null });
    
    try {
      const data = await fetchCountries();
      
      set({ countries: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  loadCountryById: async (id) => {
      set({loading: true, error: null});
      try {
        const data = await fetchCountry(id);
         const countryData = Array.isArray(data) ? data[0] : data;
  
        set((state) => {
          if (state.countries.length === 0) {
          return {
            countries: [countryData],
          loading: false
          };
      }
      const exists = state.countries.some(c => c.cca3 === id);
        const updatedCountries = exists
          ? state.countries.map(c => c.cca3 === id ? countryData : c)
          : [...state.countries, countryData];
          return {
          countries: updatedCountries,
          loading: false
        };
      });
    }
      catch (err) {
        set({error: err.message, loading: false});
      }
    },
  setSearchQuery: (query) => set ({ searchQuery:query }),
  setSelectedRegion: (region) => set({ selectedRegion:region }),

  getFilteredCountries: () => {
    const { countries, searchQuery, selectedRegion } = get();
    return countries.filter((country) => {
      const matchesSearch = country.name.common.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = selectedRegion === '' || selectedRegion==="All"|| country.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  },
}));
