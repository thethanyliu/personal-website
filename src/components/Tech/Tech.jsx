import TechItem from "./TechItem";
import rea from "../../assets/logos/react.png";
import flask from "../../assets/logos/flask.png";
import git from "../../assets/logos/git.png";
import github from "../../assets/logos/github.png";
import sql from "../../assets/logos/sql.png";
import tailwind from "../../assets/logos/tailwind.png";

function Tech() {
  const tech = [
    {
      id: "t1",
      title: "React",
      image: rea,
    },
    {
      id: "t2",
      title: "Flask",
      image: flask,
    },
    {
      id: "t3",
      title: "Github",
      image: github,
    },
    {
      id: "t4",
      title: "Git",
      image: git,
    },
    {
      id: "t5",
      title: "MySQL",
      image: sql,
    },
    {
      id: "t6",
      title: "Tailwind CSS",
      image: tailwind,
    },
  ];

  return (
    <div name="tech" className="bg-pink flex flex-col py-20 px-5 md:px-24 lg:px-56 xl:px-80">
      <>
        <h1 className="text-3xl font-semibold text-slate-50">
          What I Work With
        </h1>
      </>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        <TechItem title={tech[0].title} image={tech[0].image} />
        <TechItem title={tech[1].title} image={tech[1].image} />
        <TechItem title={tech[2].title} image={tech[2].image} />
        <TechItem title={tech[3].title} image={tech[3].image} />
        <TechItem title={tech[4].title} image={tech[4].image} />
        <TechItem title={tech[5].title} image={tech[5].image} />
      </div>
    </div>
  );
}

export default Tech;
