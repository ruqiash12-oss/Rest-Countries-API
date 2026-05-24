import { useCountriesStore } from "../store/useCountriesStore";
export default function StatusHandlers() {
  const { loading, error } = useCountriesStore();
 if (loading) return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center font-bold text-2xl bg-gray-50 text-gray-900 dark:text-white dark:bg-blue-900">
      <div className="text-center animate-pulse">
        Loading ...
      </div>
    </div>
  );

  if (error) return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center font-bold text-xl text-red-500 bg-gray-50 dark:bg-blue-900 dark:text-red-400">
      {error}
    </div>
  );
  return null; 
}