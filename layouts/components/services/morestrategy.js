
import Link from "next/link";
import Image from "next/image";
import { useState,useEffect } from "react";

import axios from "axios";
function Morestrategy(){

  const [strategy, setStrategy] = useState([]);

  useEffect(() => {
      const getAllStrategy = async () => {
          try {
              // Check if data is already cached in localStorage
              const cachedData = localStorage.getItem('cachedStrategy');

              if (cachedData) {
                  // If cached data exists, parse and set it
                  setStrategy(JSON.parse(cachedData));
              } else {
                  // If no cached data exists, fetch data from the API
                  const response = await axios.get("https://trading.work.gd/Strategie");
                  const strategyData = response.data;
                  // Cache the fetched data in localStorage
                  cacheStrategy(strategyData);
                  // Set the data in state
                  setStrategy(strategyData);
              }
          } catch (error) {
              console.error('Error fetching strategy:', error);
          }
      };

      getAllStrategy();
  }, []);

  // Function to cache strategy in localStorage
  const cacheStrategy = (data) => {
      try {
          // Try to set the item in localStorage
          localStorage.setItem('cachedStrategy', JSON.stringify(data));
      } catch (error) {
          console.error('Error caching strategy:', error);
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
          localStorage.setItem('cachedStrategy', JSON.stringify(data));
      } catch (error) {
          console.error('Error clearing cache and retrying caching:', error);
      }
  };
    return (

        <>  
         {strategy === null ? (
            <Loader />
        ) : 
        <section className="section">
        <div className="container">
       
    


          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {strategy.map((item, i) => (
             <Link 
             href={{ pathname: '/[StrategyName]', query: { 
              strategyname: item.Strategy_name,
              strategydescription: item.description,
              visual1: item.visual1,
              visual2: item.visual2,
              visual3: item.visual3,
              visual4: item.visual4
            }}}
            as={`/${item.Strategy_name.replace(/\s/g, '')}`}
            rel=''
          >
             <div
                className="feature-card rounded-xl p-5 pb-8 text-center"
                key={`feature-${i}` }
              >
                {item.IconsImage && (
                  <Image
                    className="mx-auto"
                    src={item.IconsImage}
                    width={50}
                    height={50}
                    alt="" />
                )}
                <div className="mt-4">
                  <h5 className="text-white" ><b>{item.Strategy_name}</b></h5>
                  <p className="mt-3 text-white">{item.description} Read more</p>
                </div>
              </div></Link>
            ))}
          </div>
        </div>
      </section>}</>
    )
}


export default Morestrategy;