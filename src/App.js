import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Social from "./components/Social";
import Products from "./components/Products";
import Search from "./components/Search";
import MainPage from "./Pages/MainPage";
import InfoPage from "./Pages/InfoPage";
import ContactPage from "./Pages/ContactPage";
import ProductPage from "./Pages/ProductPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/hakkımızda" element={<InfoPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
        <Route path="/ürünler" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
