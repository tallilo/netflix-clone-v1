import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

import React from "react";

interface AccountMenuProps {
  visible?: boolean;
}

export default function AccountMenu({ visible }: AccountMenuProps) {
  const { data } = useCurrentUser();
  if (!visible) return null;

  return (
    <div className="bg-black w-56 absolute top-14 right-0 flex-col py-5 border-2 border-gray-800 flex">
      <div className="flex-col flex gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center 2-full">
          <img
            className="w-8 rounded-md"
            src="/images/default-blue.png"
            alt="Profile Picture"
          />
          <p className="text-white text-sm group-hover/item:underline">
            {data?.name}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
}
