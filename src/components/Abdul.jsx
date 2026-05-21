// import React from 'react';
// import Link from 'next/link';

// const Abdul = () => {

//   const reviews = [
//     {
//       name: "Tahmina Akter",
//       subject: "Mathematics",
//       location: "Dhaka",
//       rating: 5,
//       text: "MediQueue এ tutor খুঁজে পাওয়া অনেক সহজ ছিল। আমার HSC math এর result অনেক ভালো হয়েছে। Tutor ভাইয়া খুব ধৈর্য ধরে বুঝিয়েছেন।",
//       avatar: "TA",
//       color: "#9333ea", bg: "#f3e8ff"
//     },
//     {
//       name: "Rafiul Islam",
//       subject: "Physics",
//       location: "Chittagong",
//       rating: 5,
//       text: "অনেক ভালো platform। Session book করা অনেক easy। Tutor অনেক experienced ছিলেন। পরীক্ষায় A+ পেয়েছি, সত্যিই অনেক উপকার হয়েছে।",
//       avatar: "RI",
//       color: "#0891b2", bg: "#e0f2fe"
//     },
//     {
//       name: "Nusrat Jahan",
//       subject: "English",
//       location: "Sylhet",
//       rating: 5,
//       text: "Spoken English এ অনেক দুর্বল ছিলাম। MediQueue এর tutor এর সাহায্যে এখন confidently কথা বলতে পারি। Highly recommended!",
//       avatar: "NJ",
//       color: "#16a34a", bg: "#dcfce7"
//     },
//     {
//       name: "Arman Hossain",
//       subject: "Chemistry",
//       location: "Rajshahi",
//       rating: 4,
//       text: "Verified tutors হওয়ায় বিশ্বাস করতে পেরেছিলাম। Payment process সম্পূর্ণ secure। আবারও book করব ইনশাআল্লাহ।",
//       avatar: "AH",
//       color: "#d97706", bg: "#fef3c7"
//     },
//     {
//       name: "Sumaiya Begum",
//       subject: "Biology",
//       location: "Khulna",
//       rating: 5,
//       text: "Medical admission এর জন্য Biology তে help দরকার ছিল। এখানে অনেক experienced tutor পেয়েছি। Result অনেক ভালো হয়েছে।",
//       avatar: "SB",
//       color: "#db2777", bg: "#fce7f3"
//     },
//     {
//       name: "Mehedi Hassan",
//       subject: "Bangla",
//       location: "Barisal",
//       rating: 5,
//       text: "SSC পরীক্ষার আগে Bangla তে help নিয়েছিলাম। Tutor আপু অনেক friendly ছিলেন। Time মতো session হয়েছে, কোনো সমস্যা হয়নি।",
//       avatar: "MH",
//       color: "#7c3aed", bg: "#ede9fe"
//     },
//   ];

//   const stars = (count) => Array.from({ length: 5 }, (_, i) => (
//     <svg key={i} width="14" height="14" fill={i < count ? "#f59e0b" : "#e5e7eb"} viewBox="0 0 24 24">
//       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//     </svg>
//   ));

//   return (
//     <section style={{ backgroundColor: "#f5f3ff", padding: "60px 24px" }}>
//       <div style={{ maxWidth: "1152px", margin: "0 auto" }}>

