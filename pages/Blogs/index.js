
import React, { useState, useEffect } from 'react';

import axios from "axios";
import Base from "../../layouts/Baseof";
import "swiper/swiper.min.css";
import Link from "next/link";
import Image from "next/image";
const Blogs = () => {
  const imgStyle = {
    width: '59%',
    marginBottom: '5%',
    border: 'none',
    borderRadius: 'none'
  };
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Check if data is already cached in localStorage
        const cachedData = localStorage.getItem('cachedBlogs');

        if (cachedData) {
          // If cached data exists, parse and set it
          setBlogs(JSON.parse(cachedData));
        } else {
          // If no cached data exists, fetch data from the API
          const response = await axios.get('https://trading.work.gd/Blogs');
          const blogsData = response.data;
          // Cache the fetched data in localStorage
          cacheBlogs(blogsData);
          // Set the data in state
          setBlogs(blogsData);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Function to cache blogs in localStorage
  const cacheBlogs = (data) => {
    try {
      // Try to set the item in localStorage
      localStorage.setItem('cachedBlogs', JSON.stringify(data));
    } catch (error) {
      console.error('Error caching blogs:', error);
      // If storing data exceeds quota, clear old data and try again
      if (error instanceof DOMException && error.code === 22) {
        console.log('Storage quota exceeded. Clearing cache...');
        clearCacheAndRetry(data);
      }
    }
  };

  // Function to clear cache and retry caching
  const clearCacheAndRetry = (data) => {
    try {
      // Clear cache and retry caching
      localStorage.clear();
      localStorage.setItem('cachedBlogs', JSON.stringify(data));
    } catch (error) {
      console.error('Error clearing cache and retrying caching:', error);
    }
  };

  return (
    <Base>

      {blogs === null ? (
        <Loader />
      ) :
        <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
          <div className="container mx-auto cardsstart">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                  <span className="mb-2 block text-lg font-semibold text-primary">
                    Blogs
                  </span>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Keep Updated Yourself
                  </p>
                </div>
              </div>
            </div>

            <div className="-mx-4 flex flex-wrap servicesblocks" >
              {blogs.map((blog) => (
                <ServiceCard
                  key={blog.id}  // Make sure to add a unique key for each item
                  title={blog.Title}
                  href_url={`/Blogs/${blog.Title}`}
                  details={blog.short_note}
                  posted_on={blog.posted_on}
                  icon={
                    <Image style={imgStyle} className="mx-auto" src={blog.Blog_image} width="50" height="50" alt="Strategy Trading" />
                  }
                />
              ))}
            </div>
          </div>
        </section>}
    </Base>

  );
};

export default Blogs;


const ServiceCard = ({ icon, title, details, posted_on, href_url }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3 servicecardweb">
        <Link href={href_url} >
          <div className="mb-1 rounded-[20px] p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
            <div className="imgcalss">{icon}</div>
            <div className="badgeclassposted">
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                <b>Posted on {posted_on}</b>
              </span>
            </div>
            <h4 className="mb-[14px] text-2xl font-semibold text-dark text-white">
              {title}
            </h4>
            <p className="text-body-color dark:text-dark-6">{details}</p>
            <div className="readmorebutton">
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                Read More
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};