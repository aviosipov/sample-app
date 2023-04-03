import React, { SVGProps, useEffect, useState } from "react";
import {
  ChatBubbleBottomCenterTextIcon,
  AcademicCapIcon,
  UsersIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";

import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChatBot,
  chatBotsState,
  defaultChatBot,
  getChatBot,
  userProfileState,
} from "../atoms/dataStore";
import { useRecoilValue } from "recoil";

interface SideMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

interface SideMenuItemProps {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  text: string;
  onClick?: () => void;
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({
  icon: Icon,
  text,
  onClick,
}) => (
  <div className="hover:bg-slate-300 h-12 cursor-pointer" onClick={onClick}>
    <div className="flex mb-4 p-5">
      <Icon className="h-4 w-4 text-gray-500 mr-3 mt-0.5" />
      <li className="mb-2">{text}</li>
    </div>
  </div>
);

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, closeMenu }) => {
  const userProfile = useRecoilValue(userProfileState);
  const chatBots = useRecoilValue(chatBotsState);
  const [chatBot, setChatBot] = useState<ChatBot>();

  useEffect(() => {
    setChatBot(
      getChatBot(chatBots, userProfile.activeChatBot) || defaultChatBot
    );
  }, [chatBots]);

  return (
    <aside
      className={`fixed z-10 inset-0  bg-orange-100 transform transition-all w-60 p-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } duration-300`}
    >
      <header className="flex items-center justify-between p-4 mt-4">
        <img src={chatBot?.logo} className="w-[8rem] object-contain" />
        <button className="p-1 rounded-full hover:text-gray-400 w-10 h-10">
          <XMarkIcon className="h-6 w-6 text-slate-400" />
        </button>
      </header>

      <nav className="p-0">
        <ul className="font-light">
          <SideMenuItem icon={AcademicCapIcon} text="Grow" />
          <SideMenuItem icon={ChatBubbleBottomCenterTextIcon} text="Share" />
          <SideMenuItem icon={UsersIcon} text="Therapists" />
          <SideMenuItem icon={Cog8ToothIcon} text="Profile" />
        </ul>
      </nav>
    </aside>
  );
};

export { SideMenu };
