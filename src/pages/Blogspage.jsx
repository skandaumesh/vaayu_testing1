import React from "react";

const blogs = [
  {
    id: 1,
    title: "Understanding Respiratory Health",
    summary: "Learn how your lungs work and why respiratory care matters.",
    image: "/blog1.jpg", // Place these in public/
    link: "/blogs/respiratory-health"
  },
  {
    id: 2,
    title: "Managing Asthma with Confidence",
    summary: "Simple tips and insights to keep your asthma in check.",
    image: "/blog2.jpg",
    link: "/blogs/asthma-management"
  },
  {
    id: 3,
    title: "Sleep & Breathing: The Link Explained",
    summary: "Understand how conditions like sleep apnea affect your health.",
    image: "/blog3.jpg",
    link: "/blogs/sleep-breathing"
  }
];

const Blogspage = () => {
  return (
    <div className="relative bg-[#F4F5EC] text-[#3f472e] min-h-screen">
      {/* Corner Heading */}
      <h2 className="absolute top-7 left-35 text-2xl font-bold text-[#768359] uppercase tracking-wide">




        
      </h2>



      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto py-16 px-4 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-700 mb-4">{blog.summary}</p>
              <a href={blog.link} className="inline-block bg-[#768359] text-white px-4 py-2 rounded hover:bg-[#5e6d4c]">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogspage;
