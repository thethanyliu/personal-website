import TechItem from "./TechItem";
import next from "../../assets/logos/nextjs.png";
import prisma from "../../assets/logos/prisma.png";
import aws from "../../assets/logos/aws.png";
import git from "../../assets/logos/git.png";
import github from "../../assets/logos/github.png";
import sql from "../../assets/logos/postgreSQL.png";
import tailwind from "../../assets/logos/tailwind.png";
import bash from "../../assets/logos/bash.png";

function Tech() {
  const tech = [
    {
      id: "t1",
      title: "Next JS",
      image: next,
    },
    {
      id: "t7",
      title: "Prisma",
      image: prisma,
    },
    {
      id: "t8",
      title: "AWS",
      image: aws,
    },
    {
      id: "t5",
      title: "Tailwind CSS",
      image: tailwind,
    },
    {
      id: "t6",
      title: "Bash",
      image: bash,
    },
    {
      id: "t2",
      title: "Github",
      image: github,
    },
    {
      id: "t3",
      title: "Git",
      image: git,
    },
    {
      id: "t4",
      title: "MySQL",
      image: sql,
    },
  ];

  return (
    <div
      name="tech"
      className="flex flex-col pb-24 pt-10 px-5 md:px-24 lg:px-36 xl:px-60"
    >
      <div>
        <h1 className="text-3xl font-semibold drop-shadow-md">
          What I Work With
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {tech.map((element) => {
          return <TechItem title={element.title} image={element.image} />;
        })}
      </div>
    </div>
  );
}

export default Tech;
