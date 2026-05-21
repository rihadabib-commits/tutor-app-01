// import Link from "next/link";

// export default function Banner() {
//   return (
//     <div style={{
//       background: "#0f0720", borderRadius: "24px", padding: "56px 48px",
//       display: "flex", alignItems: "center", justifyContent: "space-between",
//       gap: "40px", position: "relative", overflow: "hidden",
//       margin: "24px auto", maxWidth: "1200px", width: "calc(100% - 48px)"
//     }}>

//       {/* Grid bg */}
//       <div style={{
//         position: "absolute", inset: 0,
//         backgroundImage: "linear-gradient(rgba(147,51,234,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(147,51,234,0.06) 1px,transparent 1px)",
//         backgroundSize: "40px 40px", pointerEvents: "none"
//       }} />
//       {/* Glow orbs */}
//       <div style={{ position: "absolute", width: "500px", height: "500px", background: "radial-gradient(circle,rgba(147,51,234,0.25) 0%,transparent 70%)", top: "-100px", right: "-100px", pointerEvents: "none" }} />
//       <div style={{ position: "absolute", width: "300px", height: "300px", background: "radial-gradient(circle,rgba(168,85,247,0.15) 0%,transparent 70%)", bottom: "-80px", left: "100px", pointerEvents: "none" }} />

//       {/* LEFT */}
//       <div style={{ flex: 1, position: "relative", zIndex: 2 }}>

//         {/* Badge */}
//         <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(147,51,234,0.2)", border: "1px solid rgba(147,51,234,0.4)", color: "#c084fc", fontSize: "12px", fontWeight: "500", padding: "6px 14px", borderRadius: "20px", marginBottom: "22px" }}>
//           <span style={{ width: "6px", height: "6px", background: "#a855f7", borderRadius: "50%", display: "inline-block" }} />
//           Better Learning. Better Future.
//         </div>

//         {/* Heading */}
//         <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: "800", color: "white", lineHeight: "1.1", marginBottom: "16px" }}>
//           Find the Perfect Tutor<br />
//           &amp; <span style={{ color: "#a855f7" }}>Book</span> Effortlessly
//         </h1>

//         <p style={{ fontSize: "15px", color: "#94a3b8", lineHeight: "1.7", maxWidth: "380px", marginBottom: "28px" }}>
//           Connect with verified tutors, book online sessions and achieve your academic goals with ease.
//         </p>

//         {/* Buttons */}
//         <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
//           <Link href="/tutors" style={{
//             background: "#9333ea", color: "white", padding: "13px 26px",
//             borderRadius: "12px", fontSize: "14px", fontWeight: "600",
//             textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px"
//           }}>
//             Explore Tutors →
//           </Link>
//           <Link href="#how-it-works" style={{
//             background: "transparent", color: "#c084fc",
//             border: "1px solid rgba(147,51,234,0.4)",
//             padding: "13px 22px", borderRadius: "12px",
//             fontSize: "14px", fontWeight: "500", textDecoration: "none"
//           }}>
//             How it works
//           </Link>
//         </div>

//         {/* Stats */}
//         <div style={{ display: "flex", gap: "24px", marginTop: "32px", alignItems: "center" }}>
//           {[
//             { n: "500+", l: "Verified Tutors" },
//             { n: "10k+", l: "Sessions Booked" },
//             { n: "4.9★", l: "Avg Rating" },
//           ].map((s, i) => (
//             <div key={s.l} style={{ display: "flex", alignItems: "center", gap: "24px" }}>
//               {i > 0 && <div style={{ width: "1px", height: "36px", background: "rgba(147,51,234,0.3)" }} />}
//               <div>
//                 <div style={{ fontSize: "22px", fontWeight: "800", color: "white" }}>{s.n}</div>
//                 <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>{s.l}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* RIGHT — Floating cards */}
//       <div style={{ flex: "0 0 320px", position: "relative", zIndex: 2 }}>

//         {/* Float badge */}
//         <div style={{
//           position: "absolute", top: "-16px", right: "-16px",
//           background: "#9333ea", borderRadius: "14px", padding: "10px 16px", zIndex: 3
//         }}>
//           <div style={{ fontSize: "13px", fontWeight: "800", color: "white" }}>New Session!</div>
//           <div style={{ fontSize: "11px", color: "#d8b4fe" }}>Just booked · Physics</div>
//         </div>

