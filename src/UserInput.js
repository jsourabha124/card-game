import { useState } from "react";
import ButtonTable from './CardTable';
import './index.css';

function UserInput(){

    //isShow used for display card table. 
    const[isShow, setShow] = useState(false);
    //Pass user input value as argument to CardTable child component
    const[count, setCount] = useState(0);

    return(
        <div className="user-input">
            <h2>Card Game</h2>
            <label>Enter No of cards : </label>
            <input type="string" onChange={(e) => {setCount(e.target.value)}}></input>
            <button onClick={()=>{setShow(!isShow)}}>{isShow ? "Hide Cards" : "Show cards"}</button>
            <br/>
            <hr/>
            {(isShow && count!==0) ? <ButtonTable TotalCount={Number(count)}/> : ""}
        </div>
    )
}
export default UserInput;