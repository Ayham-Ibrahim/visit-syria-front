import React, {  useState } from 'react'
import './BlogPage.css'
import Hero from '../../components/Hero/Hero'
import BlogCard from '../../components/BlogCard/BlogCard'
import Pagination from '../../components/Pagination/Pagination';
function BlogPage() {

  // this list will be replaced by actual data from API, 
  let list =
    [
      "الطبيعية",
      "الأثرية",
      "الثقافية"
    ];

  // this data will be replaced by actual data from API, 
  let data = [
    {
      id: 1,
      title: "مدرج بصرى",
      location: "درعا",
      brief: "مدرجة بصرى هي مدرج روماني يقع في مدينة بصرى السورية، وهي واحدة من أروع المدرجات الرومانية في العالم. تم بناء المدرج في القرن الأول الميلادي، ويتسع لـ 25 ألف متفرج",
      image: 'src/assets/images/blog4.jpg',
    },
    {
      id: 2,
      title: "مدرج بصرى",
      location: "درعا",
      brief: "مدرجة بصرى هي مدرج روماني يقع في مدينة بصرى السورية، وهي واحدة من أروع المدرجات الرومانية في العالم. تم بناء المدرج في القرن الأول الميلادي، ويتسع لـ 25 ألف متفرج",
      image: 'src/assets/images/blog4.jpg',
    },
    {
      id: 3,
      title: "مدرج بصرى",
      location: "درعا",
      brief: "مدرجة بصرى هي مدرج روماني يقع في مدينة بصرى السورية، وهي واحدة من أروع المدرجات الرومانية في العالم. تم بناء المدرج في القرن الأول الميلادي، ويتسع لـ 25 ألف متفرج",
      image: 'src/assets/images/blog4.jpg',
    },
    {
      id: 4,
      title: "مدرج بصرى",
      location: "درعا",
      brief: "مدرجة بصرى هي مدرج روماني يقع في مدينة بصرى السورية، وهي واحدة من أروع المدرجات الرومانية في العالم. تم بناء المدرج في القرن الأول الميلادي، ويتسع لـ 25 ألف متفرج",
      image: 'src/assets/images/blog4.jpg',
    },
    {
      id: 5,
      title: "مدرج بصرى",
      location: "درعا",
      brief: "مدرجة بصرى هي مدرج روماني يقع في مدينة بصرى السورية، وهي واحدة من أروع المدرجات الرومانية في العالم. تم بناء المدرج في القرن الأول الميلادي، ويتسع لـ 25 ألف متفرج",
      image: 'src/assets/images/blog4.jpg',
    }
  ]

  const [blogs, setBlogs] = useState(data);
  const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = (itemIndex) => {
    setActiveItem(itemIndex);
  };

  const handlePageChange = (page) => {
//TO DO: the implementation of this function 
    console.log("Page changed to:", page);
  };

  return (
    <div className='BY_BlogPage'>
      <Hero backgroundImage='src/assets/images/blogCover.jpg' />
      <div className='BY_container'>
        <div className='taps'>
          <ul>
            {list.map((item, index) => (
              <li key={index}
                className={activeItem === index ? 'active' : ''}
                onClick={() => handleItemClick(index)}>
                {item}</li>
            ))}
          </ul>


        </div>
        <div className='content_container'>
          {blogs.map((item) => (
            <div className='blog_conatiner' key={item.id}>
              <BlogCard
                title={item.title}
                location={item.location}
                brief={item.brief}
                image={item.image}
                button={<button>bushra</button>}
              />
            </div>
          ))}
          <div className='pagination_section'>
            <Pagination pageCount={5} currentPage={2} handlePageChange={handlePageChange} />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default BlogPage