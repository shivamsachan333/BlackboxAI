
import React, { useState, useEffect } from 'react';
import Base from "../../layouts/Baseof";
import "swiper/swiper.min.css";
import Link from "next/link";

import Image from "next/image";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Attempt to retrieve cached data from localStorage
        const cachedData = localStorage.getItem('cachedServices');

        if (cachedData) {
          // If cached data exists, parse and set it
          setServices(JSON.parse(cachedData));
        } else {
          // If no cached data exists, fetch data from the API
          const response = await fetch('https://trading.work.gd/whatweOffers');
          const data = await response.json();
          // Set the fetched data in state
          setServices(data);
          // Cache the fetched data in localStorage
          cacheData('cachedServices', data);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  // Function to cache data in localStorage
  const cacheData = (key, data) => {
    try {
      // Try to set the item in localStorage
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error caching data:', error);
      // If storing data exceeds quota, clear old data and try again
      if (error instanceof DOMException && error.code === 22) {
        console.log('Storage quota exceeded. Clearing cache...');
        clearCacheAndRetry(key, data);
      }
    }
  };

  // Function to clear cache and retry caching
  const clearCacheAndRetry = (key, data) => {
    try {
      // Clear cache and retry caching
      localStorage.clear();
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error clearing cache and retrying caching:', error);
    }
  };
  console.log(services)
  return (

    <Base>
      {services === null ? (
        <Loader />
      ) :
        <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
          <div className="container mx-auto cardsstart">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                  <span className="mb-2 block text-lg font-semibold text-primary">
                    Our Services
                  </span>
                  <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                    What We Offer
                  </h2>
                  <p className="text-base text-body-color dark:text-dark-6">
                    There are many variations of passages of Lorem Ipsum available
                    but the majority have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>

            <div className="-mx-4 flex flex-wrap servicesblocks" >
              {services.slice(0, 1).map((item, i) => (
                <ServiceCard
                  title={item.Title}
                  key={item.Title}
                  href={{
                    pathname: '/Services/[Title]',
                    query: {
                      Title: item.Title,
                    },
                  }}

                  as={`/Services/${item.Title}`}


                  details={item.description}
                  icon={
                    <Image className="mx-auto" src={item.Image} width="100" height="100" alt="Strategy Trading" />
                  }
                />
              ))}
              {services.slice(1, 2).map((item, i) => (
                <ServiceCard
                  title={item.Title}
                  key={item.Title}
                  href={{
                    pathname: '/Services/[Title]',
                    query: {
                      Title: item.Title,
                    },
                  }}

                  as={`/Services/${item.Title}`}
                  details={item.description}
                  icon={

                    <Image className="mx-auto" src={item.Image} width="100" height="100" alt="Strategy Trading" />

                  }
                />
              ))}

              {services.slice(2, 3).map((item, i) => (
                <ServiceCard
                  title={item.Title}
                  key={item.Title}

                  href={{
                    pathname: '/Services/[Title]',
                    query: {
                      Title: item.Title,
                    },
                  }}

                  as={`/Services/${item.Title}`}

                  details={item.description}
                  icon={

                    <Image className="mx-auto" src={item.Image} width="100" height="100" alt="Strategy Trading" />

                  }
                />
              ))}

            </div>
          </div>
        </section>}
    </Base>

  );
};

export default Services;

const ServiceCard = ({ icon, title, details, href, key }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3 servicecard">

        <Link href={href}>
          <div className="mb-9 rounded-[20px] p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">

            <div className="mb-8 flex h-[60px] w-[60px] items-center justify-center rounded-2xl">
              {icon}
            </div>
            <h4 className="mb-[14px] text-2xl font-semibold text-dark text-white">
              {title}
            </h4>
            <p className="text-body-color dark:text-dark-6">{details}</p>
          </div>


        </Link>
      </div>
    </>
  );
};
