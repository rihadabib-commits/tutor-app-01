// import TutorCard from '@/components/Tutor';
// import React from 'react';
// import Link from 'next/link';

// const Wahid = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/teachers`, { cache: 'no-store' });
//   const allTeachers = await res.json();
//   const teachers = allTeachers.slice(0, 6);

//   return (
//     <section className="py-10 px-6">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold text-gray-900">Available Tutors</h2>
//         <Link href="/tutors" className="text-purple-600 font-medium text-sm hover:underline flex items-center gap-1">
//           View All Tutors →
//         </Link>
//       </div>

//       <div className="flex gap-6">
//         {/* Tutor cards — horizontal scroll on mobile */}
//         <div className="flex-1 overflow-x-auto">
//           <div className="flex gap-4 pb-2" style={{ minWidth: "max-content" }}>
//             {teachers.map(teacher => (
//               <div key={teacher._id} style={{ width: "200px", flexShrink: 0 }}>
//                 <TutorCard teacher={teacher} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right side info cards */}
//         <div className="hidden lg:flex flex-col gap-4 w-52 shrink-0">
//           <div className="border border-gray-100 rounded-2xl p-4 shadow-sm flex items-start gap-3">
//             <div className="bg-purple-50 p-2 rounded-xl">
//               <svg width="24" height="24" fill="none" stroke="#9333ea" strokeWidth={2} viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//             <div>
//               <p className="font-semibold text-sm text-gray-900">Verified Tutors</p>
//               <p className="text-xs text-gray-500 mt-0.5">All tutors are verified and experienced in their fields.</p>
//             </div>
//           </div>

//           <div className="border border-gray-100 rounded-2xl p-4 shadow-sm flex items-start gap-3">
//             <div className="bg-green-50 p-2 rounded-xl">
//               <svg width="24" height="24" fill="none" stroke="#16a34a" strokeWidth={2} viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//               </svg>
//             </div>
//             <div>
//               <p className="font-semibold text-sm text-gray-900">Safe & Secure</p>
//               <p className="text-xs text-gray-500 mt-0.5">Your data and bookings are safe with us.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Wahid;


// import TutorCard from '@/components/Tutor';
// import React from 'react';
// import Link from 'next/link';

// const BACKEND = "https://tutor-bakend-pcd2ueudx-rihadabib-commits-projects.vercel.app";

// const Wahid = async () => {
//   let teachers = [];
//   try {
//     const res = await fetch(`${BACKEND}/teachers`, { cache: 'no-store' });
//     const allTeachers = await res.json();
//     teachers = Array.isArray(allTeachers) ? allTeachers.slice(0, 6) : [];
//   } catch (err) {
//     console.error("Fetch error:", err);
//   }

//   return (
//     <section className="py-10 px-6">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold text-gray-900">Available Tutors</h2>
//         <Link href="/tutors" className="text-purple-600 font-medium text-sm hover:underline flex items-center gap-1">
//           View All Tutors →
//         </Link>
//       </div>

//       <div className="flex gap-6">
//         <div className="flex-1 overflow-x-auto">
//           <div className="flex gap-4 pb-2" style={{ minWidth: "max-content" }}>
//             {teachers.map(teacher => (
//               <div key={teacher._id} style={{ width: "200px", flexShrink: 0 }}>
//                 <TutorCard teacher={teacher} />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="hidden lg:flex flex-col gap-4 w-52 shrink-0">
//           <div className="border border-gray-100 rounded-2xl p-4 shadow-sm flex items-start gap-3">
//             <div className="bg-purple-50 p-2 rounded-xl">
//               <svg width="24" height="24" fill="none" stroke="#9333ea" strokeWidth={2} viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//             <div>
//               <p className="font-semibold text-sm text-gray-900">Verified Tutors</p>
//               <p className="text-xs text-gray-500 mt-0.5">All tutors are verified and experienced in their fields.</p>
//             </div>
//           </div>

//           <div className="border border-gray-100 rounded-2xl p-4 shadow-sm flex items-start gap-3">
//             <div className="bg-green-50 p-2 rounded-xl">
//               <svg width="24" height="24" fill="none" stroke="#16a34a" strokeWidth={2} viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//               </svg>
//             </div>
//             <div>
//               <p className="font-semibold text-sm text-gray-900">Safe & Secure</p>
//               <p className="text-xs text-gray-500 mt-0.5">Your data and bookings are safe with us.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Wahid;




// ১. ভার্সেলের ডাইনামিক রেন্ডারিং এরর ফিক্স করার জন্য ম্যাজিক লাইন
export const dynamic = 'force-dynamic';

import TutorCard from '@/components/Tutor';
import React from 'react';
import Link from 'next/link';

// ২. আমাদের নতুন এবং সলিড লাইভ ব্যাকএন্ড লিঙ্ক
const BACKEND = "https://tutor-bakend.vercel.app";

const Wahid = async () => {
  let teachers = [];
  try {
    const res = await fetch(`${BACKEND}/teachers`, { cache: 'no-store' });
    const allTeachers = await res.json();
    teachers = Array.isArray(allTeachers) ? allTeachers.slice(0, 6) : [];
  } catch (err) {
    console.error("Fetch error:", err);
  }

  return (
    <section className="py-10 px-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Available Tutors</h2>
        <Link href="/tutors" className="text-purple-600 font-medium text-sm hover:underline flex items-center gap-1">
          View All Tutors →
        </Link>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 overflow-x-auto">
          <div className="flex gap-4 pb-2" style={{ minWidth: "max-content" }}>
            {teachers && teachers.length > 0 ? (
              teachers.map(teacher => (
                <div key={teacher._id} style={{ width: "200px", flexShrink: 0 }}>
                  <TutorCard teacher={teacher} />
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400">Loading tutors...</p>
            )}
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-4 w-52 shrink-0">
          <div className="border border-gray-100 rounded-2xl p-4 shadow-sm flex items-start gap-3">
            <div className="bg-purple-50 p-2 rounded-xl">
              <svg width="24" height="24" fill="none" stroke="#9333ea" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900">Verified Tutors</p>
              <p className="text-xs text-gray-500 mt-0.5">All tutors are verified and experienced in their fields.</p>
            </div>
          </div>

          <div className="border border-gray-100 rounded-2xl p-4 shadow-sm flex items-start gap-3">
            <div className="bg-green-50 p-2 rounded-xl">
              <svg width="24" height="24" fill="none" stroke="#16a34a" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900">Safe & Secure</p>
              <p className="text-xs text-gray-500 mt-0.5">Your data and bookings are safe with us.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wahid;