import { analyticsEventTracker } from "../utils/analyticsEventTracker";
import email from "../assets/img/gmail.png";

const Contact = () => {
  const emailButtonClick = () => {
    analyticsEventTracker("Email", "Sent Email");
  };

  return (
    <div
      name="contact"
      className="flex flex-col items-center py-16 px-5 md:px-20 lg:px-52"
    >
      <>
        <a
          className="flex transition ease-in-out delay-150 hover:translate-x-[8px] w-max relative text-center uppercase border-b-2 dark:border-zinc-300 border-stone-800 pb-1 tracking-wider"
          href="mailto:ethanliu549@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => emailButtonClick()}
        >
          <img
            className="mr-3"
            src={email}
            alt="email icon"
            width="20px"
            height="20px"
          />
          Just don't spam me
        </a>
      </>
    </div>
  );
};

export default Contact;
