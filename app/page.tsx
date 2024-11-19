import Skill from "@/components/sections/skill";
import Hero from "@/components/sections/hero";
import Work from "@/components/sections/work";
import Education from "@/components/sections/education";
import Project from "@/components/sections/project";

const Home = () => {
  return (
    <main className="grid gap-9">
      <Hero />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-9">
        <Work />
        <Education />
      </div>
      <Skill />
      <Project />
    </main>
  );
};

export default Home;
