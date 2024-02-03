import React from "react";
import Base from "../../layouts/Baseof";
import "swiper/swiper.min.css";
import Link from "next/link";
import { useRouter } from 'next/router';

import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Image from "next/image";
const WebinerDetailPage = () => {
    const router = useRouter();
    const { title,
        webiniar_name, short_desc, long_desc,
        image,
        catrgory,
        price,
        Webiniar_time,
        Webiniar_date,
        author_name, about_author,
        learn1, learn2, learn3, learn4, learn5, what_you_learn_desc, for1, for_desc

    } = router.query;
    useEffect(() => {

    }, [title,
        webiniar_name, short_desc, long_desc,
        image,
        catrgory,
        price,
        Webiniar_time,
        Webiniar_date,
        author_name, about_author,
        learn1, learn2, learn3, learn4, learn5, what_you_learn_desc, for1, for_desc

    ]);

    const [selectedItem, setSelectedItem] = useState("Overview");

    // Sample list items
    const listItems = ['Overview', 'Instructor', 'Help'];

    // Function to handle item click
    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const renderContent = () => {
        switch (selectedItem) {
            case "Overview":
                return <section>
                    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
                        <div className="container mx-auto cardsstart">


                            <div className="flex flex-wrap Webiniarblocks" >
                                <h3 className="text-white">
                                    What you will learn in this master class:
                                </h3>
                                <ul className="learnclass">

                                    <li> 1. {learn1}
                                    </li>
                                    <li>2. {learn2}</li>
                                    <li>


                                        3. {learn3}
                                    </li>


                                    <li>

                                        4. {learn4} </li>


                                    <li>
                                        5. {learn5}</li>


                                </ul>


                                <p>{what_you_learn_desc}</p>
                            </div>
                        </div>
                    </section>;
                    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] secondcontent">
                        <div className="container mx-auto cardsstart">


                            <div className="flex flex-wrap Webiniarblocks" >
                                <h3 className="text-white">Who is this Masterclass for:
                                </h3>
                                <ul className="learnclass">

                                    <li>{for1}
                                    </li>


                                </ul>


                                <p>{for_desc}</p>

                                <ul className="classfor mt-5">
                                    <li>
                                        <div className="forboxs">
                                            <Image src='/webiniar/graduates.svg'
                                                width={100}
                                                height={100}
                                            />
                                            <h4 className="text-white">
                                                Students</h4>                  </div>
                                    </li>
                                    <li>
                                        <div className="forboxs">
                                            <Image src='/webiniar/idea.svg'
                                                width={100}
                                                height={100}
                                            />
                                            <h4 className="text-white">Freelancer</h4>                  </div>
                                    </li>
                                    <li>
                                        <div className="forboxs">
                                            <Image src='/webiniar/people.svg'
                                                width={100}
                                                height={100}
                                            />
                                            <h4 className="text-white">Working Professional</h4>                  </div>
                                    </li>


                                </ul>

                            </div>
                        </div>
                    </section>;
                </section>

            case "Instructor":
                return <section className="instructor pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
                    <div className="container mx-auto cardsstart">


                        <div className="flex flex-wrap Webiniarblocks" >
                            <div className="instructorprof flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl ">
                                <Image width={100} height={100} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/webiniar/woman.jpg" alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{author_name}</h5>
                                    <p className="mb-3 font-normal text-gray-200 dark:text-gray-700">{about_author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>;
            case "Help":
                return <section className="Help instructor pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
                    <div className="container mx-auto cardsstart">


                        <div className="flex flex-wrap Webiniarblocks" >
                            <div className="instructorprof flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl ">
                                <Image width={100} height={100} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/webiniar/woman.jpg" alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">For More Details</h5>
                                    <Link href=''> <Button color="">
                                        contact Now
                                    </Button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>;

            default:
                return null;
        }
    };
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
        full_name: '',
        email_address: '',
        phone_number: '',
        country: '',
        Webinar_name: webiniar_name || '',
        years_of_trading_experience: '',
        author_name : author_name || '',
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
            const response = await fetch('https://trading.work.gd/webinar_registerations/', {
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
                    country: '',
                    Webinar_name: webiniar_name,
                    years_of_trading_experience: '',
                    author_name : author_name,
                    // Add other fields as needed
                });
                setSuccessMessage('Form submitted successfully');
                  
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




    return (
        <>
            <Base>
                <div className="flex flex-wrap Webiniarblocks" >
                    <ServiceCard
                        title={webiniar_name}
                        author_name={author_name}
                        details={short_desc}
                        price={price}
                        Webiniar_date={Webiniar_date}
                        Webiniar_time={Webiniar_time}
                        icon={

                            <Image className="mx-auto" src={image} width="100" height="100" alt="Customizable Strategy Trading" />

                        }
                    />

                </div>
                
                {successMessage && 
                
                
                <span class="badgeclass bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{successMessage}</span>
                }
                <form className="max-w-md mx-auto webform" onSubmit={handleSubmit}>
                    {formErrors && (
                        <div className="text-red-500">
                            <ul>
                                {Object.entries(formErrors).map(([field, errors]) => (
                                    <li key={field}>{`${field}: ${errors.join(', ')}`}</li>
                                ))}
                            </ul>
                        </div>
                    )}
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
                                placeholder=" " required />
                            <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_company" id="floating_company" className="text-white block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

                                value={formData.country}
                                onChange={(e) =>
                                    setFormDataField('country', e.target.value)
                                }


                                placeholder=" " required />
                            <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
                        </div>


                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="trading_experience" id="trading_experience" className="text-white block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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

                <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
                    <div className="container mx-auto cardsstart">


                        <div className="flex flex-wrap Webiniarblocks" >
                            <h3 className="text-white">
                                {webiniar_name} by {author_name}
                            </h3>
                            <p>
                                {long_desc}      </p>



                        </div>
                    </div>
                </section>;
                <div className="ItemsLists itemdesc">                    <ul>
                    {listItems.map((item) => (
                        <li className="itemslistsbutton" key={item}>
                            <Button key={item} onClick={() => handleItemClick(item)} color="primary" variant="bordered">
                                {item}
                            </Button>


                        </li>
                    ))}
                </ul></div>


                {selectedItem ? renderContent() : "No item selected"}






            </Base>
        </>
    )
};

export default WebinerDetailPage;




const ServiceCard = ({ icon, title, details, author_name, price, Webiniar_date, Webiniar_time }) => {
    return (
        <>
            <div className="mt-10 w-full px-4 md:w-1/2 lg:w-1/3 servicecardweb">
                <div className="mb-9 rounded-[20px] p-5 shadow-2 hover:shadow-lg dark:bg-dark-2">

                    <div className="imgcalss">
                        {icon}
                    </div>
                    <h4 className="mb-[14px] text-2xl font-semibold text-dark text-white">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><strong>Finance</strong></span>
                        <br />
                        {title} by {author_name}
                    </h4>

                    <p className="text-body-color dark:text-dark-6">{details}</p>
                    <h4 className="mb-[14px] text-2xl font-semibold text-dark text-white">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><strong>Upcoming slot is {Webiniar_date} at {Webiniar_time}</strong></span>
                        <br />

                    </h4>
                    <div className="flex flex-wrap gap-4 items-center btnclassreg">

                        {/* <Button color="primary" variant="bordered">
                                Register
                            </Button> */}
                        <div className="">
                            <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"><strong> <b>₹</b> {price}</strong></span>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
};