import { useInView } from "react-intersection-observer";
import useAnalyticsEventTracker from "./analyticsEventTracker";
import email from "../assets/img/gmail.png";

const Contact = () => {
  const gaEventTracker = useAnalyticsEventTracker("Contact");
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      name="contact"
      className="bg-storm flex flex-col justify-center pb-20 px-5 md:px-24 lg:px-56 xl:px-80"
    >
      <h2 className="text-cloud font-semibold uppercase text-center underline underline-offset-2 pb-3">
        Contact
      </h2>
      <h1 className="font-bold text-center text-4xl text-slate-50 pb-5">
        I may be an ISTJ, but...
      </h1>
      <p className="text-slate-50 text-lg text-center mx-20 pb-5">
        That doesn't mean I don't like meeting new people or discussing new
        ideas, so please, feel free to hit me up about any tech related projects
        and/or ideas that you find are worth sharing. Hit me at ethanliu549@gmail.
      </p>
      <a
        style={{
          backgroundImage: `url(${email})`,
          backgroundPosition: "37% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "20px",
        }}
        className="transition ease-in-out delay-150 hover:translate-x-[8px] relative text-center text-slate-50 uppercase underline underline-offset-8 untracking-wider"
        href="mailto:ethanliu549@gmail.com"
        target="_blank"
      >
        Write me something
      </a>
    </div>
  );
};

export default Contact;
