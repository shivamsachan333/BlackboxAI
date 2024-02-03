
import Image from "next/image";

import CountUp from "react-countup";
import {

  AiFillCaretUp,
} from "react-icons/ai";

import Typewriter from "typewriter-effect";
function Offering() {
  return (<>
    <div className="text-white mb-16 pt-11 textchanging">
      <h2 className="lg:text-3xl mb-3 phone:text-lg h2color">
        We strive to offer an{" "}
        <span className="text-usual-green">
          <Typewriter
            options={{
              strings: ["unparalleled experience."],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h2>
      {/* <h3 className="text-sm">
            We strive to offer an unparalleled experience
          </h3> */}
    </div>
    <div className="h-full flex phone:flex-col lg:flex-row lg:w-full lg:justify-center offeringclass">
      <div className="firstbox bg-black phone:h-[400px] lg:w-[700px] xl:w-[550px] lg:h-[280px] lg:mr-8 phone:mb-16 rounded-xl lg:px-7 phone:px-5 phone:py-9">
        {/* <div className="text-white mb-10">
          <h5 className="text-base">Lorem ipsum dolor sit amet</h5>
          <h6 className="text-sm text-white">
            We strive to offer an unparalleled experience
          </h6>
        </div> */}
        <div className="firstboxcon phone:h-[300px] phone:w-full rounded-xl flex flex-col py-4 lg:px-4 phone:px-3 lg:h-[280px] bg-gradient-to-br from-[#4F4B9E] from-10% to-[#94BC60]">
          <div className="flex flex-row items-center">
            {/* <div className="flex flex-row justify-center items-center phone:mr-auto">
              <Image
                className="phone:w-11 lg:w-14 mr-3"
                src="/otherImages/dp1.png"
                width={160}
                height={160}
                alt="dp"
              />
              <h4 className="text-base">Welcome Back!</h4>
            </div> */}
            {/* <FaBell className="phone:w-6 phone:h-6" /> */}
          </div>
          <div className="h-full flex flex-col justify-center items-center phone:p-2 text-white">
            <div
              className=" h-[100px] w-full rounded-t-xl 
                  bg-black
                  phone:p-4
                  flex flex-row items-center firstclass
                  "
            >
              <div className="mr-auto">
                <p className="text-xs">Total Balance</p>
                <p className="text-xl">$13450.00</p>
              </div>
              <div className="flex flex-row justify-center items-center rounded-full py-1 px-3 bg-white bg-opacity-25">
                <AiFillCaretUp />
                <CountUp
                  end={15}
                  suffix="%"
                  useEasing={true}
                  onEnd={({ pauseResume, reset, start, update }) => start()}
                />
              </div>
            </div>
            <div
              className="bg-usual-grey  h-[100px] w-full rounded-b-xl p-4
                   flex flex-row items-center justify-between secondclass
                  "
            >
              <div className="mr-auto">
                <p className="text-xs">Profit</p>
                <p className="text-xl">$13250.00</p>
              </div>
              <Image
                src="Images/MainPage/candlestick.svg"
                width={76}
                height={61}
                alt="polygon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="phone:h-[450px] lg:w-[900px] lg:h-[280px] brokers">
        <div className="secondbox bg-black lg:h-[280px] phone:h-[420px] mb-7 rounded-xl border-4 border-black border-b-usual-green px-7 py-9">
          <h2 className="text-white text-xl mb-5 h2color">Broker Partners</h2>
          <div className="flex lg:flex-row  phone:flex-col w-full justify-evenly">
            <div className="flex flex-col justify-center items-center phone:mb-2 lg:mb-0">
              <Image
                className="phone:w-[100px] lg:w-[120px] mb-3"
                src="/otherImages/fyers.svg"
                width={150}
                height={150}
                alt="fyers"
              />
              <h4 className="text-white text-lg font-medium">Fyers</h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                className="phone:w-[100px] lg:w-[120px] mb-3 coin"
                src="/otherImages/zerodha.svg"
                width={150}
                height={150}
                alt="fyers"
              />
              <h4 className="text-white text-lg font-medium">Zerodha</h4>
            </div>
          </div>
        </div>

      </div>
    </div></>)
}


export default Offering;