//         {/* Tutor card */}
//         <div style={{ background: "#1a0d2e", border: "1px solid rgba(147,51,234,0.3)", borderRadius: "20px", padding: "20px", marginBottom: "12px" }}>
//           <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
//             <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "linear-gradient(135deg,#7c3aed,#a855f7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "800", color: "white", flexShrink: 0 }}>
//               AR
//             </div>
//             <div style={{ flex: 1 }}>
//               <div style={{ fontSize: "15px", fontWeight: "700", color: "white" }}>Arif Rahman</div>
//               <div style={{ fontSize: "12px", color: "#7c3aed" }}>Physics · HSC</div>
//             </div>
//             <div style={{ background: "#14532d", color: "#4ade80", fontSize: "11px", padding: "4px 10px", borderRadius: "20px" }}>Available</div>
//           </div>

//           <div>
//             {["HSC", "Online", "Sun–Thu"].map(tag => (
//               <span key={tag} style={{ display: "inline-block", background: "rgba(147,51,234,0.2)", color: "#c084fc", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", marginRight: "6px" }}>{tag}</span>
//             ))}
//           </div>

//           <div style={{ marginTop: "14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//             <div style={{ fontSize: "20px", fontWeight: "800", color: "white" }}>
//               ৳800<span style={{ fontSize: "12px", color: "#64748b", fontWeight: "400" }}>/hr</span>
//             </div>
//             <Link href="/tutors" style={{ background: "#9333ea", color: "white", fontSize: "12px", fontWeight: "600", padding: "8px 16px", borderRadius: "10px", textDecoration: "none" }}>
//               Book Now
//             </Link>
//           </div>
//         </div>

//         {/* Verified card */}
//         <div style={{ background: "#0d1a2e", border: "1px solid rgba(56,189,248,0.2)", borderRadius: "16px", padding: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
//           <div style={{ width: "40px", height: "40px", background: "rgba(56,189,248,0.1)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//             <svg width="20" height="20" fill="none" stroke="#38bdf8" strokeWidth={2} viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </div>
//           <div>
//             <div style={{ fontSize: "14px", fontWeight: "700", color: "white" }}>Verified & Trusted</div>
//             <div style={{ fontSize: "12px", color: "#475569" }}>All tutors manually reviewed</div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

import Link from "next/link";

