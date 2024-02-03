
import Base from "../layouts/Baseof";
import Cta from "../layouts/components/Cta";
import Testimonial from "../layouts/components/Testimonial";
import Offering from '../layouts/components/offering';

import Link from "next/link";
import "swiper/swiper.min.css";
import Homestrategy from '../layouts/components/services/homestrategy';


import { useState,useEffect } from "react";

import axios from "axios";



const Home = () => {
  
  const [home_heading, sethome_heading] = useState([])

  useEffect(()=>{
    async function getAllHeading(){
      try{
        const heading = await axios.get("https://trading.work.gd/home")
        console.log(heading.data);
        sethome_heading(heading.data)
      }catch(error){
console.log(error)
      }
    }
    getAllHeading()
  },[])


  return (
    <><Base>


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


      <Homestrategy />
  
  
          
        
      


      <Offering />
      <Testimonial />
      <Cta />

    </Base></>
  );
};



export default Home;
