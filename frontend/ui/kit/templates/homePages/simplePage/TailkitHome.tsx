const TailkitHome = () => {
  return (
    <div className="relative bg-white overflow-hidden h-screen">
      <div className="max-w-7xl mx-auto h-full">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32 h-full">
          <div className="relative bg-white z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className=" flex justify-between items-center  border-gray-100 py-6  md:space-x-10">
                <div className="flex justify-start items-center gap-12">
                  <a className="flex items-center" href="/">
                    <img
                      className="h-12 w-auto sm:h-12"
                      src="/images/gradient1.webp"
                      alt="site"
                    />
                    {/* <span className="text-indigo-600 ml-2 text-2xl font-bold">
                      FLTNGMMTH + CNXT
                    </span> */}
                  </a>
                  <nav className="hidden md:flex space-x-10">
                    <div className="relative">
                      <button
                        type="button"
                        className="group bg-white rounded-md text-gray-800 inline-flex items-center text-base font-normal hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-xl"
                      >
                        <span>Browse Services</span>
                        <svg
                          className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </nav>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Open menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 h-full">
            <div className="flex flex-col md:flex-row w-full items-start justify-between md:justify-start h-full md:h-1/2">
              <div className="text-left z-20 md:z-30 w-full md:w-1/2 flex flex-col items-center md:items-start justify-start md:justify-center h-full">
                <h1 className="tracking-tight font-extrabold text-gray-900 titleHome text-6xl ">
                  <span className="flex w-full m-auto text-indigo-600">
                    {" "}
                    Namespace Services
                  </span>
                  <span className="block font-bold xl:inline">
                    <span className="absolute"></span> <br />
                    Instantly Deploy Software Platforms
                  </span>
                </h1>
                <h2 className="mt-3  text-gray-500 sm:mt-5 text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  <span className="text-gray-700 font-bold">
                    Over 50 different available services
                  </span>
                  ...and growing
                </h2>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start w-full">
                  <div className="rounded-md shadow">
                    <a
                      className="w-full flex items-center justify-center px-8 py-3  text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2"
                      href="/started"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/bresnow/remix.gun"
                      className="w-full flex items-center justify-center px-8 py-3  text-base font-medium rounded-md text-gray-800 bg-gray-100 hover:bg-gray-200 px-4 py-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="ml-2"
                        viewBox="0 0 1792 1792"
                      >
                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                      </svg>
                      <span className="ml-2">Github</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  Learn More ?
                  <span className="underline cursor-pointer">
                    Make a request
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default TailkitHome;
