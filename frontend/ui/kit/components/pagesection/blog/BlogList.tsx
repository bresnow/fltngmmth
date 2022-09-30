import React from "react";
import FormSubscribe from "../../form/layout/FormSubscribe";
import NameSpaceCard from "./BlogCard";

interface Props {
  withSearch?: boolean;
}

const NameSpacePreviewMap = (props: Props) => {
  const blogs = [
    {
      tags: ["Car", "Money"],
      title: "Work at home",
      service: "Video",
      img: "/images/gradient.webp",
      desc: "Work at home, remote, is the new age of the job, every person can work at home....",
    },
    {
      tags: ["Car", "Money"],
      title: "test",
      service: "Oui",
      img: "/images/gradient1.webp",
      desc: "The new supercar is here, 543 cv and 140 000$ !!",
    },
    {
      tags: ["Car", "Money"],
      title: "test",
      service: "Oui",
      img: "/images/gradient.webp",
      desc: "The new supercar is here, 543 cv and 140 000$ !!",
    },
    {
      tags: ["Car", "Money"],
      title: "test",
      img: "/images/gradient1.webp",
      desc: "The new supercar is here, 543 cv and 140 000$ !!",
    },
    {
      tags: ["Car", "Money"],
      title: "test",
      img: "/images/gradient.webp",
      desc: "The new supercar is here, 543 cv and 140 000$ !!",
    },
    {
      tags: ["Car", "Money"],
      title: "test",
      service: "Oui",
      img: "/images/gradient1.webp",
      desc: "The new supercar is here, 543 cv and 140 000$ !!",
    },
  ];

  return (
    <div className="w-full bg-white p-12">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">Lastest</p>
          <p className="text-2xl font-light text-gray-400">Latest Projects</p>
        </div>
        {props.withSearch && (
          <div className="text-end">
            <FormSubscribe label="Search" placeholder="Enter a title" />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {blogs.map((blog) => {
          return (
            <NameSpaceCard
              key={blog.title}
              tags={blog.tags}
              title={blog.title}
              service={blog.service}
              img={blog.img}
              desc={blog.desc}
              showAuthor={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NameSpacePreviewMap;
