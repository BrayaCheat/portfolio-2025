"use client"

import OrbitingCircles from "../ui/orbiting-circles";
import TypingAnimation from "../ui/typing-animation";
import Mangekyou_Sharingan from "../../public/images/Mangekyou_Sharingan";
import BlurFade from "../ui/blur-fade";

const Hero = () => {

  const message = "Software Developer";

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      
      <BlurFade delay={0.25} inView>
        <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
          <p className="uppercase">Braya Cheat</p>
        </h1>
      </BlurFade>

      <BlurFade delay={0.25 * 2} inView>
        <TypingAnimation text={message} className="text-sm" duration={100}/>
      </BlurFade>
      

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Mangekyou_Sharingan />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Mangekyou_Sharingan />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Mangekyou_Sharingan />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Mangekyou_Sharingan />
      </OrbitingCircles>
    </div>
  );
};

export default Hero;
