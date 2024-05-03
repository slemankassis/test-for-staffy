import Head from "next/head";

import Image from "next/image";

const title = ["Research.", "Reach.", "Realize.", "Properties ™"];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="A real estate technology platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mx-3">
          <h1 className=" relative text-gray-800 text-3xl my-6 mx-4 flex flex-col font-stix font-titleBase md:font-titleXl">
            {title.map((row, i) =>
              i === title.length - 1 ? (
                <div className="relative">
                  <svg
                    className="absolute z-0"
                    width="280"
                    height="36"
                    viewBox="0 0 280 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M2.5127 10.6602C17.3627 31.7059 71.3208 41.5066 118.563 26.607C186.763 5.09737 226.913 -7.35458 277.238 12.6999"
                      stroke="#0589A6"
                      stroke-width="3.85"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className=" text-secondary relative z-10">{row}</p>
                </div>
              ) : (
                <span key={row}>{row}</span>
              )
            )}
          </h1>
          <p className="text-custom-gray font-roboto font-normal md:mb-[40px] mb-[23px] ml-4 mr-7 font-avenir">
            Kanvas is{" "}
            <span className="text-secondary">
              a real estate technology platform
            </span>{" "}
            that simplifies the process of buying and selling residential
            properties.
          </p>
          <p className="text-custom-gray font-roboto font-normal md:mb-[40px] mb-[23px] ml-7 mr-4 font-avenir">
            Our mission is to provide an{" "}
            <span className="text-secondary">efficient</span> and{" "}
            <span className="text-secondary">transparent</span> real estate
            experience for everyone.
          </p>

          <form>
            <div className="md:flex md:flex-row gap-1 bg-white">
              <label htmlFor="mail" className="text-secondary">
                Redefine real estate, join the waitlist:
              </label>
              <input
                id="mail"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
              <Image src="/send.svg" alt="" width={28} height={28} />
            </div>
          </form>

          <a href="tel:+1855526827">
            +1-855-<span className="text-secondary">KANVAS</span>
          </a>

          <p>© 2024 Kanvas.co</p>

          <Image src="/image.png" alt="" width={100} height={100} />
        </div>
      </main>
    </>
  );
}
