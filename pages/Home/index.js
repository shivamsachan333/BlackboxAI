
import Base from "../../layouts/Baseof";

import Link from "next/link";
import "swiper/swiper.min.css";



import Image from "next/image";

import { useEffect, useState } from "react";

const Home = ({ frontmatter }) => {
    const [formErrors, setFormErrors] = useState(null);

  
    const [successMessage, setSuccessMessage] = useState(null);
    const setFormDataField = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
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
        first_name: '',
        last_name: '',
        email_address: '',
        whatsapp_number: '',
        years_of_trading_experience: '',
        outside_india: false,

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
         
            const response = await fetch('https://trading.work.gd/lead/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCSRFTokenFromCookies(),
                },
                body: JSON.stringify(formData),


            });

            if (response.ok) {
                setFormData({
                    first_name: '',
                    last_name: '',
                    email_address: '',
                    whatsapp_number: '',
                    years_of_trading_experience: '',
                    outside_india: false,
                });
                setSuccessMessage('Form submitted successfully');

            } else {
                const responseData = await response.json();
                console.error('Form submission failed:', responseData);

                if (responseData.errors) {
                    setFormErrors(responseData.errors);
                }
            }
        } catch (error) {
            console.error('An error occurred while submitting the form:', error);
        }
    };

    return (
        <>
            <Base>


                <section className="section pb-[50px] mainpage2" >
                    <div className="container">
                        <Link href='/' className="mainpage2img">
                            <div className="mainpage2div"><Image src="/images/logo.svg" width={100} height={100} /></div>
                        </Link>
                        {successMessage && 
                
                
                <span class="badgeclass bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{successMessage}</span>
                }
                        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                            {formErrors && (
                                <div className="text-red-500">
                                    <ul>
                                        {Object.entries(formErrors).map(([field, errors]) => (
                                            <li key={field}>{`${field}: ${errors.join(', ')}`}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className="mb-5">
                                <label for="first_name" className="text-white block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name"
                                    value={formData.first_name}
                                    onChange={(e) => setFormDataField('first_name', e.target.value)}

                                    required />
                            </div>



                            <div className="mb-5">
                                <label for="last_name" className="text-white block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name"

                                    value={formData.last_name}
                                    onChange={(e) => setFormDataField('last_name', e.target.value)}
                                    required />
                            </div>

                            <div className="mb-5">
                                <label for="Email" className="text-white block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@gmail.com"

                                    value={formData.email_address}
                                    onChange={(e) => setFormDataField('email_address', e.target.value)}
                                    required />
                            </div>


                            <div className="mb-5">
                                <label for="years_of_trading_experience" className="text-white block mb-2 text-sm font-medium text-gray-900 dark:text-white">Years of trading experience</label>
                                <input type="number" id="whatsapp_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Years of trading experience"

                                    value={formData.years_of_trading_experience}
                                    onChange={(e) => setFormDataField('years_of_trading_experience', e.target.value)}
                                    required />
                            </div>

                            <div className="mb-5">
                                <label for="whatsapp_number" className="text-white block mb-2 text-sm font-medium text-gray-900 dark:text-white">Whatsapp number</label>
                                <input type="text" id="whatsapp_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Whatsapp Number"

                                    value={formData.whatsapp_number}
                                    onChange={(e) => setFormDataField('whatsapp_number', e.target.value)}
                                    required />
                            </div>



                            <div className="flex items-start mb-5">
                                <div className="flex items-center h-5">
                                    <input
                                        id="outside_india"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                        checked={formData.outside_india}
                                        onChange={(e) => setFormDataField('outside_india', e.target.checked)}
                                    />
                                </div>
                                <label for="outside_indis" className="text-white ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I am outside India</label>
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                    </div>
                </section>

            </Base>
        </>
    );
};



export default Home;
