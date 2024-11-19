"use client";

import { MagicCard } from "../ui/magic-card";
import { Facebook, Github, Home, Mail, Phone } from "lucide-react";
// import telegram from "../../public/icons/telegram-48.png";
import { Separator } from "../ui/separator";
import Hover from "../effect/hover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

const tabbars = [
  [
    {
      name: "Home",
      icon: Home,
      isImage: false,
    },
  ],
  [
    {
      name: "Gmail",
      icon: Mail,
      isImage: false,
    },
    {
      name: "Phone",
      icon: Phone,
      isImage: false,
    },
  ],
  [
    {
      name: "Github",
      icon: Github,
      isImage: false,
    },
    {
      name: "Facebook",
      icon: Facebook,
      isImage: false,
    },
    // {
    //   name: "Telegram",
    //   icon: telegram,
    //   isImage: true,
    // },
  ],
];

const Tabbar = () => {

  return (
    <MagicCard className="flex items-center border rounded-3xl fixed bottom-5 left-1/2 transform -translate-x-1/2 w-fit h-[60px] bg-transparent z-50 backdrop-blur-lg px-6">
      <div className="flex items-center gap-3 bg-transparent">
        {tabbars.map((tab, index) => (
          <div key={index} className="flex items-center gap-6 text-[12px]">
            {tab.map((item, index) => (
              <Hover scale={0.9} key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="duration-300 hover:p-3 hover:bg-zinc-900 rounded-3xl cursor-pointer text-zinc-500">
                      <item.icon className="w-4 h-4 object-cover" />
                    </div>
                  </TooltipTrigger>

                  <TooltipContent className="border rounded-3xl px-3 py-1 backdrop-blur-lg text-xs absolute -top-2">
                    {item.name}
                  </TooltipContent>
                </Tooltip>
              </Hover>
            ))}

            {index !== 2 && (
              <Separator orientation="vertical" className="h-4 bg-zinc-500" />
            )}
          </div>
        ))}
      </div>
    </MagicCard>
  );
};

export default Tabbar;
