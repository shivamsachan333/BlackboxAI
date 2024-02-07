import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { Image } from "@nextui-org/react";



import axios from 'axios';
import Base from "../../layouts/Baseof";
import "swiper/swiper.min.css";
import { useRouter } from 'next/router';

import { useEffect, useState } from "react";
import Link from "next/link";
import Loaders from '../../layouts/components/loader';
const DynamicPage = ({ course }) => {

    const router = useRouter();
    const { Course_name } = router.query;

    const [course_info, setcourse_info] = useState(null); // Initialize with null
    useEffect(() => {
        async function getsetcourse_info() {
            try {
                const webi = await axios.get(`https://trading.work.gd/courses/${Course_name}/`);
                setcourse_info(webi.data);
            } catch (error) {
                console.log(error);
            }
        }
        getsetcourse_info();
    }, [Course_name]);
    console.log("course name is ")
    console.log("course name is ", course_info);
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (<>
        {course_info === null ? (
            <Loaders />
        ) : <Base>
            <div className="instructor_information_image">
                <div className="instructor-image">
                    <Image
                        width={500}
                        alt={course_info.course_name}
                        src={course_info.course_poster}
                    />
                </div>
                <div className="flex flex-wrap gap-4 items-center btnclassreg paymentbtn">


                    <div className="">
                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"><strong> <b>₹</b></strong> {course_info.course_price} +GST(18%)</span>
                    </div>
                </div>

                <div className="course_name">
                    <h4 className="text-white text-center">{course_info.course_name}</h4>
                </div>
                <div className="whatsappcommunitybutton">

                    <Link href={course_info.whatsapp_link} target='__blank'> <button type="button" className="whatsappbuttoncolor text-white bg-[#3b5998] focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                        <svg className="w-6 h-6 text-gray-800 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z" />
                        </svg>
                        Join Whatsapp Community <br />
                    {course_info.whatsapp_number}
                    </button></Link>

                </div>

                <div className="learnurls">
                    <ul>
                        {course_info.lists.map((list, index) => (


                            <li key={index}>
                                <h5 className="text-white"> &#9989; {list.title}</h5>
                            </li>
                        ))}


                    </ul>
                </div>


            </div>
            <div className="courses mb-8">
                <h3 className="text-white mb-8 mt-8">About Company</h3>

                <p className="mb-8"> {course_info.about_company}</p>


            </div>
            <div className="courses mb-8">
                <h3 className="text-white mb-8 mt-8">About Trainer</h3>

                <p className="mb-8">{course_info.about_instructor}</p>


            </div>
            <div className="courses">
                <h3 className="text-white mb-8 mt-8">PROGRAMME DETAILS</h3>
                <div className="accordainclass"><Accordion selectionMode="multiple">

                    {course_info.program_details.map((program_details, index) => (


                        <AccordionItem
                            key={index}
                            aria-label="Janelle Lenard"
                            startContent={
                                <div className="modulesnames">
                                    <h3 className="text-white">Module </h3>
                                    <h2 className="text-white">{index + 1}</h2>
                                </div>
                            }
                            subtitle={
                                <div className="text-white"><h5 className="text-white"> {program_details.subtitle}</h5></div>
                            }
                            title={
                                <div className="text-white">
                                    <h3 className="text-white"> {program_details.title}</h3>
                                </div>
                            }


                        >
                            {<div className="coursesaccordaincontent">
                                <ul>
                                    {program_details.description.split("|").map((item, idx) => (
                                        <li key={idx}> ● {item.trim()}</li>
                                    ))}


                                </ul>


                            </div>}
                        </AccordionItem>
                    ))}







                </Accordion></div>



            </div>

            <div className="courses">
                <h5 className="text-white mt-5 mb-5 faqsquestion">Course Structure</h5>
                <div className="accordainclass">
                    <Accordion variant="bordered">


                        {course_info.course_structures.map((course_structures, ind) => (
                            <AccordionItem key={ind} aria-label={course_structures.title} title={
                                <div>
                                    <p className="text-white">{course_structures.title}</p>
                                </div>
                            }>

                                {course_structures.description.split("|").map((item, idx) => (
                                    <li key={idx}> {item.trim()}</li>
                                ))}

                            </AccordionItem>
                        ))}


                    </Accordion>
                </div>
            </div>


            <div className="courses mt-5 mb-5">
                <h5 className="text-white mt-5 mb-5 faqsquestion">Frequently Asked Questions</h5>
                <div className="accordainclass mb-5">
                    <Accordion variant="bordered">





                        {course_info.faqs.map((faqs, ind) => (
                            <AccordionItem key={ind} aria-label={faqs.title} title={
                                <div>
                                    <p className="text-white">{faqs.title}</p>
                                </div>
                            }>

                                {faqs.description.split("|").map((item, idx) => (
                                    <li key={idx}> {item.trim()}</li>
                                ))}

                            </AccordionItem>
                        ))}




                    </Accordion>
                </div>
            </div>








        </Base >}</>

    );
}



export default DynamicPage;
export async function getServerSideProps(context) {
    const { params } = context;
    const { Course_name } = params || {}; // Destructure with default value

    if (!Course_name) {
        return {
            notFound: true, // Handle the case when course_name is not available
        };
    }

    return {
        props: {
            Course_name,
        },
    };
}