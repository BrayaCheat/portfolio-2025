"use client";

import Label from "../common/label";
import { MagicCard } from "../ui/magic-card";
import WorkCard from "../common/workCard";
import Transition from "../effect/transition";
import Hover from '../effect/hover'
import workData from '../../app/data/workData.json'

const Work = () => {
  return (
    <div className="work-section grid gap-6">
      <Label text="Work Experience" size="text-sm" />
      {workData.map((item, index) => (
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

export default Work;
