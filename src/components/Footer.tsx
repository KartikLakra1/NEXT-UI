"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 dark:bg-neutral-950 dark:text-white text-black bg-white w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-full md:p-3 gap-10 text-center">
        <div className=" flex flex-col items-start p-3 gap-2">
          <h1 className="text-xl md:text-2xl font-semibold ">About Us</h1>
          <p className="flex text-left">
            Music School is a premier institution dedicated to teaching students
            with the impeccable skills in this competitive world and make them
            stand at par with their competitors , ememse yourself in this
            musical journey.
          </p>
        </div>

        <div className=" flex flex-col items-start p-3 gap-1">
          <h1 className="text-xl md:text-2xl font-semibold ">Quick Links</h1>
          <div className="flex flex-col text-left md:gap-1">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Courses</Link>
            <Link href={"/"}>Contact</Link>
          </div>
        </div>

        <div className=" flex flex-col items-start p-3 gap-2">
          <h1 className="text-xl md:text-2xl font-semibold ">Follow Us</h1>
          <div className="flex gap-1">
            <Link href={"www.facebook.com"}>Facebook</Link>
            <Link href={"www.twitter.com"}>Twitter</Link>
            <Link href={"www.instagram.com"}>Instagram</Link>
          </div>
        </div>

        <div className=" flex flex-col items-start p-3 gap-2">
          <h1 className="text-xl md:text-2xl font-semibold ">Contact Us</h1>
          <p>New Delhi , India</p>
          <p>Delhi 10001</p>
          <p>Email : info@musicschool.com</p>
          <p>Phone : (123) 456-7890</p>
        </div>
      </div>

      <div>
        <p className="font-light p-3">™ © made with love by KARTIK LAKRA.</p>
      </div>
    </div>
  );
};

export default Footer;
