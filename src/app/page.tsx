import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import StickyScrol from "@/components/StickyScroll";
import TestimonialCards from "@/components/TestimonialCards";
import Image from "next/image";

import UpcomingWebnairs from '@/components/UpcomingWebnairs';
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">


      <HeroSection/>
      <FeaturedCourses />
      <StickyScrol />
      <TestimonialCards />
      <UpcomingWebnairs />
      <Instructors />
    </div>
   
  );
}
