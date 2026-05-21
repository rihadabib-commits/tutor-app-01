


import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TutorCard = ({ teacher }) => {
  // যদি কোনো কারণে teacher অবজেক্ট খালি আসে, তবে ক্র্যাশ করা ঠেকাবে
  if (!teacher) return null;

  // ডেটাবেজের বানান ছোট বা বড় হাতের যাই হোক, সেফলি ভ্যারিয়েবলে নেওয়া হচ্ছে
  const id = teacher._id;
  const name = teacher.name || teacher.Name || "Unknown Tutor";
  const imageUrl = teacher.imageUrl || "https://images.unsplash.com/photo-1544717305-2782549b5136"; // ডিফল্ট ইমেজ
  const price = teacher.price || teacher.Price || 0;
  const category = teacher.category || teacher.Category || teacher.subject || "General";
  const sessionStartDate = teacher.sessionStartDate || "Not Announced";

  return (
    <Card className="w-full rounded-2xl shadow-md overflow-hidden border border-gray-100">

      <div style={{ position: "relative", width: "100%", height: "260px", overflow: "hidden" }}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority={false}
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
          <Chip size="sm" className="bg-green-600 text-white text-xs">
            ● Available
          </Chip>
        </div>
      </div>

      <div className="px-4 pt-3 pb-4">
        <h2 className="text-xl font-bold text-gray-900">{name}</h2>

        <div className="flex flex-col gap-1.5 mt-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg width="16" height="16" fill="none" stroke="#9333ea" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Starts: {sessionStartDate}
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
          
          {/* আপনার সিঙ্গেল টিউটর/বুকিং পেজের সঠিক ডাইনামিক লিঙ্ক */}
          <Link href={`/add-tutor/${id}`}>
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