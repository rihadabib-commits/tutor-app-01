

import TutorsClient from '@/components/TutorsClient';
import React from 'react';

// Next.js এর স্ট্যাটিক বিল্ড এরর ফিক্স করার জন্য
export const dynamic = 'force-dynamic';

// সঠিক এবং সলিড লাইভ ব্যাকএন্ড লিঙ্ক
const BACKEND = "https://tutor-bakend.vercel.app";

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