//         {/* Why Choose Us */}
//         <div style={{ marginBottom: "60px" }}>
//           <div style={{ textAlign: "center", marginBottom: "32px" }}>
//             <p style={{ fontSize: "13px", fontWeight: "600", color: "#9333ea", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Why MediQueue</p>
//             <h2 style={{ fontSize: "26px", fontWeight: "700", color: "#1f1235", margin: 0 }}>Learn smarter, not harder</h2>
//           </div>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
//             {[
//               { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: "#9333ea", bg: "#f3e8ff", title: "Verified Tutors", desc: "সকল tutor আমাদের expert team দ্বারা যাচাই করা হয়েছে।" },
//               { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", color: "#0891b2", bg: "#e0f2fe", title: "Flexible Timing", desc: "তোমার সময়মতো session book করো — সকাল, বিকেল বা রাত।" },
//               { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", color: "#16a34a", bg: "#dcfce7", title: "Safe & Secure", desc: "তোমার payment ও data সম্পূর্ণ সুরক্ষিত আমাদের platform এ।" },
//             ].map((item) => (
//               <div key={item.title} style={{ backgroundColor: "white", borderRadius: "20px", padding: "24px", border: "1px solid #ede9fe", boxShadow: "0 2px 12px rgba(147,51,234,0.06)" }}>
//                 <div style={{ width: "48px", height: "48px", backgroundColor: item.bg, borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
//                   <svg width="22" height="22" fill="none" stroke={item.color} strokeWidth={2} viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
//                   </svg>
//                 </div>
//                 <h3 style={{ fontSize: "15px", fontWeight: "700", color: "#1f1235", margin: "0 0 6px" }}>{item.title}</h3>
//                 <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.6", margin: 0 }}>{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* How it works */}
//         <div style={{ marginBottom: "60px" }}>
//           <div style={{ textAlign: "center", marginBottom: "32px" }}>
//             <p style={{ fontSize: "13px", fontWeight: "600", color: "#9333ea", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Simple Steps</p>
//             <h2 style={{ fontSize: "26px", fontWeight: "700", color: "#1f1235", margin: 0 }}>কিভাবে কাজ করে?</h2>
//           </div>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
//             {[
//               { step: "01", title: "Browse Tutors", desc: "Subject ও area অনুযায়ী tutor খোঁজো", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
//               { step: "02", title: "Check Profile", desc: "Rating, experience ও fee দেখো", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
//               { step: "03", title: "Book Session", desc: "তোমার পছন্দের সময়ে book করো", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
//               { step: "04", title: "Start Learning", desc: "Tutor এর সাথে যুক্ত হয়ে শেখা শুরু করো", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
//             ].map((item, i) => (
//               <div key={item.step} style={{ position: "relative" }}>
//                 {i < 3 && (
//                   <div style={{ position: "absolute", top: "24px", left: "calc(50% + 28px)", width: "calc(100% - 56px)", height: "2px", background: "linear-gradient(to right, #d8b4fe, #e9d5ff)", zIndex: 0 }} />
//                 )}
//                 <div style={{ backgroundColor: "white", borderRadius: "20px", padding: "24px", border: "1px solid #ede9fe", textAlign: "center", boxShadow: "0 2px 12px rgba(147,51,234,0.06)", position: "relative", zIndex: 1 }}>
//                   <div style={{ width: "48px", height: "48px", backgroundColor: "#f3e8ff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
//                     <svg width="20" height="20" fill="none" stroke="#9333ea" strokeWidth={2} viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
//                     </svg>
//                   </div>
//                   <span style={{ fontSize: "11px", fontWeight: "700", color: "#c084fc", letterSpacing: "0.08em" }}>{item.step}</span>
//                   <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#1f1235", margin: "4px 0 6px" }}>{item.title}</h4>
//                   <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: "1.5", margin: 0 }}>{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ⭐ Testimonials */}
//         <div style={{ marginBottom: "60px" }}>
//           <div style={{ textAlign: "center", marginBottom: "32px" }}>
//             <p style={{ fontSize: "13px", fontWeight: "600", color: "#9333ea", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Student Reviews</p>
//             <h2 style={{ fontSize: "26px", fontWeight: "700", color: "#1f1235", margin: "0 0 8px" }}>তারা কী বলছে?</h2>
//             <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>হাজারো সন্তুষ্ট student এর মধ্যে থেকে কিছু কথা</p>
//           </div>

//           <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
//             {reviews.map((r, i) => (
//               <div key={i} style={{
//                 backgroundColor: "white", borderRadius: "20px", padding: "24px",
//                 border: "1px solid #ede9fe", boxShadow: "0 2px 12px rgba(147,51,234,0.06)",
//                 display: "flex", flexDirection: "column", gap: "14px"
//               }}>
//                 {/* Quote icon */}
//                 <svg width="28" height="28" fill="#ede9fe" viewBox="0 0 24 24">
//                   <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//                 </svg>

//                 {/* Review text */}
//                 <p style={{ fontSize: "13.5px", color: "#374151", lineHeight: "1.7", margin: 0, flex: 1 }}>
//                   {r.text}
//                 </p>

//                 {/* Stars */}
//                 <div style={{ display: "flex", gap: "2px" }}>
//                   {stars(r.rating)}
//                 </div>

