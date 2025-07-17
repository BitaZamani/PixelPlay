import Link from "next/link";
import React from "react";
import SocialMedia from "../pageSections/socialMedia";

const Footer = () => {
  const menuItems = [
    { label: "Home", address: "/" },
    { label: "Games", address: "/games" },
    { label: "About Me", address: "/aboutme" },
    { label: "Login", address: "/login" },
  ];

  return (
    <div
      className={`text-purple-100 rounded-t-2xl bg-purple-950 flex items-center justify-evenly relative`}
    >
      <div>
        <span className="text-sm md:text-base">Quick Links</span>
        <ul className="text-xs md:text-sm space-y-1.5 text-center ">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-purple-400">
              <Link href={item.address}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-5 my-5 flex-col">
        <span>Contact me:</span>
        <SocialMedia />
      </div>
      <span className="absolute bottom-0 text-xs">
        © 2025 Bita Zamani. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
