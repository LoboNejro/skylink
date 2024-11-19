"use client";

import { UserButton, SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import Menu from './Menu';
import { Logout } from '@mui/icons-material';

const LeftSideBar = () => {
  return (
    <div className="top-0 left-0 sticky flex flex-col gap-6 max-md:hidden custom-scrollbar px-10 py-6 pr-20 2xl:w-[350px] h-screen overflow-auto">

      {/* Logo en la parte superior, antes del perfil */}
      <Link href="/" className="mb-6">
        <Image src="/assets/logo.png" alt="logo" width={200} height={200} />
      </Link>

      <div className="flex flex-col gap-2">
        {/* Perfil de usuario */}
        <div className="flex flex-col items-center gap-2 text-light-1">
          <Link href="/">
            <Image src="/assets/bot.png" alt="profile photo" width={50} height={50} className="rounded-full" />
          </Link>
          <p className="text-small-bold">Jonatan AS</p>
        </div>

        <div className="flex justify-between text-light-1">
          <div className="flex flex-col items-center">
            <p className="text-base-bold">10</p>
            <p className="text-tiny-medium">Post</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">0</p>
            <p className="text-tiny-medium">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">0</p>
            <p className="text-tiny-medium">Following</p>
          </div>
        </div>

        <hr />

        <Menu />

        <hr />

        
        <SignedIn>
          <div className="flex items-center gap-4">
            <UserButton appearance={{ baseTheme: 'dark' }} afterSignOutUrl="/sign-in" />
            <p className="text-body-bold text-light-1">Manage Account</p>
          </div>

          <div className="flex justify-center items-center mt-4">
            <SignOutButton>
              <div className="flex items-center gap-4 bg-gradient-to-r from-indigo-600 hover:from-purple-500 via-purple-700 to-pink-500 hover:to-indigo-600 hover:shadow-xl px-6 py-2 rounded-full transform transition-all duration-300 ease-in-out hover:scale-105">
                <Logout sx={{ color: "white", fontSize: "32px" }} />
                <p className="font-medium text-lg text-white">Sign Out</p>
              </div>
            </SignOutButton>
          </div>
        </SignedIn>

        {/* Bloque de usuario no autenticado */}
        <SignedOut>
          <div className="flex justify-center items-center mt-4">
            <Link href="/sign-in">
              <div className="flex items-center gap-4 bg-gradient-to-r from-teal-500 hover:from-cyan-500 via-blue-500 to-cyan-500 hover:to-teal-500 hover:shadow-xl px-6 py-2 rounded-full transform transition-all duration-300 ease-in-out hover:scale-105">
                <p className="font-medium text-lg text-white">Sign In</p>
              </div>
            </Link>
          </div>
        </SignedOut>
      </div>
    </div>
  );
};

export default LeftSideBar;
