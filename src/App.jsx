
// import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Button from "./shared/Button/Button";
// import CommentCard from "./shared/CommentCard/CommentCard";
import ContactSection from "./shared/ContactSection/ContactSection";



import { Routes ,Route } from 'react-router-dom'
import './App.css'
import Footer from './layout/Footer/Footer'
import RateStars from './shared/RateStars/RateStars'
import SearchBox from './shared/SearchBox/SearchBox'
import SectionRating from './shared/SectionRating/SectionRating'
import HomePage from './pages/HomePage/Homepage'
import ExplorePage from './shared/ExplorePage/ExplorePage'
import AboutPage from './pages/AboutPage/AboutPage'
import BlogPage from './pages/BlogPage/BlogPage'
import BookPage from './pages/BookPage/BookPage'
import Navbar from './layout/Navbar/Navbar'
// import Sidebar from './layout/Sidebar/Sidebar'
import RecommendationsPage from './pages/RecommendationsPage/RecommendationsPage'



function App() {
  return (
    <>
      {/* <Test /> */}
      {/* <Button
        btnText="ابحث"
        // radius="45.5px"
        className="reserve-button"
        // classForSearchButton="d-grid gap-2 col-6 mx-auto"
      /> */}
      {/* <div className="row">
        <CommentCard
          name="Sara Adam"
          date="24.08.2023"
          img_path="/src/assets/images/comment-img-2.png"
        />
        <CommentCard
          name="Sara Adam"
          date="24.08.2023"
          img_path="/src/assets/images/comment-img-2.png"
        />
      </div> */}
      <ContactSection />



    <SearchBox/>
    <RateStars/>
    <SectionRating/>


      <PlaceDetails />




    <Navbar />

    <Routes>
      <Route path='/' element={<HomePage/>} />
      {/* <Route path='/explore' element={<ExplorePage />} /> */}
      <Route path='/about' element={<AboutPage />} />
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/booking' element={<BookPage />} />
      <Route path='/recommendations' element={<RecommendationsPage />} />
    </Routes>

    <Footer/>


    </>
  );
}

export default App;
