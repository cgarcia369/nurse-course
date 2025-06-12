"use client";
import React from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const NavBarProfile = () => {
  const { data } = useSession();
  if (!data?.user) {
    return null;
  }
  const { user } = data;
  return (
    <Popover>
      <PopoverTrigger>
        <div className="cursor-pointer overflow-hidden rounded-full border border-gray-300 shadow-inner dark:border-gray-600">
          <span className="sr-only">Toggle dashboard menu</span>

          <Image
            src={user?.image ?? "https://picsum.photos/50/50"}
            alt="user image"
            width={50}
            height={50}
            className="size-10 object-cover"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div>
          <div
            className="cursor-pointer flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-600/10"
            onClick={() => {
              signOut();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
            Cerrar sesión
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NavBarProfile;
