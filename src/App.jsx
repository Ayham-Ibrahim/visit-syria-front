import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer/Footer";
import RateStars from "./shared/RateStars/RateStars";
import SearchBox from "./shared/SearchBox/SearchBox";
import SectionRating from "./shared/SectionRating/SectionRating";
import HomePage from "./pages/HomePage/Homepage";
import ExplorePage from "./shared/ExplorePage/ExplorePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import BookPage from "./pages/BookPage/BookPage";
import Navbar from "./layout/Navbar/Navbar";
// import Sidebar from './layout/Sidebar/Sidebar'
import RecommendationsPage from "./pages/RecommendationsPage/RecommendationsPage";
import PlaceDetails from "./shared/PlaceDetails/PlaceDetails";
import Archeological from "./pages/BlogPage/Archeological/Archeological";
import Nature from "./pages/BlogPage/Nature/Nature";
import Busra from "./pages/BlogPage/Busra/Busra";

function App() {
  return (
    <>
      {/* <SearchBox /> */}
      {/* <RateStars /> */}
      {/* <SectionRating /> */}

      {/* <PlaceDetails /> */}

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path='/explore' element={<ExplorePage />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/archeological" element={<Archeological />} />
        <Route path="/blog/archeological/busra" element={<Busra />} />
        <Route path="/blog/nature" element={<Nature />} />
        <Route path="/booking" element={<BookPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
