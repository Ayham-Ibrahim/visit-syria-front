import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import "./SearchBox.css"
function SearchBox() {
  const [search,setSearch] = useState('')
   const send = (event)=>{
    event.preventDefault(); 
    console.log(search)  
//axios

   }
  return (
    <div className='container-fluide'>
      {/* <div className='head-test'> */}
      <div className="search-box">
            <form action=""  onSubmit={()=>send(event)}>
                <input type="text" placeholder='اسم المؤسسة او المحافظة' name="" onChange={(event)=>setSearch(event.target.value)}/>
                <button>ابحث</button>
                <div className="seacrh-icon">
            <CiSearch />

            </div>
            </form>
           
        {/* </div> */}
      </div>
       
    </div>
  )
}

export default SearchBox