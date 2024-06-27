import { FaArrowDown, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Explore.css'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

function ExplorePage( { img, value, setValue, onClickBtn, options1, options2 = ['id', 'الاسم', 'المحافظة'], setFirstSelect, setSecondSelect, children } ) {
  const [showSelect, setShowSelect] = useState(0);

  return (
    <section className='explorer w-100'>
      <div className='explorer-hero w-100'>
        <div className='explorer-top-section w-100 position-relative z-0'>
          <img src={img} alt={'Hero wallpaper - descripe the section'} className='hero-img object-fit-cover w-100 h-100'/>
          <div className='search-filter position-absolute'>
            <span className='search-btn' onClick={onClickBtn}>ابحث</span>
            <input type='text' placeholder='اسم مؤسسة أو محافظة' value={value} onChange={setValue}/>
            <FaSearch className='search-icon'/>
          </div>
        </div>
        <div className='tabs'>
          <div className='tabs-container container mx-auto'>
            <Link to={'/explorer/hotels'}>الفنادق</Link>
            <Link to={'/explorer/resturants'}>المطاعم</Link>
            <Link to={'/explorer/landmarks'}>المعالم السياحية</Link>
            <div className='break'/>
            <div className={`position-relative select ${showSelect === 1 && 'active'}`}>
              <ul className={`list ${showSelect === 1 && 'active'}`}>{options1?.map((e, i) => <li key={i} onClick={() => setFirstSelect(e)}>{e}</li>)}</ul>
              <label onClick={() => setShowSelect(showSelect === 1? 0: 1)}>المحافظة
                <IoIosArrowDown/>
              </label>
            </div>
            <div className={`position-relative select ${showSelect === 2 && 'active'}`}>
              <ul className={`list ${showSelect === 2 && 'active'}`}>{options2.map((e, i) => <li key={i} onClick={() => setFirstSelect(e)}>{e}</li>)}</ul>
              <label onClick={() => setShowSelect(showSelect === 2? 0: 2)}>ترتيب حسب
                <IoIosArrowDown/>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='explorer-cards'>
        <div className='mobile-select'>
            <div className={`position-relative select mobile ${showSelect === 1 && 'active'}`}>
              <ul className={`list ${showSelect === 1 && 'active'}`}>{options1?.map((e, i) => <li key={i} onClick={() => setFirstSelect(e)}>{e}</li>)}</ul>
              <label onClick={() => setShowSelect(showSelect === 1? 0: 1)}>المحافظة
                <IoIosArrowDown/>
              </label>
            </div>
            <div className='break-mobile'/>
            <div className={`position-relative select mobile ${showSelect === 2 && 'active'}`}>
              <ul className={`list ${showSelect === 2 && 'active'}`}>{options2.map((e, i) => <li key={i} onClick={() => setFirstSelect(e)}>{e}</li>)}</ul>
              <label onClick={() => setShowSelect(showSelect === 2? 0: 2)}>ترتيب حسب
                <IoIosArrowDown/>
              </label>
            </div>
        </div>
        <div className='mx-auto explorer-cards-grid h-auto'>
          { children }
        </div>
      </div>
    </section>
  )
}

export default ExplorePage