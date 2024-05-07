import Logo from "@/components/Logo";
import Head from "next/head";

import Image from "next/image";

const title = ["Research.", "Reach.", "Realize.", "Properties ™"];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="A real estate technology platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mx-3 sm:mx-10 md:mx-20 md:flex gap-20 my-5">
          <div className="md:w-[50vw]">
            <Logo />

            <div className="mx-10 md:mx-20">
              <h1 className="text-gray-800 my-6 sm:my-10 flex flex-col font-stix text-titleBase sm:text-titleXl leading-titleBase sm:leading-titleXl">
                {title.map((row, i) =>
                  i === title.length - 1 ? (
                    <div className="relative">
                      <svg
                        className="absolute w-[60%] sm:w-[30%]"
                        viewBox="0 0 280 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M2.5127 10.6602C17.3627 31.7059 71.3208 41.5066 118.563 26.607C186.763 5.09737 226.913 -7.35458 277.238 12.6999"
                          stroke="#0589A6"
                          strokeWidth="3.85"
                          strokeLinecap="round"
                        />
                      </svg>
                      <p className="text-secondary relative  bg-transparent">
                        {row}
                      </p>
                    </div>
                  ) : (
                    <span key={row}>{row}</span>
                  )
                )}
              </h1>
              <div className="flex flex-col gap-7 m-2 my-5">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
                  <p className="text-custom-gray font-roboto font-normal md:mb-[40px] mb-[23px] ml-0 mr-7 sm:mr-0 sm:mb-7 font-avenir">
                    Kanvas is{" "}
                    <span className="text-secondary">
                      a real estate technology platform
                    </span>{" "}
                    that simplifies the process of buying and selling
                    residential properties.
                  </p>
                  <p className="text-custom-gray font-roboto font-normal md:mb-[40px] mb-[23px] ml-7 sm:ml-0 sm:mt-7 font-avenir">
                    Our mission is to provide an{" "}
                    <span className="text-secondary">efficient</span> and{" "}
                    <span className="text-secondary">transparent</span> real
                    estate experience for everyone.
                  </p>
                </div>

                <form>
                  <div className="flex flex-col sm:flex-row gap-1 bg-white p-2 rounded-md sm:rounded-lg justify-between">
                    <label
                      htmlFor="mail"
                      className="flex text-secondary bg-white"
                    >
                      Redefine real estate, join the waitlist:
                    </label>
                    <div className="flex bg-white justify-between">
                      <input
                        id="mail"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="bg-white"
                      />
                      <button type="submit" className="cursor">
                        <Image src="/send.svg" alt="" width={28} height={28} />
                      </button>
                    </div>
                  </div>
                </form>

                <a
                  href="tel:+1855526827"
                  className="font-avenir font-extrabold	text-baseText sm:text-xl sm:leading-xl"
                >
                  +1-855-<span className="text-secondary">KANVAS</span>
                </a>
              </div>

              <p className="text-copyright leading-copyright text-ternary mt-9 fixed bottom-8 left-8 mx-5 sm:mx-24 my-4">
                © 2024 Kanvas.co
              </p>
            </div>
          </div>

          <div className="md:w-[50vw]">
            <img
              src="/image.png"
              alt=""
              className="w-[40vw] transform transition-transform duration-500 sm:translate-x-10 rotate-5 md:rotate-0 rounded-bl-[10px] md:rounded-xl absolute md:static right-[-11px] top-[-19px] sm:right-[-30px] sm:top-[-50px] lg:hidden"
            />
            <img
              src="/landscape-image.png"
              alt=""
              className="hidden lg:block w-[40vw] transform rounded-xl"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
