import { create } from "zustand";
export const useThemeStore = create((set) => {

  const intialDark = localStorage.getItem('theme') === 'dark';
  if(intialDark) {
    document.documentElement.classList.add('dark');
  }
  else{
    document.documentElement.classList.remove('dark');
  }
  return {
    isDarkMode: intialDark,
    toggleDarkMode: () => set((state) => {
      const nextMode = !state.isDarkMode;
      if(nextMode){
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
      else{
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return { isDarkMode: nextMode };
    }),
  };
});  