
// import React from 'react'
// import Navbar from '../../layout/Navbar/Navbar'


import React from 'react'
import ExplorePage from '../../shared/ExplorePage/ExplorePage'
// import Navbar from '../../layout/Navbar/Navbar'
import img from '../../assets/images/Rectangle 140.png'
import PhotoSlider from '../../shared/PhotoSlider/PhotoSlider'
import Img1 from '../../assets/images/Rectangle 34624415.png'
import Img2 from '../../assets/images/Rectangle 34624418.png'
import Img3 from '../../assets/images/Rectangle 34624419.png'
import Img4 from '../../assets/images/Rectangle 34624420.png'

function HomePage() {
  const array = [Img1, Img2, Img3, Img4, Img1, Img2, Img3];
  return (
    <div className='bg-white'>
      <ExplorePage img={img}>
        <PhotoSlider imgs={array}/>
      </ExplorePage>
    </div>
  )

}

export default HomePage;
