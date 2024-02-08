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

    const [course_info, setCourseInfo] = useState(null); // Initialize with null

    useEffect(() => {
        const getCourseInfo = async () => {
            try {
                // Fetch course details from the API
                const response = await axios.get(`https://trading.work.gd/courses/${Course_name}/`);
                const data = response.data;
                // Set the fetched data in state
                setCourseInfo(data);
                // Cache the fetched data in localStorage
                cacheCourseInfo(Course_name, data);
            } catch (error) {
                console.error('Error fetching course details:', error);
            }
        };

        getCourseInfo();
    }, [Course_name]);

    // Function to cache course details in localStorage
    const cacheCourseInfo = (courseName, data) => {
        try {
            // Try to set the item in localStorage
            localStorage.setItem(`cachedCourse-${courseName}`, JSON.stringify(data));
        } catch (error) {
            console.error('Error caching course details:', error);
            // If storing data exceeds quota, clear old data and try again
            if (error instanceof DOMException && error.code === 22) {
                console.log('Storage quota exceeded. Clearing cache...');
                clearCacheAndRetry(courseName, data);
            }
        }
    };

    // Function to clear cache and retry caching
    const clearCacheAndRetry = (courseName, data) => {
        try {
            // Clear cache and retry caching
            localStorage.clear();
            localStorage.setItem(`cachedCourse-${courseName}`, JSON.stringify(data));
        } catch (error) {
            console.error('Error clearing cache and retrying caching:', error);
        }
    };




    console.log("course name is ")
    console.log("course name is ", course_info);
    const [formErrors, setFormErrors] = useState(null);

    const [successMessage, setSuccessMessage] = useState(null);
    const setFormDataField = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
            'course_name': course_info.course_name,
            'author_name': course_info.course_author,
            'payment_link':course_info.paytment_link
        });
    };
    function getCSRFTokenFromCookies() {
        const csrfCookie = document.cookie
            .split(';')
            .map(cookie => cookie.trim())
            .find(cookie => cookie.startsWith('csrftoken='));

        if (csrfCookie) {
            return csrfCookie.split('=')[1];
        }

        return null;
    }

    const [formData, setFormData] = useState({
        full_name: '',
        email_address: '',
        phone_number: '',
        city: '',
        years_of_trading_experience: '',


    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        const fieldName = e.target.name;  // Get the name attribute of the input field
        const fieldValue = e.target.value;


        setFormData({
            ...formData,
            [fieldName]: fieldValue,
        });
        try {
            console.log('This is form data -------------');
            console.log(formData);
            const response = await fetch('https://trading.work.gd/course_registerations/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCSRFTokenFromCookies(),
                },
                body: JSON.stringify(formData),


            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                // Reset form data if needed
                setFormData({
                    full_name: '',
                    email_address: '',
                    phone_number: '',
                    city: '',
                    years_of_trading_experience: '',
                });
                setSuccessMessage('Form submitted successfully');
                
                window.open(course_info.paytment_link, '_blank');

            } else {
                const responseData = await response.json();
                console.error('Form submission failed:', responseData);

                // Check if the response contains field-specific errors
                if (responseData.errors) {
                    // Update state to store the errors and display them in your form
                    setFormErrors(responseData.errors);
                }
            }
        } catch (error) {
            console.error('An error occurred while submitting the form:', error);
        }
    };

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
                <div className="text-center course_register" > <Image src='/course/course_reg.svg' className='text-center webinarregisterimg'
                    width={500}
                    height={500}
                /> </div>
                    <h5 className='text-white text-center mt-8 webinarregistertext'>Register For the "{course_info.course_name}"  </h5>

                <form className="max-w-md mx-auto webform mb-8" onSubmit={handleSubmit}>
                    {formErrors && (
                        <div className="text-red-500">
                            <ul>
                                {Object.entries(formErrors).map(([field, errors]) => (
                                    <li key={field}>{`${field}: ${errors.join(', ')}`}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {successMessage &&


<span class="badgeclass bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{successMessage}</span>
}
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">


                            <input type="text"
                                name="floating_first_name"
                                id="floating_first_name"
                                className="text-white block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                value={formData.full_name}
                                onChange={(e) => setFormDataField('full_name', e.target.value)}
                                placeholder=" "
                                required />
                            <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="floating_email" id="floating_email" className="text-white block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                value={formData.email_address}
                                onChange={(e) =>
                                    setFormDataField('email_address', e.target.value)
                                }
                                placeholder=" " required />
                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_phone" id="floating_phone" className="text-white block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                value={formData.phone_number}
                                onChange={(e) =>
                                    setFormDataField('phone_number', e.target.value)
                                }
                                placeholder="" required />
                            <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Whatsapp Number </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_company" id="floating_company" className="text-white block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

                                value={formData.city}
                                onChange={(e) =>
                                    setFormDataField('city', e.target.value)
                                }


                                placeholder=" " required />
                            <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                        </div>


                        <div className="relative z-0 w-full mb-5 group">
                            <input type="number" name="trading_experience" id="trading_experience" className="text-white block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                value={formData.years_of_trading_experience}
                                onChange={(e) =>
                                    setFormDataField('years_of_trading_experience', e.target.value)
                                }
                                placeholder=" " required />
                            <label for="trading_experience" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Years of trading experience</label>
                        </div>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                </form>

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
                                <div ><h5 className="text-white subtitles"> {program_details.subtitle}</h5></div>
                            }
                            title={
                                <div className="text-white">
                                    <h3 className="text-white module_text"> {program_details.title}</h3>
                                </div>
                            }


                        >
                            {<div className="coursesaccordaincontent">
                                <ul>
                                    {program_details.description && program_details.description.length > 0 && (
                                        <ul>
                                            {program_details.description.split("|").map((item, idx) => (
                                                <li key={idx}>● {item.trim()}</li>
                                            ))}
                                        </ul>
                                    )}


                                </ul>


                            </div>}
                        </AccordionItem>
                    ))}







                </Accordion></div>



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