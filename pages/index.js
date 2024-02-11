
import Base from "../layouts/Baseof";
import Cta from "../layouts/components/Cta";
import Testimonial from "../layouts/components/Testimonial";
import Offering from '../layouts/components/offering';

import Link from "next/link";
import "swiper/swiper.min.css";
import Homestrategy from '../layouts/components/services/homestrategy';


import { useState,useEffect } from "react";

import axios from "axios";
import { createClient } from 'redis';

const client = createClient({
    password: 'xMcPNmYXZVsW9zuRC2wJ5h8pUBGFUtzS',
    socket: {
        host: 'redis-11972.c212.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 11972
    }
});

console.log("Cliend is ")
console.log(client)

const Home = () => {
  const [home_heading, sethome_heading] = useState([]);

  useEffect(() => {
    const getAllHeading = async () => {
      try {
        // Check if data is already cached in localStorage
        const cachedData = localStorage.getItem('homeHeading');

        if (cachedData) {
          // If cached data exists, parse and set it
          sethome_heading(JSON.parse(cachedData));
        } else {
          // If no cached data exists, fetch data from the API
          const response = await axios.get("https://trading.work.gd/home");
          const headingData = response.data;
          // Cache the fetched data in localStorage
          cacheHomeHeading(headingData);
          // Set the data in state
          sethome_heading(headingData);
        }
      } catch (error) {
        console.error('Error fetching home heading:', error);
      }
    };

    getAllHeading();
  }, []);

  // Function to cache home heading in localStorage
  const cacheHomeHeading = (data) => {
    try {
      // Try to set the item in localStorage
      localStorage.setItem('homeHeading', JSON.stringify(data));
    } catch (error) {
      console.error('Error caching home heading:', error);
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
      localStorage.setItem('homeHeading', JSON.stringify(data));
    } catch (error) {
      console.error('Error clearing cache and retrying caching:', error);
    }
  };



  return (
    <><Base>

{home_heading === null ? (
            <Loader />
        ) : 
      <section className="section pb-[50px] main_heading" >
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold">
                {home_heading.map((heading)=>{
                  return (
                   
heading.Heading
                  )
                })}
                </h1>
    
              <Link
                className="btn btn-primary mt-4"
                href="/Services"
                rel=''
              >
                Get Started
              </Link>

            
                <div>

                  
                </div>
            </div>
          </div>
        </div>
      </section>
}

<Homestrategy />
  
  
          
        
      


      <Offering />
      <Testimonial />
      <Cta />

    </Base></>
  );
};



export default Home;
