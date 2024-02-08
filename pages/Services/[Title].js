
import axios from 'axios';
import React from "react";
import Base from "../../layouts/Baseof";
import "swiper/swiper.min.css";
import { useRouter } from 'next/router';
import Boxs from '../../layouts/components/boxs';
import { useEffect, useState } from "react";
import Morestrategy from '../../layouts/components/services/morestrategy';
const Loader = () => (
  <div className="loader">
    {/* Add your loader animation or message here */}
    Loading...
  </div>
);
const DynamicPage = () => {
  const router = useRouter();
  const { Title } = router.query;

  const [service, setService] = useState(null); // Initialize with null

  useEffect(() => {
    const getServiceDetails = async () => {
      try {
        // Fetch service details from the API
        const response = await axios.get(`https://trading.work.gd/whatweOffers/${Title}/`);
        const data = response.data;
        // Set the fetched data in state
        setService(data);
        // Cache the fetched data in localStorage
        cacheServiceDetails(Title, data);
      } catch (error) {
        console.error('Error fetching service details:', error);
      }
    };

    getServiceDetails();
  }, [Title]);

  // Function to cache service details in localStorage
  const cacheServiceDetails = (title, data) => {
    try {
      // Try to set the item in localStorage
      localStorage.setItem(`cachedService-${title}`, JSON.stringify(data));
    } catch (error) {
      console.error('Error caching service details:', error);
      // If storing data exceeds quota, clear old data and try again
      if (error instanceof DOMException && error.code === 22) {
        console.log('Storage quota exceeded. Clearing cache...');
        clearCacheAndRetry(title, data);
      }
    }
  };

  // Function to clear cache and retry caching
  const clearCacheAndRetry = (title, data) => {
    try {
      // Clear cache and retry caching
      localStorage.clear();
      localStorage.setItem(`cachedService-${title}`, JSON.stringify(data));
    } catch (error) {
      console.error('Error clearing cache and retrying caching:', error);
    }
  };

  return (
    <>
      {service === null ? (
        <Loader />
      ) : (
        service.Title === 'Education' ? (
          <Base>
            <Boxs />
            <section className="flex items-center xl:h-screen font-poppins belowaboutus">
              <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">

              </div>
            </section>
            <div className="contents_3rd">
              <div dangerouslySetInnerHTML={{ __html: service.long_description }} />
            </div>
          </Base>
        ) :
          service.Title === 'Strategy Trading' ?
            (
              <Base>
                <section className="flex items-center xl:h-screen font-poppins belowaboutus">
                  <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    {/* Your non-education-specific content goes here */}
                  </div>
                </section>
                <div className="contents_3rd">
                  <div dangerouslySetInnerHTML={{ __html: service.long_description }} />
                </div>

                <Morestrategy />
              </Base>
            ) :
            <Base>
              <section className="flex items-center xl:h-screen font-poppins belowaboutus">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">

                </div>
              </section>
              <div className="contents_3rd">
                <div dangerouslySetInnerHTML={{ __html: service.long_description }} />
              </div>

            </Base>
      )}
    </>
  );
};

export default DynamicPage;
