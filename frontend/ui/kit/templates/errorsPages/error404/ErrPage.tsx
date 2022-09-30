import React from "react";
import { Text } from "../../../../";
import Iframe from "../../../../iframe/Iframe";
const ErrPage = ({ error }: { error: Error }) => {
  return (
    <main className="bg-white  overflow-hidden h-screen relative">
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container mx-auto px-6 md:px-12 py-4">
          <div className="md:flex justify-between items-center">
            <div className="flex justify-between items-center">
              <Iframe
                className="h-full w-full flex"
                url="https://duckduckgo.com"
              />
            </div>
            <div className="hidden md:flex md:items-center md:justify-end space-x-4">
              <a
                href="#"
                className="px-3 py-2 transition ease-in duration-200 uppercase hover:text-gray-700 text-gray-400 focus:outline-none"
              >
                Github
              </a>
              <a
                href="#"
                className="px-3 py-2 transition ease-in duration-200 uppercase hover:text-gray-700 text-gray-400 focus:outline-none"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
          <div className="w-full mb-16 md:mb-8 text-center lg:text-left">
            <Text
              weight={7}
              className="font-light font-sans text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0 text-gray-700"
            ></Text>
            <Text
              weight={4}
              className="font-light font-sans text-center color-red-600 bg-yellow-100/50"
            >
              {error.message}
            </Text>
            <button className="px-2 py-2 w-36 mt-16 font-light transition ease-in duration-200 hover:bg-yellow-400 border-2 text-lg border-gray-700 bg-yellow-300 focus:outline-none">
              Go back home
            </button>
          </div>

          <div className="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
            <img src="/images/illustrations/1.svg" />
          </div>
        </div>
      </div>
    </main>
  );
};
export default ErrPage;
