"use client";

import Link from "next/link";
import CourseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

const FeaturedCourses = () => {

    const featuredCouses = CourseData.courses.filter((course:Course) => course.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
        <div>
            <h2 className="text-center p-2 text-xl md:text-2xl text-red-500 font-bold">Featured Courses</h2>
            <p className="mt-2 text-3xl  leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center">LEARN WITH THE BEST</p>
        </div>

        <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCouses.map((course:Course)=>(
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">

                                <p className="text-lg sm:text-xl text-black mt-2 mb-4 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`courses/${course.slug}`} className="mt-3">
                                    Learn More
                                </Link>
                            </div>

                        </BackgroundGradient>
                    </div>
                ))}
            </div>
            </div>

            <div className="mt-20 text-center">
                <Link href="/courses" className="bg-white text-black text-md md:text-xl p-1 md:p-2 rounded-sm font-semibold">

                    View All Courses
                </Link>
            </div>

    </div>
  )
};

export default FeaturedCourses;
