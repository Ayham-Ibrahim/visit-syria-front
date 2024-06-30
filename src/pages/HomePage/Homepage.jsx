import React from 'react'
// import Navbar from '../../layout/Navbar/Navbar'
import img from '../../assets/images/Rectangle 140.png'
import PhotoSlider from '../../shared/PhotoSlider/PhotoSlider'
import Img1 from '../../assets/images/Rectangle 34624415.png'
import Img2 from '../../assets/images/Rectangle 34624418.png'
import Img3 from '../../assets/images/Rectangle 34624419.png'
import Img4 from '../../assets/images/Rectangle 34624420.png'
import BookPage from '../BookPage/BookPage'

function HomePage() {
  const array = [Img1, Img2, Img3, Img4, Img1, Img2, Img3];
  return (
    <div className='bg-white'>
      <BookPage/>
    </div>
  )
}

export default HomePage