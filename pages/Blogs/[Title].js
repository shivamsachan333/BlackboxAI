import Base from "../../layouts/Baseof";
import "swiper/swiper.min.css";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";

const Blogs = () => {
  const router = useRouter();
  const { Title } = router.query;
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getsetblogs() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/Blogs/${Title}/`);
        const data = JSON.parse(response.data); // Parse the JSON string
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    }
    getsetblogs();
  }, [Title]);

  return (
   
    <Base>

{blogs === null ? (
            <Loader />
        ) : 
      <div>
        {Array.isArray(blogs) && blogs.map(blog => (
          
      <div className='Blog_details' key={blog.pk}>
      <div className="maintitles "><h3 className="text-white">{blog.fields.Title}</h3></div>
      <div className="tagsbutton">




        <div className="readmorebutton">
          {blog.fields.Tages.split(',').map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
            >
              {tag}
            </span>
          ))}
        </div>



      </div>
      <div dangerouslySetInnerHTML={{ __html: blog.fields.Description }} />
      <div className="tagsbutton">

        <div className="readmorebutton">
          {blog.fields.Tages.split(',').map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
        ))}
      </div>
}

    </Base>
  );
};

export default Blogs;