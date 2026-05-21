'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 64px)',
      backgroundColor: '#f9fafb',
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }} className="flex flex-col items-center justify-center">
      
      {/* 404 Text */}
      <h1 className="text-9xl font-extrabold text-purple-600 tracking-widest">
        404
      </h1>
      
      {/* Badge */}
      <div className="bg-purple-100 text-purple-800 px-3 py-1 text-sm rounded rotate-12 absolute mb-28 font-semibold">
        Page Not Found
      </div>
      
      {/* Main Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mt-6">
        Oops! Youve wandered onto the wrong path.
      </h2>
      
      {/* English Description Paragraph */}
      <p className="text-gray-500 mt-2 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please check the URL and try again.
      </p>

      {/* Back to Home Button */}
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-md transition-all duration-200 cursor-pointer">
          Go Back Home
        </button>
      </Link>
      
    </div>
  );
}   