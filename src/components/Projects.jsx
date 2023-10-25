import classes from "./Project.module.css";

const Projects = () => {
  return (
    <div className="flex flex-col dark:bg-storm pt-12 pb-28 px-5 md:px-12 lg:px-40 xl:px-96">
      <h1 className="text-3xl font-semibold text-center drop-shadow-md pb-3">
        Projects
      </h1>
      <div className="grid md:grid-cols-2 pt-5 pb-10">
        <>
          <a
            className={classes.newsComp}
            href="https://github.com/ethanliu666/news-comp-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img
            src={newsApp}
            className="rounded-md drop-shadow-md"
            width="400px"
            height="200px"
          /> */}
          </a>
        </>

        <div className="flex flex-col pt-8 lg:py-5 px-2 md:px-0">
          <a
            href="https://github.com/ethanliu666/news-comp-app"
            target="_blank"
            className="cursor-pointer text-xl pb-3 font-semibold"
            rel="noopener noreferrer"
          >
            <h2>News Comparison App</h2>
          </a>

          <p className="dark:text-slate-400 text-stone-800 justify-center items-center text-lg">
            A web application allowing users to make side by side comparisons of
            the articles produced by different major western media corporations.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 pt-5">
        <div className="hidden md:flex flex-col md:py-5">
          <a
            href="https://ecom-ethanliu666.vercel.app/"
            target="_blank"
            className="cursor-pointer text-xl pb-3 font-semibold"
            rel="noopener noreferrer"
          >
            <h2>Lightroom Presets E-commerce Site</h2>
          </a>
          <p className="dark:text-slate-400 text-stone-800 justify-center items-center text-lg">
            An e-commerce store selling my personal custom Lightroom Presets.
          </p>
        </div>
        <div className="flex flex-col md:hidden pb-5 pt-8 px-2 md:px-0">
          <a
            href="https://ecom-ethanliu666.vercel.app/"
            target="_blank"
            className="cursor-pointer text-xl pb-3 font-semibold"
            rel="noopener noreferrer"
          >
            <h2>Lightroom Presets E-commerce Site</h2>
          </a>
          <p className="dark:text-slate-400 text-stone-800 justify-centeritems-center text-lg">
            An e-commerce store selling my personal custom Lightroom Presets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