//                 {/* Author */}
//                 <div style={{ display: "flex", alignItems: "center", gap: "10px", borderTop: "1px solid #f3f0ff", paddingTop: "14px" }}>
//                   <div style={{
//                     width: "40px", height: "40px", borderRadius: "50%",
//                     backgroundColor: r.bg, color: r.color,
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     fontSize: "13px", fontWeight: "700", flexShrink: 0
//                   }}>
//                     {r.avatar}
//                   </div>
//                   <div>
//                     <p style={{ fontSize: "14px", fontWeight: "600", color: "#1f1235", margin: 0 }}>{r.name}</p>
//                     <p style={{ fontSize: "12px", color: "#9ca3af", margin: 0 }}>{r.subject} · {r.location}</p>
//                   </div>
//                   <div style={{ marginLeft: "auto" }}>
//                     <span style={{
//                       fontSize: "11px", fontWeight: "600", color: r.color,
//                       backgroundColor: r.bg, padding: "3px 10px", borderRadius: "20px"
//                     }}>
//                       {r.subject}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Banner */}
//         <div style={{
//           background: "linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #a855f7 100%)",
//           borderRadius: "24px", padding: "48px 40px",
//           display: "flex", alignItems: "center", justifyContent: "space-between",
//           boxShadow: "0 8px 32px rgba(147,51,234,0.3)"
//         }}>
//           <div>
//             <h2 style={{ fontSize: "24px", fontWeight: "700", color: "white", margin: "0 0 8px" }}>
//               আজই তোমার পড়াশোনা শুরু করো!
//             </h2>
//             <p style={{ fontSize: "14px", color: "#e9d5ff", margin: 0 }}>
//               হাজারো student ইতিমধ্যে MediQueue এ পড়ছে। তুমিও যোগ দাও।
//             </p>
//           </div>
//           <Link href="/tutors" style={{
//             backgroundColor: "white", color: "#9333ea",
//             fontWeight: "700", fontSize: "14px",
//             padding: "14px 28px", borderRadius: "14px",
//             textDecoration: "none", whiteSpace: "nowrap",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
//           }}>
//             Tutors দেখো →
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Abdul;



import React from 'react';
import Link from 'next/link';

