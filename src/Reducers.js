import { useReducer } from "react";


const emailReducer = (state,action) =>{
    if(action.value.length!==0)
    {
        state.value = action.value
        return {value : state.value}
    }else return {value: ''}
    
};
const Reducers = () =>{
    const emailValidator =(e) =>{
        dispatchEmail({value:e.target.value})
    }
    const [emailState,dispatchEmail] = useReducer(emailReducer,{value:''});
    return(
        <div>
            <input 
                type="text"
                onChange={emailValidator}
            />
            {emailState.value}
        </div>
    );
}
export default Reducers;