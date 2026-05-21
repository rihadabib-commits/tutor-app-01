// "use client";
// import { useState } from "react";
// import TutorCard from "@/components/Tutor";

// const TutorsClient = ({ teachers }) => {
//   const [search, setSearch] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   const filtered = teachers.filter((t) => {
//     const matchName = t.Name?.toLowerCase().includes(search.toLowerCase());
//     const sessionDate = new Date(t.sessionStartDate);
//     const matchStart = startDate ? sessionDate >= new Date(startDate) : true;
//     const matchEnd = endDate ? sessionDate <= new Date(endDate) : true;
//     return matchName && matchStart && matchEnd;
//   });

//   const handleReset = () => {
//     setSearch("");
//     setStartDate("");
//     setEndDate("");
//   };

//   return (
//     <div>

//       {/* Filter Bar */}
//       <div style={{
//         background: "white", borderRadius: "16px",
//         padding: "16px 20px", marginBottom: "24px",
//         boxShadow: "0 2px 12px rgba(147,51,234,0.06)",
//         border: "1px solid #ede9fe",
//         display: "flex", alignItems: "center",
//         flexWrap: "wrap", gap: "12px"
//       }}>

//         {/* Search */}
//         <div style={{ flex: "1 1 200px", minWidth: "160px" }}>
//           <label style={{ fontSize: "11px", fontWeight: "600", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
//             Search Tutor
//           </label>
//           <div style={{ position: "relative" }}>
//             <svg style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} width="14" height="14" fill="none" stroke="#9333ea" strokeWidth={2} viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search tutor by name..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               style={{
//                 width: "100%", paddingLeft: "32px", paddingRight: "12px",
//                 paddingTop: "8px", paddingBottom: "8px",
//                 border: "1px solid #ede9fe", borderRadius: "10px",
//                 fontSize: "13px", color: "#1f1235", outline: "none",
//                 backgroundColor: "#faf9ff", boxSizing: "border-box"
//               }}
//             />
//           </div>
//         </div>

