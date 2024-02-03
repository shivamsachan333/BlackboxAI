
import Image from "next/image";
import Link from "next/link";

const Logo = ({ src }) => {

  return (
    <Link
      href= "/"
      className="navbar-brand block py-1"
      style={{
        height: "70".replace("px", "") + "px",
        width: "200".replace("px", "") + "px",
      }}
    >
      {src || "/images/logo.svg" ? (
        <Image
          width={"200".replace("px", "") * 2}
          height={"48".replace("px", "") * 2}
          src={src ? src :  "/images/logo.svg"}
          alt="BlackBoxAI"
          priority
        />
      ) : "Bigspring Light" ? (
        "Bigspring Light"
      ) : (
        "BlackBoxAI"
      )}
    </Link>
  );
};

export default Logo;
