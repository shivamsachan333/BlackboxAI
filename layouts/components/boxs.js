

import Link from "next/link";

import { useState,useEffect } from "react";

import axios from "axios";



import Image from "next/image";
const Boxs = () => {
    const Course_name ='course1';


    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getAllCourses = async () => {
            try {
                // Check if data is already cached in localStorage
                const cachedData = localStorage.getItem('cachedCourses');

                if (cachedData) {
                    // If cached data exists, parse and set it
                    setCourses(JSON.parse(cachedData));
                } else {
                    // If no cached data exists, fetch data from the API
                    const response = await axios.get("https://trading.work.gd/courses/");
                    const courseData = response.data;
                    // Cache the fetched data in localStorage
                    cacheCourses(courseData);
                    // Set the data in state
                    setCourses(courseData);
                }
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        getAllCourses();
    }, []);

    // Function to cache courses in localStorage
    const cacheCourses = (data) => {
        try {
            // Try to set the item in localStorage
            localStorage.setItem('cachedCourses', JSON.stringify(data));
        } catch (error) {
            console.error('Error caching courses:', error);
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
            localStorage.setItem('cachedCourses', JSON.stringify(data));
        } catch (error) {
            console.error('Error clearing cache and retrying caching:', error);
        }
    };



    console.log(courses)
  
  
    return (<>
    {courses === null ? (
            <Loader />
        ) : 
        <div className="imagesboxs">



        {courses.map((course) => {
            var box_img = course.course_poster
            box_img = box_img.replace("http://", "https://");
            console.log(box_img)
    return (
        <div key={course.id}>
            <Link href={`/Education/${encodeURIComponent(course.course_name)}`}>
                <div className="boxsitems">
                    <Image
                        width={400}
                        height={400}
                        alt={course.course_name}
                        src={box_img}
                    />
                    <h3 className="text-white">{course.course_name}</h3>
                </div>
            </Link>
        </div>
    );
})}
</div>}
    </>)
}

export default Boxs;