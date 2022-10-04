function Backdrop(props) {
    return <div className="fixed z-10 bg-black opacity-75 inset-0 w-full" onClick={props.close}/>
    // can write as a self closing tag in jsx if no content present
};

export default Backdrop;