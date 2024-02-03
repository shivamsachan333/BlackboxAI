


import Base from "../../layouts/Baseof";
import "swiper/swiper.min.css";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function Strategy() {
    const router = useRouter();
    const { strategyname, strategydescription, visual1, visual2, visual3, visual4 } = router.query;
    useEffect(() => {
        // Access the query parameters
        console.log('Strategy Name:', strategyname);
        console.log('Description:', strategydescription);
        console.log('Visual 1:', visual1);
        console.log('Visual 2:', visual2);
        console.log('Visual 3:', visual3);
        console.log('Visual 4:', visual4);
      }, [strategyname, strategydescription, visual1, visual2, visual3, visual4]);
 
  
    return (
        <>
            <Base>
            <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto cardsstart">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="sm:text-4xl md:text-[40px] mb-2 block text-lg font-semibold text-primary">
                {strategyname}
              </span>
   
            </div>
          </div>
        </div>
      </div>


          <div className="w-full px-4 contentstrategy">
            <div className="mx-auto mb-12 text-center lg:mb-20">
             
              <p className="text-base text-body-color dark:text-dark-6 text-white">
             {strategydescription}
              </p>
            </div>
          </div>
       
    </section>



                <div className="strategychart1">

                    <div className="firstchart">
                        <iframe className='strategychart1'

                            src={visual1}></iframe>
                    </div>
                </div>
                <div className="strategychart2">

                    <div className="firstchart">
                        <iframe className='strategychart1' src={visual2}></iframe>
                    </div>



                </div>

                <div className="strategychart3">

                    <div className="firstchart">
                        <iframe className='strategychart1' title="creatingVisuals" src={visual3}></iframe>
                    </div>



                </div>

                <div className="strategychart4">

                    <div className="firstchart">
                        <iframe className='strategychart1' title="creatingVisuals" src={visual4}></iframe>
                    </div>



                </div>

            </Base>
        </>
    )
}