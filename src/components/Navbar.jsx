import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { useThemeStore } from '../store/useThemeStore';
export default function Navbar(){
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  return(
   <nav className="flex justify-between items-center px-10 py-5 bg-white dark:bg-blue-900 shadow-md transition-colors duration-300">
      <h1 className="text-xl font-bold text-slate-800 dark:text-white">What is the world</h1>
      <button className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200 hover:opacity-80" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <>
            <IoSunnyOutline className="text-lg" />
            <span>Light Mode </span>
          </>
        ) : (
          <>
            <IoMoonOutline className="text-lg" />
            <span>Dark Mode </span>
          </>
        )}
      </button>
    </nav>
  )
}