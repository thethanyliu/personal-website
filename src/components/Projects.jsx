import newsapp from "../assets/img/news-comp-app.png";
import github from "../assets/logos/githubblue.png";

const Projects = () => {
  return (
    <div className="flex flex-col dark:bg-teal py-12 px-5 md:px-24 lg:px-52 xl:px-64">
      <>
        <h1 className="text-3xl font-semibold text-center drop-shadow-md">
          Projects
        </h1>
      </>
      <div className="grid md:grid-cols-2 pt-5">
        <img
          src={newsapp}
          className="rounded-md"
          width="400px"
          height="200px"
        />
        <div className="justify-center">
          A web application allowing users to make side by side comparisons of
          the articles produced by different major Western media corporations.
        </div>
      </div>
    </div>
  );
};

export default Projects;
