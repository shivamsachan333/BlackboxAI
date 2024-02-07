

import Link from "next/link";

import { useState,useEffect } from "react";

import axios from "axios";



import Image from "next/image";
const Boxs = () => {
    const Course_name ='course1';


    const [courses, setcourses] = useState([])

    useEffect(()=>{
      async function getAllcourses(){
        try{
          const course_data = await axios.get("https://trading.work.gd/courses/")
          console.log(course_data.data);
          setcourses(course_data.data)
        }catch(error){
  console.log(error)
        }
      }
      getAllcourses()
    },[])
    console.log(courses)
  
  
    return (<>
    {courses === null ? (
            <Loader />
        ) : 
        <div className="imagesboxs">



        {courses.map((course) => {
    return (
        <div key={course.id}>
            <Link href={`/Education/${encodeURIComponent(course.course_name)}`}>
                <div className="boxsitems">
                    <Image
                        width={400}
                        height={400}
                        alt={course.course_name}
                        src={course.course_poster}
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