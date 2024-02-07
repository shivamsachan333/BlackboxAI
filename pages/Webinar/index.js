import React from "react";
import Base from "../../layouts/Baseof";
import "swiper/swiper.min.css";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from "next/image";


import axios from "axios";
const Webiniar = () => {

    const [Webinars, setWebinars] = useState([])
    useEffect(() => {
        async function getAllWebinars() {
            try {
                const webi = await axios.get("https://trading.work.gd/webinars/")
                console.log(webi.data);
                setWebinars(webi.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllWebinars()
    }, [])


    const router = useRouter();



    const [selectedItem, setSelectedItem] = useState("Upcoming");

    // Sample list items
    const listItems = ['Upcoming', 'Past Webiniar'];

    // Function to handle item click
    const handleItemClick1 = (item) => {
        setSelectedItem(item);
    };


    const renderContent = () => {
        switch (selectedItem) {

            case "Upcoming":

                return <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
                    <div className="container mx-auto cardsstart">


                        <div className="flex flex-wrap Webiniarblocks" >





                            {Webinars.map((item, i) =>
                                <ServiceCard
                                    key={item.webinar_name}
                                    title={item.webinar_name}
                                    category={item.category}
                                    price={item.price}
                                    author_name={item.Author_name}
                                    Webiniar_time={item.time}
                                    Webiniar_date={item.date}
                                    image={item.image}




                                    details={item.description.substring(0, 200)}
                                    icon={

                                        <Image className="mx-auto" src={item.image} width="100" height="100" alt={item.webinar_name} />

                                    }
                                />)

                            }





                        </div>
                    </div>
                </section>;
            case 'Past Webiniar':
                return <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
                    <div className="container mx-auto cardsstart">

                    </div>
                </section>;

            default:
                return null;
        }
    };

    return (
        <Base>
            <div className="-mx-4 flex flex-wrap webinerpage">
                <div className="w-full px-4">
                    <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                        <span className="mb-2 block text-lg font-semibold text-primary">
                            Our Webiniar
                        </span>
                        <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                            What We Offer
                        </h2>
                        <p className="text-base text-body-color dark:text-dark-6">
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ItemsLists">                    <ul>
                {listItems.map((item) => (
                    <li className="itemslistsbutton" key={item}>
                        <Button key={item} onClick={() => handleItemClick1(item)} color="primary" variant="bordered">
                            {item}
                        </Button>


                    </li>
                ))}
            </ul></div>


            {selectedItem ? renderContent() : "No item selected"}




        </Base>

    );
};

export default Webiniar;

const ServiceCard = ({ icon, title, key, category, author_name, Webiniar_date, Webiniar_time, details, price, webinar_name }) => {

    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 servicecardweb" key={key}>


                <Link
                    href={{
                        pathname: '/Webinar/[webinarName]',
                        query: {
                            webinar_name: webinar_name,
                        },
                    }}

                    as={`/Webinar/${title}`}
                >

                    <div className="mb-9 rounded-[20px] p-5 shadow-2 hover:shadow-lg dark:bg-dark-2">

                        <div className="imgcalss">
                            {icon}
                        </div>
                        <h4 className="mb-[14px] text-2xl font-semibold text-dark text-white">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><strong>{category}</strong></span>
                            <br />
                            {title} by {author_name}
                        </h4>
                        <h4 className="mb-[14px] text-2xl font-semibold text-dark text-white">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><strong>Upcoming slot is {Webiniar_date} at {Webiniar_time}</strong></span>
                            <br />

                        </h4>
                        <p className="text-body-color dark:text-dark-6">{details} ...</p>

                        <div className="flex flex-wrap gap-4 items-center btnclassreg">

                            <Button color="primary" variant="bordered">

                                <Link
                                    href={{
                                        pathname: '/Webinar/[webinarName]',
                                        query: {
                                            webinar_name: webinar_name,
                                        },
                                    }}

                                    as={`/Webinar/${title}`}
                                >  Register</Link>
                            </Button>
                            <div className="pricebutton">
                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"><strong><b> ₹</b>{price}</strong></span>
                            </div>
                        </div>

                    </div>


                </Link>
            </div>
        </>
    );
};