// src/components/BlogDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "./blogData";

const BlogDetail = () => {
  const { id } = useParams();

  // Find blog by matching id
  const blog = blogs.find((b) => b.id.toString() === id);

  // Show error if blog not found
  if (!blog) {
    return <div className="p-10 text-red-600">Blog not found.</div>;
  }

  return (
    <div className="bg-[#F4F5EC] text-[#3f472e] min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <Link
        to="/"
        className="inline-block mb-4 bg-[#6A734F] text-white px-4 py-2 rounded hover:scale-105 transition-transform duration-300"
      >
        ← Back to Blogs
      </Link>

      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-auto mb-6 rounded-lg"
      />

      <div className="space-y-4">
        {(blog.content || "").split("\n").map((block, i) => {
          const isHeading = block.startsWith("##");
          const isSubheading = block.startsWith("###");
          const isPointBlock = block.trim().startsWith("- ");

          const className = isHeading
            ? "text-2xl font-bold mt-8"
            : isSubheading
            ? "text-xl font-semibold mt-6"
            : isPointBlock
            ? "bg-[#eef1e8] p-4 rounded"
            : "text-base leading-relaxed";

          return (
            <p key={i} className={className}>
              {block.replace(/^###?\s*/, "")}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default BlogDetail;