//         {/* Start Date */}
//         <div style={{ flex: "1 1 160px", minWidth: "140px" }}>
//           <label style={{ fontSize: "11px", fontWeight: "600", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
//             Start Date
//           </label>
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             style={{
//               width: "100%", padding: "8px 12px",
//               border: "1px solid #ede9fe", borderRadius: "10px",
//               fontSize: "13px", color: "#1f1235", outline: "none",
//               backgroundColor: "#faf9ff", boxSizing: "border-box"
//             }}
//           />
//         </div>

//         {/* End Date */}
//         <div style={{ flex: "1 1 160px", minWidth: "140px" }}>
//           <label style={{ fontSize: "11px", fontWeight: "600", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
//             End Date
//           </label>
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             style={{
//               width: "100%", padding: "8px 12px",
//               border: "1px solid #ede9fe", borderRadius: "10px",
//               fontSize: "13px", color: "#1f1235", outline: "none",
//               backgroundColor: "#faf9ff", boxSizing: "border-box"
//             }}
//           />
//         </div>

//         {/* Reset */}
//         <div style={{ flex: "0 0 auto", alignSelf: "flex-end" }}>
//           <button
//             onClick={handleReset}
//             style={{
//               padding: "8px 18px", borderRadius: "10px",
//               border: "1px solid #ede9fe", background: "white",
//               color: "#9333ea", fontSize: "13px", fontWeight: "600",
//               cursor: "pointer", whiteSpace: "nowrap"
//             }}
//           >
//             Reset Filters
//           </button>
//         </div>

//       </div>

//       {/* Result count */}
//       <p style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "16px" }}>
//         {filtered.length} tutor{filtered.length !== 1 ? "s" : ""} found
//       </p>

//       {/* Cards Grid */}
//       {filtered.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filtered.map(teacher => (
//             <TutorCard key={teacher._id} teacher={teacher} />
//           ))}
//         </div>
//       ) : (
//         <div style={{ textAlign: "center", padding: "60px 20px" }}>
//           <div style={{ fontSize: "48px", marginBottom: "12px" }}>🔍</div>
//           <p style={{ color: "#9ca3af", fontSize: "14px" }}>No tutors found. Try different filters.</p>
//           <button onClick={handleReset} style={{ marginTop: "12px", color: "#9333ea", fontSize: "13px", fontWeight: "600", background: "none", border: "none", cursor: "pointer" }}>
//             Clear filters
//           </button>
//         </div>
//       )}

//     </div>
//   );
// };

// export default TutorsClient;


// "use client";
// import { useState } from "react";
// import TutorCard from "@/components/Tutor";

// const TutorsClient = ({ teachers }) => {
//   const [search, setSearch] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   // সেফটি চেক: যদি কোনো কারণে ব্যাকএন্ড থেকে ডেটা না আসে বা অ্যারে না হয়
//   const safeTeachers = Array.isArray(teachers) ? teachers : [];

//   const filtered = safeTeachers.filter((t) => {
//     // সমাধান ১: ব্যাকএন্ডে name ছোট হাতের বা বড় হাতের যাই হোক না কেন, দুটিই চেক করবে
//     const teacherName = t.name || t.Name || "";
//     const matchName = teacherName.toLowerCase().includes(search.toLowerCase());

//     // সমাধান ২: ডেট ফিল্টারিং আরও নিরাপদ করা হলো
//     if (!t.sessionStartDate) {
//       // যদি টিচারের কোনো ডেট দেওয়া না থাকে, তবে সার্চ ম্যাচ করলেই তাকে দেখাবে
//       return matchName && !startDate && !endDate; 
//     }

//     const sessionDate = new Date(t.sessionStartDate);
    
//     // ডেটটি সঠিক কিনা চেক করা হচ্ছে
//     const isValidDate = !isNaN(sessionDate.getTime());

//     if (!isValidDate) {
//       return matchName; // ডেট ইনভ্যালিড হলে শুধু নাম দিয়ে ফিল্টার করবে, কোড ক্র্যাশ করবে না
//     }

//     const matchStart = startDate ? sessionDate >= new Date(startDate) : true;
//     const matchEnd = endDate ? sessionDate <= new Date(endDate) : true;

//     return matchName && matchStart && matchEnd;
//   });

//   const handleReset = () => {
//     setSearch("");
//     setStartDate("");
//     setEndDate("");
//   };

//   return (
//     <div>
//       {/* Filter Bar */}
//       <div style={{
//         background: "white", borderRadius: "16px",
//         padding: "16px 20px", marginBottom: "24px",
//         boxShadow: "0 2px 12px rgba(147,51,234,0.06)",
//         border: "1px solid #ede9fe",
//         display: "flex", alignItems: "center",
//         flexWrap: "wrap", gap: "12px"
//       }}>

//         {/* Search */}
//         <div style={{ flex: "1 1 200px", minWidth: "160px" }}>
//           <label style={{ fontSize: "11px", fontWeight: "600", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
//             Search Tutor
//           </label>
//           <div style={{ position: "relative" }}>
//             <svg style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} width="14" height="14" fill="none" stroke="#9333ea" strokeWidth={2} viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search tutor by name..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               style={{
//                 width: "100%", paddingLeft: "32px", paddingRight: "12px",
//                 paddingTop: "8px", paddingBottom: "8px",
//                 border: "1px solid #ede9fe", borderRadius: "10px",
//                 fontSize: "13px", color: "#1f1235", outline: "none",
//                 backgroundColor: "#faf9ff", boxSizing: "border-box"
//               }}
//             />
//           </div>
//         </div>

//         {/* Start Date */}
//         <div style={{ flex: "1 1 160px", minWidth: "140px" }}>
//           <label style={{ fontSize: "11px", fontWeight: "600", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
//             Start Date
//           </label>
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             style={{
//               width: "100%", padding: "8px 12px",
//               border: "1px solid #ede9fe", borderRadius: "10px",
//               fontSize: "13px", color: "#1f1235", outline: "none",
//               backgroundColor: "#faf9ff", boxSizing: "border-box"
//             }}
//           />
//         </div>

//         {/* End Date */}
//         <div style={{ flex: "1 1 160px", minWidth: "140px" }}>
//           <label style={{ fontSize: "11px", fontWeight: "600", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
//             End Date
//           </label>
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             style={{
//               width: "100%", padding: "8px 12px",
//               border: "1px solid #ede9fe", borderRadius: "10px",
//               fontSize: "13px", color: "#1f1235", outline: "none",
//               backgroundColor: "#faf9ff", boxSizing: "border-box"
//             }}
//           />
//         </div>

//         {/* Reset */}
//         <div style={{ flex: "0 0 auto", alignSelf: "flex-end" }}>
//           <button
//             onClick={handleReset}
//             style={{
//               padding: "8px 18px", borderRadius: "10px",
//               border: "1px solid #ede9fe", background: "white",
//               color: "#9333ea", fontSize: "13px", fontWeight: "600",
//               cursor: "pointer", whiteSpace: "nowrap"
//             }}
//           >
//             Reset Filters
//           </button>
//         </div>

//       </div>

//       {/* Result count */}
//       <p style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "16px" }}>
//         {filtered.length} tutor{filtered.length !== 1 ? "s" : ""} found
//       </p>

//       {/* Cards Grid */}
//       {filtered.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filtered.map(teacher => (
//             <TutorCard key={teacher._id} teacher={teacher} />
//           ))}
//         </div>
//       ) : (
//         <div style={{ textAlign: "center", padding: "60px 20px" }}>
//           <div style={{ fontSize: "48px", marginBottom: "12px" }}>🔍</div>
//           <p style={{ color: "#9ca3af", fontSize: "14px" }}>No tutors found. Try different filters.</p>
//           <button onClick={handleReset} style={{ marginTop: "12px", color: "#9333ea", fontSize: "13px", fontWeight: "600", background: "none", border: "none", cursor: "pointer" }}>
//             Clear filters
//           </button>
//         </div>
//       )}

//     </div>
//   );
// };

// export default TutorsClient;


"use client";
import { useState } from "react";
import TutorCard from "@/components/Tutor";

const TutorsClient = ({ teachers }) => {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const safeTeachers = Array.isArray(teachers) ? teachers : [];

  const filtered = safeTeachers.map(t => {
    // প্রতিটি টিচারের অবজেক্টকে নরমাল করে নেওয়া হচ্ছে যাতে বানান ছোট/বড় হাত যাই হোক কাজ করে
    return {
      ...t,
      name: t.name || t.Name || "",
      price: t.price || t.Price || 0,
      category: t.category || t.Category || t.subject || "General"
    };
  }).filter((t) => {
    const matchName = t.name.toLowerCase().includes(search.toLowerCase());

    if (!t.sessionStartDate) {
      return matchName && !startDate && !endDate; 
    }

    const sessionDate = new Date(t.sessionStartDate);
    const isValidDate = !isNaN(sessionDate.getTime());

    if (!isValidDate) {
      return matchName;
    }

    const matchStart = startDate ? sessionDate >= new Date(startDate) : true;
    const matchEnd = endDate ? sessionDate <= new Date(endDate) : true;

    return matchName && matchStart && matchEnd;
  });

  const handleReset = () => {
    setSearch("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div>
      {/* Filter Bar */}
      <div style={{
        background: "white", borderRadius: "16px",
        padding: "16px 20px", marginBottom: "24px",
        boxShadow: "0 2px 12px rgba(147,51,234,0.06)",
        border: "1px solid #ede9fe",
        display: "flex", alignItems: "center",
        flexWrap: "wrap", gap: "12px"
      }}>

        {/* Search */}
        <div style={{ flex: "1 1 200px", minWidth: "160px" }}>
          <label style={{ fontSize: "11px", fontWeight: "600", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
            Search Tutor
          </label>
          <div style={{ position: "relative" }}>
            <svg style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} width="14" height="14" fill="none" stroke="#9333ea" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search tutor by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%", paddingLeft: "32px", paddingRight: "12px",
                paddingTop: "8px", paddingBottom: "8px",
                border: "1px solid #ede9fe", borderRadius: "10px",
                fontSize: "13px", color: "#1f1235", outline: "none",
                backgroundColor: "#faf9ff", boxSizing: "border-box"
              }}
            />
          </div>
        </div>

        {/* Start Date */}
        <div style={{ flex: "1 1 160px", minWidth: "140px" }}>
          <label style={{ fontSize: "11px", fontWeight: "600", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{
              width: "100%", padding: "8px 12px",
              border: "1px solid #ede9fe", borderRadius: "10px",
              fontSize: "13px", color: "#1f1235", outline: "none",
              backgroundColor: "#faf9ff", boxSizing: "border-box"
            }}
          />
        </div>

        {/* End Date */}
        <div style={{ flex: "1 1 160px", minWidth: "140px" }}>
          <label style={{ fontSize: "11px", fontWeight: "600", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{
              width: "100%", padding: "8px 12px",
              border: "1px solid #ede9fe", borderRadius: "10px",
              fontSize: "13px", color: "#1f1235", outline: "none",
              backgroundColor: "#faf9ff", boxSizing: "border-box"
            }}
          />
        </div>

        {/* Reset */}
        <div style={{ flex: "0 0 auto", alignSelf: "flex-end" }}>
          <button
            onClick={handleReset}
            style={{
              padding: "8px 18px", borderRadius: "10px",
              border: "1px solid #ede9fe", background: "white",
              color: "#9333ea", fontSize: "13px", fontWeight: "600",
              cursor: "pointer", whiteSpace: "nowrap"
            }}
          >
            Reset Filters
          </button>
        </div>

      </div>

      {/* Result count */}
      <p style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "16px" }}>
        {filtered.length} tutor{filtered.length !== 1 ? "s" : ""} found
      </p>

      {/* Cards Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(teacher => (
            <TutorCard key={teacher._id} teacher={teacher} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
          <div style={{ fontSize: "48px", marginBottom: "12px" }}>🔍</div>
          <p style={{ color: "#9ca3af", fontSize: "14px" }}>No tutors found. Try different filters.</p>
          <button onClick={handleReset} style={{ marginTop: "12px", color: "#9333ea", fontSize: "13px", fontWeight: "600", background: "none", border: "none", cursor: "pointer" }}>
            Clear filters
          </button>
        </div>
      )}

    </div>
  );
};

export default TutorsClient;