"use client";

import Label from "../common/label";
import { MagicCard } from "../ui/magic-card";
import WorkCard from "../common/workCard";
import Transition from "../effect/transition";
import Hover from "../effect/hover";
import educationData from "../../app/data/educationData.json";

const Education = () => {
  return (
    <div className="education-section grid gap-6">
      <Label text="Education" size="text-sm" />
      {educationData.map((item, index) => (
        <Transition key={index}>
          <Hover scale={0.9}>
            <MagicCard className="rounded-3xl">
              <WorkCard {...item} />
            </MagicCard>
          </Hover>
        </Transition>
      ))}
    </div>
  );
};

export default Education;