export default function Banner() {
  return (
    <div style={{
      background: "#0f0720", borderRadius: "24px", padding: "clamp(32px, 5vw, 56px) clamp(20px, 4vw, 48px)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      flexWrap: "wrap", gap: "40px", position: "relative", overflow: "hidden",
      margin: "24px auto", maxWidth: "1200px", width: "calc(100% - 32px)"
    }}>

      {/* Grid bg */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(147,51,234,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(147,51,234,0.06) 1px,transparent 1px)",
        backgroundSize: "40px 40px", pointerEvents: "none"
      }} />
      {/* Glow orbs */}
      <div style={{ position: "absolute", width: "500px", height: "500px", background: "radial-gradient(circle,rgba(147,51,234,0.25) 0%,transparent 70%)", top: "-100px", right: "-100px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: "300px", height: "300px", background: "radial-gradient(circle,rgba(168,85,247,0.15) 0%,transparent 70%)", bottom: "-80px", left: "100px", pointerEvents: "none" }} />

      {/* LEFT */}
      <div style={{ flex: "1 1 300px", position: "relative", zIndex: 2, minWidth: 0 }}>

        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(147,51,234,0.2)", border: "1px solid rgba(147,51,234,0.4)", color: "#c084fc", fontSize: "12px", fontWeight: "500", padding: "6px 14px", borderRadius: "20px", marginBottom: "22px" }}>
          <span style={{ width: "6px", height: "6px", background: "#a855f7", borderRadius: "50%", display: "inline-block" }} />
          Better Learning. Better Future.
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: "clamp(24px, 5vw, 46px)", fontWeight: "800", color: "white", lineHeight: "1.15", marginBottom: "16px" }}>
          Find the Perfect Tutor<br />
          &amp; <span style={{ color: "#a855f7" }}>Book</span> Effortlessly
        </h1>

        <p style={{ fontSize: "clamp(13px, 2vw, 15px)", color: "#94a3b8", lineHeight: "1.7", maxWidth: "380px", marginBottom: "28px" }}>
          Connect with verified tutors, book online sessions and achieve your academic goals with ease.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/tutors" style={{
            background: "#9333ea", color: "white", padding: "12px 22px",
            borderRadius: "12px", fontSize: "14px", fontWeight: "600",
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px"
          }}>
            Explore Tutors →
          </Link>
          <Link href="#how-it-works" style={{
            background: "transparent", color: "#c084fc",
            border: "1px solid rgba(147,51,234,0.4)",
            padding: "12px 18px", borderRadius: "12px",
            fontSize: "14px", fontWeight: "500", textDecoration: "none"
          }}>
            How it works
          </Link>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "32px", alignItems: "center" }}>
          {[
            { n: "500+", l: "Verified Tutors" },
            { n: "10k+", l: "Sessions Booked" },
            { n: "4.9★", l: "Avg Rating" },
          ].map((s, i) => (
            <div key={s.l} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              {i > 0 && <div style={{ width: "1px", height: "36px", background: "rgba(147,51,234,0.3)" }} />}
              <div>
                <div style={{ fontSize: "clamp(18px, 3vw, 22px)", fontWeight: "800", color: "white" }}>{s.n}</div>
                <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — mobile এ লুকানো থাকবে, md+ এ দেখাবে */}
      <div style={{ flex: "0 1 320px", position: "relative", zIndex: 2, display: "var(--banner-right-display, flex)", flexDirection: "column", minWidth: "260px" }}>

        {/* Float badge */}
        <div style={{
          position: "absolute", top: "-16px", right: "-8px",
          background: "#9333ea", borderRadius: "14px", padding: "10px 16px", zIndex: 3
        }}>
          <div style={{ fontSize: "13px", fontWeight: "800", color: "white" }}>New Session!</div>
          <div style={{ fontSize: "11px", color: "#d8b4fe" }}>Just booked · Physics</div>
        </div>

        {/* Tutor card */}
        <div style={{ background: "#1a0d2e", border: "1px solid rgba(147,51,234,0.3)", borderRadius: "20px", padding: "20px", marginBottom: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "linear-gradient(135deg,#7c3aed,#a855f7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "800", color: "white", flexShrink: 0 }}>
              AR
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: "15px", fontWeight: "700", color: "white" }}>Arif Rahman</div>
              <div style={{ fontSize: "12px", color: "#7c3aed" }}>Physics · HSC</div>
            </div>
            <div style={{ background: "#14532d", color: "#4ade80", fontSize: "11px", padding: "4px 10px", borderRadius: "20px", flexShrink: 0 }}>Available</div>
          </div>

          <div>
            {["HSC", "Online", "Sun–Thu"].map(tag => (
              <span key={tag} style={{ display: "inline-block", background: "rgba(147,51,234,0.2)", color: "#c084fc", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", marginRight: "6px", marginBottom: "4px" }}>{tag}</span>
            ))}
          </div>

          <div style={{ marginTop: "14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontSize: "20px", fontWeight: "800", color: "white" }}>
              ৳800<span style={{ fontSize: "12px", color: "#64748b", fontWeight: "400" }}>/hr</span>
            </div>
            <Link href="/tutors" style={{ background: "#9333ea", color: "white", fontSize: "12px", fontWeight: "600", padding: "8px 16px", borderRadius: "10px", textDecoration: "none" }}>
              Book Now
            </Link>
          </div>
        </div>

        {/* Verified card */}
        <div style={{ background: "#0d1a2e", border: "1px solid rgba(56,189,248,0.2)", borderRadius: "16px", padding: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "40px", height: "40px", background: "rgba(56,189,248,0.1)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="20" height="20" fill="none" stroke="#38bdf8" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: "700", color: "white" }}>Verified & Trusted</div>
            <div style={{ fontSize: "12px", color: "#475569" }}>All tutors manually reviewed</div>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          [style*="--banner-right-display"] {
            display: none !important;
          }
        }
      `}</style>

    </div>
  );