const Abdul = () => {

  const reviews = [
    { name: "Tahmina Akter", subject: "Mathematics", location: "Dhaka", rating: 5, text: "MediQueue এ tutor খুঁজে পাওয়া অনেক সহজ ছিল। আমার HSC math এর result অনেক ভালো হয়েছে। Tutor ভাইয়া খুব ধৈর্য ধরে বুঝিয়েছেন।", avatar: "TA", color: "#9333ea", bg: "#f3e8ff" },
    { name: "Rafiul Islam", subject: "Physics", location: "Chittagong", rating: 5, text: "অনেক ভালো platform। Session book করা অনেক easy। Tutor অনেক experienced ছিলেন। পরীক্ষায় A+ পেয়েছি, সত্যিই অনেক উপকার হয়েছে।", avatar: "RI", color: "#0891b2", bg: "#e0f2fe" },
    { name: "Nusrat Jahan", subject: "English", location: "Sylhet", rating: 5, text: "Spoken English এ অনেক দুর্বল ছিলাম। MediQueue এর tutor এর সাহায্যে এখন confidently কথা বলতে পারি। Highly recommended!", avatar: "NJ", color: "#16a34a", bg: "#dcfce7" },
    { name: "Arman Hossain", subject: "Chemistry", location: "Rajshahi", rating: 4, text: "Verified tutors হওয়ায় বিশ্বাস করতে পেরেছিলাম। Payment process সম্পূর্ণ secure। আবারও book করব ইনশাআল্লাহ।", avatar: "AH", color: "#d97706", bg: "#fef3c7" },
    { name: "Sumaiya Begum", subject: "Biology", location: "Khulna", rating: 5, text: "Medical admission এর জন্য Biology তে help দরকার ছিল। এখানে অনেক experienced tutor পেয়েছি। Result অনেক ভালো হয়েছে।", avatar: "SB", color: "#db2777", bg: "#fce7f3" },
    { name: "Mehedi Hassan", subject: "Bangla", location: "Barisal", rating: 5, text: "SSC পরীক্ষার আগে Bangla তে help নিয়েছিলাম। Tutor আপু অনেক friendly ছিলেন। Time মতো session হয়েছে, কোনো সমস্যা হয়নি।", avatar: "MH", color: "#7c3aed", bg: "#ede9fe" },
  ];

  const stars = (count) => Array.from({ length: 5 }, (_, i) => (
    <svg key={i} width="14" height="14" fill={i < count ? "#f59e0b" : "#e5e7eb"} viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ));

  return (
    <section style={{ backgroundColor: "#f5f3ff", padding: "clamp(32px, 5vw, 60px) clamp(16px, 4vw, 24px)" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>

        {/* Why Choose Us */}
        <div style={{ marginBottom: "60px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <p style={{ fontSize: "13px", fontWeight: "600", color: "#9333ea", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Why MediQueue</p>
            <h2 style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: "700", color: "#1f1235", margin: 0 }}>Learn smarter, not harder</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {[
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: "#9333ea", bg: "#f3e8ff", title: "Verified Tutors", desc: "সকল tutor আমাদের expert team দ্বারা যাচাই করা হয়েছে।" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", color: "#0891b2", bg: "#e0f2fe", title: "Flexible Timing", desc: "তোমার সময়মতো session book করো — সকাল, বিকেল বা রাত।" },
              { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", color: "#16a34a", bg: "#dcfce7", title: "Safe & Secure", desc: "তোমার payment ও data সম্পূর্ণ সুরক্ষিত আমাদের platform এ।" },
            ].map((item) => (
              <div key={item.title} style={{ backgroundColor: "white", borderRadius: "20px", padding: "24px", border: "1px solid #ede9fe", boxShadow: "0 2px 12px rgba(147,51,234,0.06)" }}>
                <div style={{ width: "48px", height: "48px", backgroundColor: item.bg, borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                  <svg width="22" height="22" fill="none" stroke={item.color} strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 style={{ fontSize: "15px", fontWeight: "700", color: "#1f1235", margin: "0 0 6px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.6", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div style={{ marginBottom: "60px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <p style={{ fontSize: "13px", fontWeight: "600", color: "#9333ea", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Simple Steps</p>
            <h2 style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: "700", color: "#1f1235", margin: 0 }}>কিভাবে কাজ করে?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
            {[
              { step: "01", title: "Browse Tutors", desc: "Subject ও area অনুযায়ী tutor খোঁজো", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
              { step: "02", title: "Check Profile", desc: "Rating, experience ও fee দেখো", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
              { step: "03", title: "Book Session", desc: "তোমার পছন্দের সময়ে book করো", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
              { step: "04", title: "Start Learning", desc: "Tutor এর সাথে যুক্ত হয়ে শেখা শুরু করো", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
            ].map((item) => (
              <div key={item.step} style={{ backgroundColor: "white", borderRadius: "20px", padding: "24px", border: "1px solid #ede9fe", textAlign: "center", boxShadow: "0 2px 12px rgba(147,51,234,0.06)" }}>
                <div style={{ width: "48px", height: "48px", backgroundColor: "#f3e8ff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                  <svg width="20" height="20" fill="none" stroke="#9333ea" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <span style={{ fontSize: "11px", fontWeight: "700", color: "#c084fc", letterSpacing: "0.08em" }}>{item.step}</span>
                <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#1f1235", margin: "4px 0 6px" }}>{item.title}</h4>
                <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: "1.5", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: "60px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <p style={{ fontSize: "13px", fontWeight: "600", color: "#9333ea", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Student Reviews</p>
            <h2 style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: "700", color: "#1f1235", margin: "0 0 8px" }}>তারা কী বলছে?</h2>
            <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>হাজারো সন্তুষ্ট student এর মধ্যে থেকে কিছু কথা</p>
          </div>

          {/* mobile 1col, tablet 2col, desktop 3col */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ backgroundColor: "white", borderRadius: "20px", padding: "24px", border: "1px solid #ede9fe", boxShadow: "0 2px 12px rgba(147,51,234,0.06)", display: "flex", flexDirection: "column", gap: "14px" }}>
                <svg width="28" height="28" fill="#ede9fe" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p style={{ fontSize: "13.5px", color: "#374151", lineHeight: "1.7", margin: 0, flex: 1 }}>{r.text}</p>
                <div style={{ display: "flex", gap: "2px" }}>{stars(r.rating)}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", borderTop: "1px solid #f3f0ff", paddingTop: "14px", flexWrap: "wrap" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: r.bg, color: r.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "700", flexShrink: 0 }}>
                    {r.avatar}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "14px", fontWeight: "600", color: "#1f1235", margin: 0 }}>{r.name}</p>
                    <p style={{ fontSize: "12px", color: "#9ca3af", margin: 0 }}>{r.subject} · {r.location}</p>
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: "600", color: r.color, backgroundColor: r.bg, padding: "3px 10px", borderRadius: "20px", flexShrink: 0 }}>
                    {r.subject}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #a855f7 100%)",
          borderRadius: "24px",
          padding: "clamp(28px, 4vw, 48px) clamp(20px, 4vw, 40px)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "20px",
          boxShadow: "0 8px 32px rgba(147,51,234,0.3)"
        }}>
          <div>
            <h2 style={{ fontSize: "clamp(18px, 3vw, 24px)", fontWeight: "700", color: "white", margin: "0 0 8px" }}>
              আজই তোমার পড়াশোনা শুরু করো!
            </h2>
            <p style={{ fontSize: "14px", color: "#e9d5ff", margin: 0 }}>
              হাজারো student ইতিমধ্যে MediQueue এ পড়ছে। তুমিও যোগ দাও।
            </p>
          </div>
          <Link href="/tutors" style={{
            backgroundColor: "white", color: "#9333ea",
            fontWeight: "700", fontSize: "14px",
            padding: "14px 28px", borderRadius: "14px",
            textDecoration: "none", whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)", flexShrink: 0
          }}>
            Tutors দেখো →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Abdul;