import React, { useEffect } from "react";
import { MagicCard } from "../ui/magic-card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Play } from "lucide-react";
import ShinyButton from "../ui/shiny-button";
import vuejs from "../../public/icons/vuejs-48.png";
import nuxtjs from "../../public/icons/nuxt-js-50.png";
import reactjs from "../../public/icons/react-50.png";
import nextjs from "../../public/icons/nextjs-48.png";
import tailwind from "../../public/icons/tailwindcss-50.png";
// import nodejs from "../../public/icons/nodejs-50.png";
// import expressjs from "../../public/icons/express-js-50.png";
// import mongo from "../../public/icons/mongodb-50.png";
import springboot from "../../public/icons/spring-boot-50.png";
import docker from "../../public/icons/docker-48.png";
import git from "../../public/icons/git-50.png";
import supabase from "../../public/icons/supabase-48.png";
import mysql from "../../public/icons/mysql-48.png";
import prisma from "../../public/icons/prisma-orm-50.png";
import telegram from "../../public/icons/telegram-48.png";
import pinia from "../../public/icons/pinia-30.png";
import tmdb from "../../public/icons/tmdb-48.png";
import Label from "./label";
import HeroVideoDialog from "../ui/hero-video-dialog";
import Hover from "../effect/hover";
import Transition from "../effect/transition";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

type ProjectCardProps = {
  thumbnail: string,
  image: string[];
  video: string;
  title: string;
  category: string;
  description: string;
  url: string;
  techStacks: string[];
  cta: (msg: string) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  video,
  title,
  category,
  description,
  cta,
  url,
  techStacks,
  thumbnail
}) => {
  const handleChildEvent = () => {
    cta("hello emit");
  };

  useEffect(() => {
    handleChildEvent();
  });

  const handleDemoEvent = (url: string) => {
    window.open(url, "_blank");
  };

  const mapIcon = (val: string) => {
    if (!val) return;
    switch (val) {
      case "VueJs":
        return vuejs;
      case "NuxtJs":
        return nuxtjs;
      case "ReactJs":
        return reactjs;
      case "NextJs":
        return nextjs;
      case "Supabase":
        return supabase;
      case "TailwindCSS":
        return tailwind;
      case "Telegram API":
        return telegram;
      case "Pinia":
        return pinia;
      case "TMDB API":
        return tmdb;
      case "Prisma":
        return prisma;
      case "Git":
        return git;
      case "Springboot":
        return springboot;
      case "Docker":
        return docker;
      case "Mysql":
        return mysql;
      default:
        break;
    }
  };

  return (
    <MagicCard className="rounded-3xl">
      <div className="grid gap-3">
        <div className="flex items-center gap-3">
          <Image
            src={thumbnail || ''}
            alt={thumbnail || ''}
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10"
          />
          <div className="flex-1">
            <p className="text-[14px]">{title}</p>
            <div>
              <p className="text-zinc-500 text-[12px]">{category}</p>
            </div>
          </div>

          <Transition>
            <Hover scale={0.9}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ShinyButton
                    className="font-semibold rounded-full px-2"
                    onClick={() => handleDemoEvent(url)}
                  >
                    <Play className="w-4 h-4" />
                  </ShinyButton>
                </TooltipTrigger>
                <TooltipContent className="border rounded-3xl px-3 py-1 backdrop-blur-lg text-xs">
                  <p>{"Demo"}</p>
                </TooltipContent>
              </Tooltip>
            </Hover>
          </Transition>
        </div>

        <div className="grid gap-3 overflow-auto place-items-start">
          <p className="text-[12px] md:h-[150px] h-full text-zinc-300">{description}</p>
          <Label text="Tech Stacks" size="text-[12px]" />
          <div className="flex items-center gap-3">
            {techStacks.map((item, index) => (
              <Transition key={index}>
                <Hover scale={1.1}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        src={mapIcon(item) || ""}
                        alt={item || ''}
                        width={20}
                        height={20}
                        objectFit="cover"
                        className="w-4 h-4 object-cover"
                      />
                    </TooltipTrigger>
                    <TooltipContent className="border rounded-3xl px-3 py-1 backdrop-blur-lg text-xs">
                      <p>{item}</p>
                    </TooltipContent>
                  </Tooltip>
                </Hover>
              </Transition>
            ))}
          </div>
          <Label text='Domain' size="text-[12px]" />
          <a href={url || ''} target="_blank" className="text-[12px] underline text-zinc-300">{url || ''}</a>
        </div>

        <div>
          <Carousel>
            <CarouselContent className="overflow-x-auto">
              <CarouselItem className="basis-[90%]">
                <HeroVideoDialog
                  animationStyle="from-center"
                  videoSrc={
                    video ||
                    "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                  }
                  thumbnailSrc={thumbnail || '/myprofile.jpg'}
                  thumbnailAlt={thumbnail || '/myprofile.jpg'}
                />
              </CarouselItem>

              {image.map((item, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={item || ''}
                    alt={item || ''}
                    width={1200}
                    height={300}
                    className="rounded-3xl h-[250px] object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </MagicCard>
  );
};

export default ProjectCard;
