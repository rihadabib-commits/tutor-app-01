

// import TutorsClient from '@/components/TutorsClient';
// import React from 'react';

// const AllTutorPage = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/teachers`, { cache: 'no-store' });
//   const teachers = await res.json();

//   return (
//     <div style={{ backgroundColor: "#f5f3ff", minHeight: "100vh", padding: "clamp(16px, 4vw, 32px)" }}>
//       <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//         <h1 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: "800", color: "#1f1235", marginBottom: "24px" }}>
//           All Tutors
//         </h1>
//         <TutorsClient teachers={teachers} />
//       </div>
//     </div>
//   );
// };

// export default AllTutorPage;

export const dynamic = 'force-dynamic'
import TutorsClient from '@/components/TutorsClient';
import React from 'react';

const BACKEND = "https://tutor-bakend-pcd2ueudx-rihadabib-commits-projects.vercel.app";

const AllTutorPage = async () => {
  let teachers = [];
  try {
    const res = await fetch(`${BACKEND}/teachers`, { cache: 'no-store' });
    teachers = await res.json();
  } catch (err) {
    console.error("Fetch error:", err);
  }

  return (
    <div style={{ backgroundColor: "#f5f3ff", minHeight: "100vh", padding: "clamp(16px, 4vw, 32px)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: "800", color: "#1f1235", marginBottom: "24px" }}>
          All Tutors
        </h1>
        <TutorsClient teachers={teachers} />
      </div>
    </div>
  );
};

export default AllTutorPage;