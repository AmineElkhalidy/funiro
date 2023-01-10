import React from "react";

// Image
import Image from "next/image";

// Icon
import { UserCircleIcon } from "@heroicons/react/24/outline";

const Profile = () => {
  return (
    <div className="inline-block">
      {/* <Image src={""} alt="" className="rounded-full w-7 h-7" /> */}
      <UserCircleIcon className="w-[1.8rem] h-[1.8rem] rounded-full cursor-pointer" />
    </div>
  );
};

export default Profile;
