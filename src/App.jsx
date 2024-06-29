
import { Routes ,Route, Navigate } from 'react-router-dom'
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
import Explorer from './pages/ExplorerPage/Explorer'
import ExploreBlog from './pages/ExploreBlog/ExploreBlog'
import ExploreAbout from './pages/ExploreAbout/ExploreAbout'



function App() {
  return (
    <>

    <Navbar />

    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/explore/:section' element={<Explorer />} />
      <Route path='/about/:section' element={<ExploreAbout />} />
      <Route path='/blogs/:section' element={<ExploreBlog />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/booking' element={<BookPage />} />
      <Route path='/recommendations' element={<RecommendationsPage />} />
      <Route path='/*' element={<Navigate to={'/error'}/>} />
      <Route path='/error' element={'error'} />
    </Routes>

    <Footer/>


    </>
  );
}

export default App;
