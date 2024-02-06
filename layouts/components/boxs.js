

import Link from "next/link";

import Image from "next/image";
const Boxs = () => {
    return (<>
        <div className="imagesboxs">
            <div>
                <Link href=''>
                    <div className="boxsitems">   <Image
                        width={400}
                        height={400}
                        alt="NextUI hero Image with delay"
                        src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                    />
                        <h3 className="text-white">Advance Algotrading marketing classess</h3></div></Link></div>
            <div> <Link href=''>   <div className="boxsitems">   <Image
                width={400}
                height={400}
                alt="NextUI hero Image with delay"
                src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            />
                <h3 className="text-white">Advance Algotrading marketing classess</h3></div></Link></div></div>
    </>)
}

export default Boxs;