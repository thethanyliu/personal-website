import useAnalyticsEventTracker from "./analyticsEventTracker";
import email from "../assets/img/gmail.png";

const Contact = () => {
  const gaEventTracker = useAnalyticsEventTracker("Contact");

  return (
    <div
      name="contact"
      className="flex flex-col items-center pb-20 px-5 md:px-20 lg:px-52"
    >
      <>
        <h2 className="dark:text-cloud font-semibold uppercase text-center underline underline-offset-2 pb-3">
          Contact
        </h2>
        <h1 className="font-bold text-center text-4xl pb-5">
          I'm an ESTJ, so...
        </h1>
        <p className="text-lg text-center mx-8 md:mx-20 xl:px-56 pb-8">
          That means I enjoy hearing new ideas/projects whether they be tech
          related or otherwise. So, if you have anything you feel is worth
          sharing, feel free to reach out.
        </p>
      </>
      <>
        <a
          className="flex transition ease-in-out delay-150 hover:translate-x-[8px] w-max relative text-center uppercase border-b-2 dark:border-zinc-300 border-stone-800 pb-1 tracking-wider"
          href="mailto:ethanliu549@gmail.com"
          target="_blank"
          onClick={() => gaEventTracker("Email")}
        >
          <img
            className="mr-3"
            src={email}
            alt="email icon"
            width="20px"
            height="20px"
          />
          Write me something
        </a>
      </>
    </div>
  );
};

export default Contact;
