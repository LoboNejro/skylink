"use client";

import { sidebarLinks } from "@constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <Link
            key={link.label}
            href={link.route}
            className={`flex items-center gap-3 py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${
              isActive
                ? "bg-gradient-to-r from-indigo-500 to-indigo-700 text-white border-2 border-indigo-400"
                : "bg-transparent text-gray-400 border-2 border-gray-600"
            } hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-700 hover:text-white hover:border-indigo-500`}
          >
            {/* Icon inside a glowing gradient circle */}
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full p-2 shadow-md transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl">
              {link.icon}
            </div>
            <p className="text-gray-400 text-lg font-medium">{link.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
