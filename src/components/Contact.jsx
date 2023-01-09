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
      className="flex flex-col items-center pb-20 px-5 md:px-20 lg:px-56"
    >
      <div ref={refOne} className={`animatefu ${oneInView? " appearfu" : ""}`}>
        <h2 className="dark:text-cloud font-semibold uppercase text-center underline underline-offset-2 pb-3">
          Contact
        </h2>
        <h1 className="font-bold text-center text-4xl pb-5">
          I may be an ISTJ, but...
        </h1>
        <p className="text-lg text-center mx-8 md:mx-20 lg:px-32 pb-8">
          That doesn't mean I don't like meeting new people or discussing new
          ideas, so please, feel free to hit me up about any tech related
          projects and/or ideas that you find are worth sharing.
        </p>
      </div>
      <div ref={refTwo} className={`animatefr ${twoInView? " appearfr" : ""}`}>
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
      </div>
    </div>
  );
};

export default Contact;