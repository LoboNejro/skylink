"use client"

import TopBar from "./TopBar";
import { pageTitles } from "@constants";
import { usePathname } from "next/navigation";

const MainContainer = ({ children }) => {
  // Get the current url path
  const currentPath = usePathname();

  const regex = /^\/([^\/]+)/;
  const firstPath = currentPath.match(regex)
    ? currentPath.match(regex)[0]
    : currentPath;

  // Get title of current path
  const title = pageTitles.find((page) => page.url === firstPath)?.title || "";

  return (
    <section className="flex flex-col flex-1 px-4 md:px-10 lg:px-4 xl:px-20 max-w-3xl 2xl:max-w-5xl">
      <TopBar />
      <div className="mt-6 mb-20">
        <h1 className="mb-5 text-heading2-bold text-light-1 max-sm:text-heading3-bold">
          {title}
        </h1>
        <div className="custom-scrollbar h-screen overflow-y-scroll">
          {children}
        </div>
      </div>
    </section>
  );
};

export default MainContainer;