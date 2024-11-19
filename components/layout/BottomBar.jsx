"use client"

import { sidebarLinks } from "@constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <div className="bottom-0 z-20 sticky flex justify-between items-center md:hidden bg-dark-1 px-6 py-3 w-full">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;

        // Split the label just once here
        const labelText = link.label.split(/\s+/)[0];

        return (
          <Link
            key={link.label}
            href={link.route}
            className={`flex gap-2 items-center rounded-lg py-2 px-4 ${
              isActive ? "bg-purple-1" : ""
            }`}
          >
            {link.icon} 
            <p className="max-sm:hidden text-light-1 text-small-medium">{labelText}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
