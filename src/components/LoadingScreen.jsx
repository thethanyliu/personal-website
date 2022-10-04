import HashLoader from "react-spinners/HashLoader";

function LoadingScreen() {
    return <div className="flex bg-pink w-full h-screen justify-center items-center"> 
        <HashLoader color={"#5F236B"} size={50}/>
    </div>

}

export default LoadingScreen;