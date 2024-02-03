import Base from "../../layouts/Baseof";
import "swiper/swiper.min.css";

import React, { useState, useEffect } from 'react';

import axios from "axios";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://trading.work.gd/Blogs');
        // const data = await response.json();
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <Base>
      <div>

        {blogs.map((blog) => (
          <>

            <div className='Blog_details'>
              <div className="maintitles "><h3 className="text-white">{blog.Title}</h3></div>
              <div className="tagsbutton">




                <div className="readmorebutton">
                  {blog.Tages.split(',').map((tag, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>



              </div>
              <div dangerouslySetInnerHTML={{ __html: blog.Description }} />
              <div className="tagsbutton">

                <div className="readmorebutton">
                  {blog.Tages.split(',').map((tag, index) => (
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
          </>
        ))}

      </div>
    </Base>
  );
};

export default Blogs;