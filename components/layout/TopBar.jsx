"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Add, Search, Logout } from "@mui/icons-material";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

const TopBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <div className="flex justify-between items-center shadow-md backdrop-blur-md p-2 rounded-full">
      {/* Campo de búsqueda */}
      <div className="relative flex items-center w-full max-w-md">
        <input
          type="text"
          className="border-white/20 px-3 py-1 rounded-full focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300 focus:outline-none bg-transparent border w-full"
          placeholder="Search posts, people, ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="right-2 absolute flex justify-center items-center bg-purple-500 hover:bg-purple-600 rounded-full w-7 h-7 text-white transition-all"
          onClick={() => search && router.push(`/search/posts/${search}`)}
        >
          <Search sx={{ fontSize: 16 }} />
        </button>
      </div>

      {/* Botón de Crear Post */}
      <button
        className="flex items-center gap-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 hover:shadow-md px-3 py-1 rounded-full text-sm text-white transform transition-all duration-300 hover:scale-105"
        onClick={() => router.push("/create-post")}
      >
        <Add sx={{ fontSize: 16 }} />
        <p>Create</p>
      </button>

      {/* Botón de Cerrar Sesión */}
      <SignedIn>
        <SignOutButton>
          <button className="flex items-center gap-1 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 hover:shadow-md px-3 py-1 rounded-full text-sm text-white transform transition-all duration-300 hover:scale-105">
            <Logout sx={{ fontSize: 16 }} />
          </button>
        </SignOutButton>
      </SignedIn>

      {/* Imagen de Perfil */}
      <Link href="/">
        <Image
          src="/assets/bot.png"
          alt="Profile photo"
          width={36}
          height={36}
          className="border-2 border-purple-500 rounded-full hover:scale-105 transition-transform"
        />
      </Link>
    </div>
  );
};

export default TopBar;
