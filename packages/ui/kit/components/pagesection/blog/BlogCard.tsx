import React from "react";
import Avatar from "../../elements/avatars/Avatar";

interface Props {
  img?: string;
  title: string;
  desc: string;
  tags: string[];
  service?: string;
  icon?: string;
  showTags?: boolean;
  showAuthor?: boolean;
}

const NameSpaceCard = (props: Props) => {
  return (
    <>
      {/* <section id={'shop-curate'}>
                  <div className="mb-4">
                                            <div className="flex flex-wrap items-center justify-center">
                                                <div className="flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-yellow-500 rounded-lg max-w-xs shadow-lg">
                                                    <svg
                                                        className="absolute bottom-0 left-0 mb-8"
                                                        viewBox="0 0 375 283"
                                                        fill="none"
                                                    >
                                                        <rect
                                                            x="159.52"
                                                            y="175"
                                                            width="152"
                                                            height="152"
                                                            rx="8"
                                                            transform="rotate(-45 159.52 175)"
                                                            fill="#f3c06b"
                                                        ></rect>
                                                        <rect
                                                            y="107.48"
                                                            width="152"
                                                            height="152"
                                                            rx="8"
                                                            transform="rotate(-45 0 107.48)"
                                                            fill="#f3c06b"
                                                        ></rect>
                                                    </svg>
                                                    <div className="relative pt-10 px-10 flex items-center justify-center">
                                                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                                                        <img
                                                            className="relative w-40"
                                                            src="/images/gradient.webp"
                                                            alt="shopping"
                                                        />
                                                    </div>
                                                    <div className="relative text-white px-6 pb-6 mt-6">
                                                        <span className="block opacity-75 -mb-1">Indoor</span>
                                                        <div className="flex justify-between">
                                                            <span className="block font-semibold text-xl">
                                                                Peace Lily
                                                            </span>
                                                            <span className="bg-white rounded-full text-yellow-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                                                                $36.00
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
            </section> */}

      <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        <a href="#" className="w-full block h-full">
          <img
            alt="blog photo"
            src={props.img}
            className="max-h-40 w-full object-cover"
          />
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <p className="text-indigo-500 text-md font-medium">
              {props.service}
            </p>
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {props.title}
            </p>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
              {props.desc}
            </p>
            {props.showTags && (
              <div className="flex flex-wrap justify-starts items-center mt-4">
                {props.tags.map((tag) => {
                  return (
                    <div
                      key={tag}
                      className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl"
                    >
                      #{tag}
                    </div>
                  );
                })}
              </div>
            )}
            {props.showAuthor && (
              <div className="flex items-center mt-4">
                <Avatar size="small" img="/images/person/6.jpg" />
                <div className="flex flex-col justify-between ml-4 text-sm">
                  <p className="text-gray-800 dark:text-white">Jean Jacques</p>
                  <p className="text-gray-400 dark:text-gray-300">
                    20 mars 2029 - 6 min read
                  </p>
                </div>
              </div>
            )}
          </div>
        </a>
      </div>
    </>
  );
};

export default NameSpaceCard;
