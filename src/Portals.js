import { useRef } from "react";
import ReactDom from "react-dom";
const Backdropd = () => {
   
  return (
    <div>
      <h1>Hi, Rishi was here</h1>
    </div>
  );
}
const Relay = () => {
  return (
    <div>
      <h2>N he was aawsome</h2>
    </div>
  );
}

const Errormodal = () => {
  let enteredNameRef = useRef();
  let result = enteredNameRef.value;
  const submitHandler=(e)=>{
    result = enteredNameRef.current.value;
    console.log(enteredNameRef.current.value)
  }
   if(enteredNameRef.length!==0){
    return (
      <div>
        <div>
          <input type="text" ref={enteredNameRef} />
          <button onClick={submitHandler}>Submit</button>

        </div>
      </div>
    );
   }
   else{
    return (
      <div>
        <div>
          <p>{result}</p>
        </div>
      </div>
    );
   }

  
};

export default Errormodal;
