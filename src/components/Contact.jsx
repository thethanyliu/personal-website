import { useInView } from "react-intersection-observer";
import useAnalyticsEventTracker from "./analyticsEventTracker";
import email from "../assets/img/gmail.png";

const Contact = () => {
  const gaEventTracker = useAnalyticsEventTracker("Contact");
  const { ref: refOne, inView: oneInView } = useInView({ triggerOnce: true });
  const { ref: refTwo, inView: twoInView } = useInView({ triggerOnce: true });

  return (
    <div
      name="contact"
      className="bg-storm flex flex-col items-center pb-20 px-5 md:px-24 lg:px-56 xl:px-80"
    >
      <div ref={refOne} className={oneInView ? "animatefu" : ""}>
        <h2 className="text-cloud font-semibold uppercase text-center underline underline-offset-2 pb-3">
          Contact
        </h2>
        <h1 className="font-bold text-center text-4xl text-slate-50 pb-5">
          I may be an ISTJ, but...
        </h1>
        <p className="text-slate-50 text-lg text-center mx-8 md:mx-20 xl:mx-72 pb-8">
          That doesn't mean I don't like meeting new people or discussing new
          ideas, so please, feel free to hit me up about any tech related
          projects and/or ideas that you find are worth sharing. Hit me at
          ethanliu549@gmail.
        </p>
      </div>
      <div ref={refTwo} className={twoInView? "animatefr": ""}>
        <a
          className="flex transition ease-in-out delay-150 hover:translate-x-[8px] w-max relative text-center text-slate-50 uppercase border-b-2 border-zinc-300 pb-1 tracking-wider"
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
      </div>
    </div>
  );
};

export default Contact;