
// এই ফাইলটিকে ডাইনামিক রেন্ডার করতে বাধ্য করার জন্য একদম উপরে এই লাইনটি দিন:
export const dynamic = 'force-dynamic'; 

import Abdul from "@/components/Abdul";
import Banner from "@/components/Banner";
import HeroBanner from "@/components/Banner";
import Navber from "@/components/Navber";
import Rihad from "@/components/Rihad";
import Wahid from "@/components/Wahid";
import { Card } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Banner/>
    <Wahid/>
    <Rihad/>
    <Abdul/>
   </div>
  );
}
