
import {
  IoCall,
  IoLocation,
} from "react-icons/io5";


import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillInstagram,

} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Script from "next/script";

import Link from 'next/link';


import { useState, useEffect } from "react";

import axios from "axios";



const Footer = () => {


  const [social_media, setsocial_media] = useState([])

  useEffect(() => {
    async function getAllSocial() {
      try {
        const social = await axios.get("https://trading.work.gd/socialMedias");
        setsocial_media(social.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllSocial()
  }, [])


  return (

    <><div className="footerclass">
      <hr />
      <footer className="relative bg-blueGray-200 pt-8 pb-6 footerclass">
        <div className="container mx-auto px-4 footer_res">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-white text-3xl fonat-semibold h2color">
                Let's keep in touch!
              </h4>
              <h5 className="text-white text-lg mt-0 mb-2 subheadingfooter">
                We respond within 2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                {
                  social_media.map((data, i) => (
                    <button
                      key={i}
                      className="bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >

                      {data.name === "Facebook" ? (
                        <Link href={data.Link} className="social-icons facebook"   target="__blank">
                          <AiFillFacebook />
                        </Link>
                      ) : data.name === "X" ? (
                        <Link href={data.Link} className="social-icons twitter"   target="__blank">
                          <FaXTwitter />
                        </Link>
                      ) :
                      
                       data.name === "Linkedin" ? (
                        <Link href={data.Link} className="social-icons linkedin"   target="__blank">
                     
                    <AiFillLinkedin />
                        </Link>
                      ) :
                      data.name === "Youtube" ? (
                        <Link href={data.Link} className="social-icons youtube"   target="__blank">
                       
                          <AiFillYoutube />
                        </Link>
                      ) :
                      data.name === "Instagram" ? (
                        <Link href={data.Link} className="social-icons instagram"   target="__blank">
                        
                    <AiFillInstagram />
                        </Link>
                      ) :
                      
                      (
                       console.log("Nothing in social media")
                      )}
                    </button>
                  ))
                }

              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto useful_links">
                  <span className="text-white block uppercase text-blueGray-500 text-sm font-semibold mb-2 h2color">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/Services"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://platform.blackbox-ai.org/"
                      >
                        Login/Signup
                      </Link>
                    </li>


                    <li>
                      <Link

                        href="/contact"
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        Contact
                      </Link>
                    </li>

                    {/* <li>
                      <Link

                        href="/career"
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                      Career
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mt-5">
            <div className="w-full px-4 mx-auto text-center">


              <div className="text-white text-sm text-blueGray-500 font-semibold py-1 contactinfo">
                <h4 className="text-white text-3xl fonat-semibold h2color">
                  Office
                </h4><div className="address contactdetailsdiv"> <h3 className="text-white">

                  <li className="inline-block">
                    <a
                      aria-label="location"
                      href=""
                      target="_blank" className="telephone"
                      rel="noopener noreferrer nofollow"
                    > <p> <IoLocation />  Office No-09, B-69 Sector-2, Noida Distt. G.B. Nagar (U.P.) 201301</p>

                    </a>
                  </li>

                </h3></div>
                <div className="contactdetails contactdetailsdiv"><h3 className="text-white">


                  <li className="inline-block">
                    <a aria-label="telephone" href="" className="telephone">
                      <p>  <IoCall /> +91 9625165135</p>
                    </a>
                  </li></h3></div>

              </div>
              <hr className="my-6 border-blueGray-300" />
              <div className="text-white text-sm text-blueGray-500 font-semibold py-1">Copyright © <span id="get-current-year">2024</span> Shensu AI Technologies Pvt Ltd. All rights reserved.
              </div>

            </div>
          </div>
        </div>
      </footer>
    </div><Script src="https://kit.fontawesome.com/a076d05399.js" /></>
  )
}

export default Footer;
