
import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

import axios from "axios";

function Homestrategy() {
  const [strategy, setstrategy] = useState([])

  useEffect(() => {
    async function getAllstrategy() {
      try {
        const strategy = await axios.get("https://trading.work.gd/Strategie")
        console.log(strategy.data);
        setstrategy(strategy.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllstrategy()
  }, [])


  return (

    <>  
    
    {strategy === null ? (
            <Loader />
        ) : 
    <section className="section">
      <div className="container">
        <div className="text-center">
          <h2 className="text-white">Something You Need To Know</h2>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {strategy.slice(0, 5).map((item, i) => (
            <Link
              href={{
                pathname: '/[StrategyName]', query: {
                  strategyname: item.Strategy_name,
                  strategydescription: item.description,
                  visual1: item.visual1,
                  visual2: item.visual2,
                  visual3: item.visual3,
                  visual4: item.visual4
                }
              }}
              as={`/${item.Strategy_name.replace(/\s/g, '')}`}
              rel=''
            >
              <div
                className="feature-card rounded-xl p-5 pb-8 text-center"
                key={`feature-${i}`}
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
                  <p className="mt-3 text-white">{truncateDescription(item.description, 100)} Read more</p>
                </div>
              </div></Link>
          ))}

          <Link href="/Services/Strategy Trading/">
            <div
              className="mt-8 p-5 pb-8 text-center"
            >
              <Image
                className="mx-auto"
                src="/icons/more.svg"
                width={50}
                height={50}
                alt="Know More" />

              <div className="mt-4">
                <h5 className="text-white" ><b>More +</b></h5>
                <p className="mt-3 text-white">Click to know more about our Strategies</p>
              </div>
            </div>
          </Link>







        </div>
      </div>
    </section>}</>
  )
}


export default Homestrategy;
function truncateDescription(description, maxLength) {
  return description.length > maxLength ? `${description.slice(0, maxLength)}...` : description;
}