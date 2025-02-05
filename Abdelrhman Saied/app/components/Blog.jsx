import React from "react";

const Blog = () => {
  const blogs = [
    {
      date: "21 June 2021",
      title: "The Amazing Difference a Year of Travelling.",
      description:
        "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
      image: "/blog-1.png",
      bgColor: "bg-blue-100",
    },
    {
      date: "28 June 2021",
      title: "Reflections on 5 Months of Travel: Time to Hang",
      description:
        "Dotting pet parents have a relentless need to constantly photograph every adorable pet moment...",
      image: "/blog-2.png",
      bgColor: "bg-orange-100",
    },
    {
      date: "10 July 2021",
      title: "How to Save Money While Visiting Africa.",
      description:
        "It is easy to forget that animals are living creatures with a beating heart.",
      image: "/blog-3.png",
      bgColor: "bg-red-100",
    },
  ];

  return (
    <div className="py-12 px-6 lg:px-24">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Our Blog</h2>
        <div className="text-right">
          <p className="text-gray-600">
            Stay up to date with the latest tech trends and news in the pets.
          </p>
          <button className="mt-2 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition">
            View All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-lg ${blog.bgColor}`}
          >
            <div>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-sm text-gray-600">{blog.date}</span>
              <h3 className="text-lg font-semibold mt-2 mb-3">{blog.title}</h3>
              <p className="text-gray-600 text-sm">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
