
import Base from "../../layouts/Baseof";


import Image from "next/image";
function comingsoon({ data }) {

  return (
    <Base>
      <div className="comingheading">
        <h1 className="text-white">Coming Soon</h1>
        <Image
          className="mx-auto mt-12"
          src='/coming.svg'
          width={300}
          height={300}
          alt=""
          priority />
      </div>
    </Base>

  );
};

export default comingsoon;

