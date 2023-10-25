import HashLoader from "react-spinners/HashLoader";

function LoadingScreen() {
  return (
    <div className="flex bg-storm w-full h-screen justify-center items-center">
      <HashLoader color={"#d8a28c"} size={50} />
    </div>
  );
}

export default LoadingScreen;
