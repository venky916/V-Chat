"use client";
import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface AvatarGroupProps {
  users: User[];
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ users = [] }) => {
  const slicedUsers = users.slice(0, 3);
  const positionMap = {
    0: "top-0 left-[12px]",
    1: "bottom-0",
    2: "bottom-0 right-0",
  };

  // const slicedUsers = users.slice(0, 4);
  // const positionMap = {
  //   0: "top-0 left-0",
  //   1: "bottom-0 left-0",
  //   2: "bottom-0 right-0",
  //   3:"top-0 right-0"
  // };
  return (
    <div className="relative h-11 w-11">
      {slicedUsers.map((user, index) => (
        <div
          key={user.id}
          className={`absolute inline-block rounded-full overflow-hidden h-[21px] w-[21px] cursor-pointer ${
            positionMap[index as keyof typeof positionMap]
          }`}
        >
          <Image
            alt="avatar"
            fill
            src={user?.image || "/images/avatar-placeholder.png"}
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
