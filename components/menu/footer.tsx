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
    <div className={`text-purple-100 rounded-t-2xl bg-purple-950`}>
      <div className="flex items-center justify-evenly py-2">
        <div className="space-y-2.5">
          <span className="text-sm md:text-base block">Quick Links</span>
          <div className="text-xs md:text-sm text-center flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <span key={index} className="hover:text-purple-400">
                <Link href={item.address}>{item.label}</Link>
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-5 my-5 flex-col">
          <span>Social Media</span>
          <SocialMedia />
        </div>
      </div>
      <div className="text-center text-xs">
        © 2025 Bita Zamani. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
