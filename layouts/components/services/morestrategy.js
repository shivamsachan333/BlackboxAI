
import Link from "next/link";
import Image from "next/image";
import { useState,useEffect } from "react";

import axios from "axios";
function Morestrategy(){

  const [strategy, setstrategy] = useState([])

  useEffect(()=>{
    async function getAllstrategy(){
      try{
        const strategy = await axios.get("https://trading.work.gd/Strategie")
        console.log(strategy.data);
        setstrategy(strategy.data)
      }catch(error){
console.log(error)
      }
    }
    getAllstrategy()
  },[])
    return (

        <>  
         {strategy === null ? (
            <Loader />
        ) : 
        <section className="section">
        <div className="container">
       
          <div className="text-center">

            <h2 className="text-white">Something You Need To Know</h2>
          </div> <Image
                    className="mx-auto"
                    src="/trading_related/main.svg"
                    width="600"
                    height="600"
                    alt="" />

<div className="strategycontent">
          <h3 className="text-white">
            Curious about what awaits you when you log in to the BlackBox.AI
            platform?
          </h3>

          <div className="contentsupport">
            <h5 className="text-white">
              🌐 Unparalleled Support and Resources for Active Options Trading.
            </h5>
          </div>
          <div className="contentbenifits text-white">
            Benefits:
            <ul>
              <li className="text-white">📊 Annualized Returns of 25-35%.</li>
              <li className="text-white">
                🚀 Maximized Growth Potential and Opportunities for Subscribers.
              </li>
              <li className="text-white">
                🤖 Minimal Human Error with BlackBox.AI Customized Trading
                Strategies.
              </li>
              <li className="text-white">
                🔗 Compatibility with Zerodha and Fyers (Broker Platforms) for
                Automating Trades.
              </li>
            </ul>
          </div>

          <div className="contentoptimisation">
            <h5 className="text-white">📈 Optimization of Growth Opportunities in Trading.</h5>
            <p className="text-white">
              Experience exponential profit growth, whether you're a budding
              entrepreneur looking to optimize your business or a novice eager
              to delve into the world of automated trading strategies.
              BlackBox.AI provides a winning trading solution that caters to
              both seasoned traders and those just starting on their trading
              journey.
            </p>
          </div>


          <div className="howtouse">

            <h5 className="text-white">How to Use ?</h5>
            <div className="createaccount">
       <p className="text-white">     Create an account: Begin your journey by creating an account on the platform.
	Log in daily: Stay connected by logging in once a day to check the seamless execution of trades.</p>

            </div>
            <div className="uponsub">
              <p className="text-white">Upon subscription, BlackBox.AI's powerful trading solutions and strategies take the reins, running your account without the need for constant human intervention. Explore the vast realm of options trading, fine-tune your strategies, and witness the growth of your portfolio with BlackBox.AI's cutting-edge technology.</p>
            </div>
          </div>
         

          <div className="mainsubheading">
            <h3 className="text-white"><strong>Empower your trading experience with BlackBox.AI – where innovation meets opportunity.</strong></h3>
          </div>


        </div>
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