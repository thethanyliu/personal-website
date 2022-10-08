import logo from "../assets/img/logo.png";

function Footer() {
  return (
    <div className="bg-storm flex w-full h-16 z-10 justify-between items-center px-5 md:px-24 lg:px-56 xl:px-80">
      <>
        <h1 className="text-[#A9A9A9] text-2xl font-mono">Built By Me :)</h1>
      </>
      <div>
        <img src={logo} alt="personal logo" width="65px" height="65px" />
      </div>
    </div>
  );
}

export default Footer;
