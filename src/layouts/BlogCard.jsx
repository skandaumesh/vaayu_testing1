import React from "react";

// Dummy blog data
const blogs = [
  {
    id: 1,
    title: "Understanding Respiratory Health",
    summary: "Learn the basics of how your lungs work and why maintaining respiratory health is essential for a better life.",
    image: "/blog1.jpg", // Place inside public folder
    link: "/blog/respiratory-health"
  },
  {
    id: 2,
    title: "Managing Asthma with Confidence",
    summary: "Discover simple lifestyle tips and medical insights to keep your asthma under control.",
    image: "/blog2.jpg",
    link: "/blog/asthma-management"
  },
  {
    id: 3,
    title: "Sleep and Breathing: What's the Connection?",
    summary: "Explore how sleep apnea and other sleep-related disorders affect your breathing and energy.",
    image: "/blog3.jpg",
    link: "/blog/sleep-breathing"
  }
];

const BlogPage = () => {
  return (
    <div className="bg-[#F4F5EC] text-[#3f472e] min-h-screen">
      
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-br from-[#768359] to-[#3f472e] text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Vaayu Health Blog</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Insights, tips, and expert advice on respiratory and sleep health.
        </p>
      </div>

      {/* Blogs Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-lg"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-700 mb-4">{blog.summary}</p>
              <a
                href={blog.link}
                className="inline-block bg-[#768359] text-white px-4 py-2 rounded hover:bg-[#5e6d4c] transition"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
