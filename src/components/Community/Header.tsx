import { Community } from "@/atoms/communities";
import Image from "next/image";
import React from "react";
import { FaReddit } from "react-icons/fa";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  const isJoined: boolean = true; // we will add the communitySnippets to the state and the check if they
  // if this community is available in the state, if so then we will change this isJoined button to a state var
  // and do suitable changes
  return (
    <div className="flex flex-col w-full h-[146px] lg:h-[180px]">
      <div className="h-1/2 bg-blue-400" />
      <div className="flex justify-center bg-white flex-grow">
        <div className="flex w-11/12 max-w-[860px] ">
          {communityData.imageUrl ? (
            <Image
              src={communityData.imageUrl}
              height={64}
              width={64}
              alt="Community Image"
            />
          ) : (
            <FaReddit
              fontSize={64}
              className="relative -top-4 text-blue-500 border-4 border-gray-400 "
              style={{ borderRadius: "50%" }}
            />
          )}
          <div className="flex p-5 items-center">
            <div className="flex flex-col mr-6">
              <div className="font-semibold text-2xl">{communityData.id}</div>
              <div className="font-semibold text-sm text-gray-500">
                r/{communityData.id}
              </div>
            </div>
            {isJoined ? (
              <button className="bg-white hover:bg-gray-100 h-[40px] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow transition-all duration-300">
                Leave
              </button>
            ) : (
              <button className="bg-blue-500 px-6 h-[40px] hover:bg-blue-700 text-white font-bold rounded-2xl transition-all duration-300">
                Join
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;