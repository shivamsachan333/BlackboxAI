
import Image from "next/image";
import Link from "next/link";

function Cta() {
  const enable = true;
  return (
    <section className="section px-4">
      <div className="section container rounded-xl shadow">
        <div className="row  mx-auto items-center justify-center">
          <div className="md:col-5 lg:col-4">
            <Image
              className="w-full"
              src='/images/cta.svg'
              alt="call to action image"
              width={325}
              height={206}
            />
          </div>
          <div className="mt-5 text-center md:mt-0 md:text-left md:col-6 lg:col-5">
            <h2 className="text-white">Ready to get started?</h2>
            <p className="mt-6">Filled the form for connect</p>
            {enable && (
              <Link
                className="btn btn-primary mt-4"
                href="/contact"
                rel=''
              >
              Contact Us
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
