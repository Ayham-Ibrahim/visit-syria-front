import { Routes ,Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import ExplorePage from './pages/ExplorePage/ExplorePage'
import AboutPage from './pages/AboutPage/AboutPage'
import BlogPage from './pages/BlogPage/BlogPage'
import BookPage from './pages/BookPage/BookPage'
import Navbar from './layout/Navbar/Navbar'
import Sidebar from './layout/Sidebar/Sidebar'
import RecommendationsPage from './pages/RecommendationsPage/RecommendationsPage'
function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/explore' element={<ExplorePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/booking' element={<BookPage />} />
      <Route path='/recommendations' element={<RecommendationsPage />} />
    </Routes>
    </>
  )
}

export default App
