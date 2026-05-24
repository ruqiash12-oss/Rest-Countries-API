import Home from "./pages/Home"; 
import CountryDetails from "./pages/CountryDetails"; 
import Navbar from "./components/Navbar"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
