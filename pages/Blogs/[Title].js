import Base from "../../layouts/Baseof";
import "swiper/swiper.min.css";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";

const Blogs = () => {
  const Loader = () => (
    <div className="loader">
      {/* Add your loader animation or message here */}
      Loading...
    </div>
  );
  const router = useRouter();
  const { Title } = router.query;
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    if (Title) {
      const formattedTitle = Title; // Replace %20 with space
      fetch(`https://trading.work.gd/Blogs/${formattedTitle}/`)
        .then(response => response.json())
        .then(data => {
          setBlogData(data);
        })
        .catch(error => {
          console.error('Error fetching blog data:', error);
        });
    }
  }, [Title]);
console.log(blogData)
  return (
   
    <Base>

{blogData === null ? (
            <Loader />
        ) : 
      <div>
       
          
      <div className='Blog_details' key={blogData.pk}>
      <div className="maintitles "><h3 className="text-white">{blogData.Title}</h3></div>
      <div className="tagsbutton">




        <div className="readmorebutton">
          {blogData.Tages.split(',').map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
            >
              {tag}
            </span>
          ))}
        </div>



      </div>
      <div dangerouslySetInnerHTML={{ __html: blogData.Description }} />
      <div className="tagsbutton">

        <div className="readmorebutton">
          {blogData.Tages.split(',').map((tag, index) => (
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
        
      </div>
}

    </Base>
  );
};




export default Blogs;

export async function getServerSideProps(context) {
  const { params } = context;
  const { Title } = params || {}; // Destructure with default value

  if (!Title) {
      return {
          notFound: true, // Handle the case when course_name is not available
      };
  }

  return {
      props: {
        Title,
      },
  };
}