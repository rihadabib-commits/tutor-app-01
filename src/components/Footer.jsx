// import Link from "next/link";
// import React from "react";

// const Footer = () => {
//   return (
//     <footer style={{ backgroundColor: "#0a0a0a", color: "#9ca3af", paddingTop: "56px", paddingBottom: "24px", paddingLeft: "24px", paddingRight: "24px", marginTop: "64px" }}>
//       <div style={{ maxWidth: "1152px", margin: "0 auto" }}>

//         {/* Top grid */}
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px", marginBottom: "48px" }}>

//           {/* Brand */}
//           <div>
//             <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
//               <div style={{ backgroundColor: "#9333ea", padding: "8px", borderRadius: "12px" }}>
//                 <svg width="20" height="20" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12 12 0 0112 21.5a12 12 0 01-6.16-10.922L12 14z" />
//                 </svg>
//               </div>
//               <span style={{ color: "white", fontWeight: "700", fontSize: "18px" }}>MediQueue</span>
//             </div>
//             <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#6b7280" }}>
//               Bangladesh er সেরা tutor booking platform। ঘরে বসেই সেরা শিক্ষকের সাথে যুক্ত হও।
//             </p>
//             <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
//               {[
//                 { label: "Facebook", d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
//                 { label: "Twitter", d: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
//                 { label: "Instagram", d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z" },
//               ].map((s) => (
//                 <button key={s.label} aria-label={s.label} style={{ backgroundColor: "#1f2937", padding: "8px", borderRadius: "8px", border: "none", cursor: "pointer" }}>
//                   <svg width="16" height="16" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d={s.d} />
//                   </svg>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Platform */}
//           <div>
//             <h4 style={{ color: "white", fontWeight: "600", marginBottom: "16px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Platform</h4>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
//               {["All Tutors", "Book a Session", "My Sessions", "Become a Tutor"].map((item) => (
//                 <li key={item}>
//                   <Link href="#" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "14px" }}>{item}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h4 style={{ color: "white", fontWeight: "600", marginBottom: "16px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Company</h4>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
//               {["About Us", "Blog", "Careers", "Contact"].map((item) => (
//                 <li key={item}>
//                   <Link href="#" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "14px" }}>{item}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Support */}
//           <div>
//             <h4 style={{ color: "white", fontWeight: "600", marginBottom: "16px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Support</h4>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
//               {["Help Center", "Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
//                 <li key={item}>
//                   <Link href="#" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "14px" }}>{item}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Stats bar */}
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", backgroundColor: "#111111", border: "1px solid #222", borderRadius: "16px", padding: "24px", marginBottom: "40px" }}>
//           {[
//             { number: "500+", label: "Verified Tutors" },
//             { number: "10,000+", label: "Sessions Booked" },
//             { number: "4.9★", label: "Average Rating" },
//           ].map((stat) => (
//             <div key={stat.label} style={{ textAlign: "center" }}>
//               <p style={{ fontSize: "24px", fontWeight: "700", color: "#c084fc", margin: 0 }}>{stat.number}</p>
//               <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>{stat.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Bottom bar */}
//         <div style={{ borderTop: "1px solid #222", paddingTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px", color: "#4b5563" }}>
//           <p style={{ margin: 0 }}>© 2026 MediQueue. All rights reserved.</p>
//           <p style={{ margin: 0, display: "flex", alignItems: "center", gap: "4px" }}>
//             Made with
//             <svg width="12" height="12" fill="#9333ea" viewBox="0 0 24 24">
//               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//             </svg>
//             in Bangladesh
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;




import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0a0a0a", color: "#9ca3af", paddingTop: "56px", paddingBottom: "24px", paddingLeft: "clamp(16px, 4vw, 24px)", paddingRight: "clamp(16px, 4vw, 24px)", marginTop: "64px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>

        {/* Top grid — mobile 1col, tablet 2col, desktop 4col */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "48px" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <div style={{ backgroundColor: "#9333ea", padding: "8px", borderRadius: "12px", flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12 12 0 0112 21.5a12 12 0 01-6.16-10.922L12 14z" />
                </svg>
              </div>
              <span style={{ color: "white", fontWeight: "700", fontSize: "18px" }}>MediQueue</span>
            </div>
            <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#6b7280" }}>
              Bangladesh er সেরা tutor booking platform। ঘরে বসেই সেরা শিক্ষকের সাথে যুক্ত হও।
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
              {[
                { label: "Facebook", d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label: "Twitter", d: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                { label: "Instagram", d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z" },
              ].map((s) => (
                <button key={s.label} aria-label={s.label} style={{ backgroundColor: "#1f2937", padding: "8px", borderRadius: "8px", border: "none", cursor: "pointer" }}>
                  <svg width="16" height="16" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.d} />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 style={{ color: "white", fontWeight: "600", marginBottom: "16px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Platform</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {["All Tutors", "Book a Session", "My Sessions", "Become a Tutor"].map((item) => (
                <li key={item}>
                  <Link href="#" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "14px" }}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "white", fontWeight: "600", marginBottom: "16px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Company</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {["About Us", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "14px" }}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 style={{ color: "white", fontWeight: "600", marginBottom: "16px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Support</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Help Center", "Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "14px" }}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats bar — mobile 1col, desktop 3col */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "16px", backgroundColor: "#111111", border: "1px solid #222", borderRadius: "16px", padding: "24px", marginBottom: "40px" }}>
          {[
            { number: "500+", label: "Verified Tutors" },
            { number: "10,000+", label: "Sessions Booked" },
            { number: "4.9★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "clamp(18px, 3vw, 24px)", fontWeight: "700", color: "#c084fc", margin: 0 }}>{stat.number}</p>
              <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #222", paddingTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", fontSize: "12px", color: "#4b5563" }}>
          <p style={{ margin: 0 }}>© 2026 MediQueue. All rights reserved.</p>
          <p style={{ margin: 0, display: "flex", alignItems: "center", gap: "4px" }}>
            Made with
            <svg width="12" height="12" fill="#9333ea" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            in Bangladesh
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;