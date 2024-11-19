"use client";

import Marquee from "@/components/ui/marquee";
import { MagicCard } from "../ui/magic-card";
import Image from "next/image";
import Label from "../common/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Transition from "../effect/transition";
import Hover from "../effect/hover";
import skillData from '../../app/data/skillData.json'

const Skill = () => {

  const top = [...skillData.frontend, ...skillData.backend];
  const bottom = [...skillData.database, ...skillData.tools];

  return (
    <div className="relative flex w-full flex-col gap-6 items-center justify-center overflow-hidden">
      <Label text="Tech Stacks" size="text-sm" />

        <Marquee pauseOnHover className="[--duration:20s]">
          {top.map((item, index) => (
            <Transition key={index}>
              <Hover scale={0.9}>
                <MagicCard className="rounded-3xl">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        src={item.image || ''}
                        alt={item.name || ''}
                        width={40}
                        height={40}
                      />
                    </TooltipTrigger>
                    <TooltipContent className="border rounded-3xl px-3 py-1 backdrop-blur-lg text-xs">
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </MagicCard>
              </Hover>
            </Transition>
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {bottom.map((item, index) => (
            <Transition key={index}>
              <Hover scale={0.9}>
                <MagicCard className="rounded-3xl">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        src={item.image || ''}
                        alt={item.name || ''}
                        width={40}
                        height={40}
                      />
                    </TooltipTrigger>
                    <TooltipContent className="border rounded-3xl px-3 py-1 backdrop-blur-lg text-xs">
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </MagicCard>
              </Hover>
            </Transition>
          ))}
        </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default Skill;
