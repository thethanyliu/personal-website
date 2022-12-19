function TechItem(props) {
  return (
    <div className="transition ease-in-out delay-120 flex flex-col dark:bg-[#dde7ee] rounded-lg drop-shadow-2xl hover:scale-105 max-w-[300px] mb-5 md:mb-0 py-10">
      <div className="flex justify-center">
        <img src={props.image} alt="logo" width="50px" height="50px" />
      </div>
      <div>
        <h1 className="text-center text-xl text-gray-800 font-semibold pt-3">{props.title}</h1>
      </div>
    </div>
  );
}

export default TechItem;
