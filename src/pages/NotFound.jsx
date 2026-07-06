import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F7F8F3] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        
        <p className="text-[#5B6641] tracking-[4px] uppercase text-sm font-semibold mb-4">
          404 Error
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-[#243424] leading-tight">
          This page could not be found
        </h1>

        <p className="mt-6 text-[#5f6b5f] text-lg leading-relaxed">
          The page you are looking for may have been moved,
          renamed, or no longer exists.
        </p>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[#5B6641] px-8 py-4 text-white font-medium transition hover:bg-[#495338]"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}