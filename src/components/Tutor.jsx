


// import { Button } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const TutorCard = ({ teacher }) => {
//   const { _id, imageUrl, Name, price, category, sessionStartDate } = teacher;

//   return (
//     <div className="border border-gray-200   rounded-3xl p-5 shadow-sm">

//       {/* IMAGE FIX SECTION */}
//       <div className="relative w-full h-60 rounded-2xl overflow-hidden">
//         <Image
//           src={imageUrl}
//           alt={Name}
//           fill
//           className="object-cover"
//         />
//       </div>

//       <div className="mt-4 p-2">

//         <h2 className="text-xl font-bold">{Name}</h2>

//         <div className="text-gray-500 font-bold">{category}</div>

//         <div className="text-sm mt-2">
//           Session Start Date: {sessionStartDate}
//         </div>

//         <div className="text-sm">
//           Available: Sun - Thu 5:00 PM - 8:00 PM
//         </div>

//         <div className="font-semibold mt-2">
//           Fee: ৳{price}/hr
//         </div>

//       </div>
// <Link href={`/add-tutor/${_id}`}>
// <Button className="mt-4 w-full ">
//         Book session
//       </Button>

// </Link>


//     </div>
//   );
// };

// export default TutorCard;











import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TutorCard = ({ teacher }) => {
  const { _id, imageUrl, Name, price, category, sessionStartDate } = teacher;

  return (
    <Card className="w-full  rounded-2xl shadow-md overflow-hidden border border-gray-100">

      <div style={{ position: "relative", width: "100%", height: "260px", overflow: "hidden" }}>
        <Image
          src={imageUrl}
          alt={Name}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent)"
        }} />

        <div style={{ position: "absolute", top: 12, left: 12 }}>
          <Chip size="sm" className="bg-white/90 text-purple-700 font-semibold text-xs">
            {category}
          </Chip>
        </div>

        <div style={{ position: "absolute", top: 12, right: 12 }}>
          <Chip size="sm" className="bg-green-600 text-black text-xs">
            ● Available
          </Chip>
        </div>
      </div>

      <div className="px-4 pt-3 pb-4">
        <h2 className="text-xl font-bold text-gray-900">{Name}</h2>

        <div className="flex flex-col gap-1.5 mt-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg width="16" height="16" fill="none" stroke="#9333ea" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Starts {sessionStartDate}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg width="16" height="16" fill="none" stroke="#9333ea" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Sun – Thu · 5:00 – 8:00 PM
          </div>
        </div>

        <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">৳{price}</span>
            <span className="text-xs text-gray-400 ml-1">/ hr</span>
          </div>
          <Link href={`/add-tutor/${_id}`}>
            <Button size="sm" className="bg-purple-600 text-white font-semibold rounded-xl px-5">
              Book session
            </Button>
          </Link>
        </div>
      </div>

    </Card>
  );
};

export default TutorCard;