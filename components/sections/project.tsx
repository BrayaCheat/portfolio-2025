"use client";

import Label from "../common/label";
import ProjectCard from "../common/projectCard";
import Hover from "../effect/hover";
import Transition from "../effect/transition";
import projectData from "../../app/data/projectData.json";
// import Iphone15Pro from "../ui/iphone-15-pro";

const Project = () => {
  const handleCta = (payload: string) => {
    console.log(payload);
  };

  return (
    <div className="project-section grid place-items-center gap-9">
      <Label text="Show Cases" size="text-sm" />
      {/* <Iphone15Pro className="w-full h-full object-contain" src='/idea22.mp4'/> */}

      <div className="md:grid-cols-2 grid-cols-1 grid gap-3">
        {projectData.map((item, index) => (
          <Transition key={index}>
            <Hover scale={1}>
              <ProjectCard cta={handleCta} {...item} />
            </Hover>
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default Project;
