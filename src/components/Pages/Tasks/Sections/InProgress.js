import {
  RiAttachment2,
  RiMore2Line,
  RiNotificationBadgeLine,
} from "react-icons/ri";
import { team1, team2, team3, team4, team5, page } from "../components/Images";

import HeadBody from "../components/HeadBody";
import { TeamItemSmall } from "../components/TeamItem";
import { useState } from "react";

export default function InProgress() {
  const [isOpen, setIsOpen] = useState(true);

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="border-2 border-gray-200 rounded-3xl px-4 pt-4 pb-1 h-fit">
      <HeadBody
        name="In Progress"
        isOpen={isOpen}
        onOpen={handleOpen}
        num={2}
      />
      <div
        className={`overflow-hidden ease-in-out duration-300 ${
          isOpen ? "max-h-[2000px]" : "max-h-0"
        }`}
      >
        {/* Box one */}
        <div className="my-3 rounded-2xl bg-gradient-to-b from-orange-200 to-orange-100 text-orange-700 p-4">
          {/* Header in Color Box */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <span className="bg-orange-50 py-[5px] px-[10px] rounded-lg border-[1px] border-orange-700/25 cursor-pointer text-sm">
                #screenshort
              </span>
              <span className="bg-orange-50 py-[5px] px-[10px] rounded-lg border-[1px] border-orange-700/25 cursor-pointer text-sm">
                #product
              </span>
            </div>
            <span className="border-[1px] border-orange-700/25 cursor-pointer p-1 rounded-lg hover:bg-orange-300/25 duration-300">
              <RiMore2Line />
            </span>
          </div>
          {/* Data in color box */}
          <div>
            <h3 className="font-bold text-md leading-none my-4">
              Wehiu product task and the task process pages
            </h3>
            <img
              className="border-[6px] rounded-lg border-orange-700/25"
              src={page}
              alt="page"
            />
            <p className="text-[12px] font-medium mt-3">
              Have to finish this before weekend
            </p>
            <div className="flex items-center justify-between text-[12px] mt-4 mb-2">
              <span>Progress</span>
              <span className="font-bold">90%</span>
            </div>
            <div className="w-full bg-orange-700/25 rounded-full h-2.5">
              <div
                className="bg-orange-700 h-2.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <ul className="flex ml-[15px]">
                <TeamItemSmall img={team1} />
                <TeamItemSmall img={team2} />
                <TeamItemSmall img={team3} />
              </ul>
              <div className="font-medium flex items-center justify-between gap-2">
                <div className="flex items-center justify-between gap-1 py-[3px] px-[8px] rounded-lg border-[1px] border-orange-700/25 cursor-pointer hover:bg-orange-200 duration-300">
                  <span>
                    <RiNotificationBadgeLine />
                  </span>
                  <span>6</span>
                </div>
                <div className="flex items-center justify-between gap-1 py-[3px] px-[8px] rounded-lg border-[1px] border-orange-700/25 cursor-pointer hover:bg-orange-200 duration-300">
                  <span>
                    <RiAttachment2 />
                  </span>
                  <span>1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Box two */}
        <div className="my-3 rounded-2xl bg-gradient-to-b from-green-200 to-green-100 text-green-700 p-4">
          {/* Header in Color Box */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <span className="bg-green-50 py-[5px] px-[10px] rounded-lg border-[1px] border-green-700/25 cursor-pointer text-sm">
                #prudcts
              </span>
              <span className="bg-green-50 py-[5px] px-[10px] rounded-lg border-[1px] border-green-700/25 cursor-pointer text-sm">
                #client
              </span>
            </div>
            <span className="border-[1px] border-green-700/25 cursor-pointer p-1 rounded-lg hover:bg-green-300/25 duration-300">
              <RiMore2Line />
            </span>
          </div>
          {/* Data in color box */}
          <div>
            <h3 className="font-bold text-md leading-none my-4">
              Design CRM shop product page responsive website
            </h3>
            <div className="flex items-center justify-between text-[12px] mt-4 mb-2">
              <span>Progress</span>
              <span className="font-bold">40%</span>
            </div>
            <div className="w-full bg-green-700/25 rounded-full h-2.5">
              <div
                className="bg-green-700 h-2.5 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <ul className="flex ml-[15px]">
                <TeamItemSmall img={team1} />
                <TeamItemSmall img={team2} />
                <TeamItemSmall img={team4} />
                <TeamItemSmall img={team5} />
              </ul>
              <div className="font-medium flex items-center justify-between gap-2">
                <div className="flex items-center justify-between gap-1 py-[3px] px-[8px] rounded-lg border-[1px] border-green-700/25 cursor-pointer hover:bg-green-200 duration-300">
                  <span>
                    <RiNotificationBadgeLine />
                  </span>
                  <span>12</span>
                </div>
                <div className="flex items-center justify-between gap-1 py-[3px] px-[8px] rounded-lg border-[1px] border-green-700/25 cursor-pointer hover:bg-green-200 duration-300">
                  <span>
                    <RiAttachment2 />
                  </span>
                  <span>8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
