
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

  const [service, setservice] = useState(null); // Initialize with null
  useEffect(() => {
    async function getsetservice() {
      try {
        const webi = await axios.get(`http://127.0.0.1:8000/whatweOffers/${Title}/`);
        setservice(webi.data);
      } catch (error) {
        console.log(error);
      }
    }
    getsetservice();
  }, [Title]);
  return (
    <>
     {service === null ? (
  <Loader />
) : (
  service.Title === 'Education' ? (
    <Base>
    <Boxs/>
      <section className="flex items-center xl:h-screen font-poppins belowaboutus">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        
        </div>
      </section>
      <div className="contents_3rd">
        <div dangerouslySetInnerHTML={{ __html: service.long_description }} />
      </div>
    </Base>
  ) :
  service.Title === 'Strategy Trading'?
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
      
      <Morestrategy/>
    </Base>
  ):
  <Base>
      <section className="flex items-center xl:h-screen font-poppins belowaboutus">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          {/* Your non-education-specific content goes here */}
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
