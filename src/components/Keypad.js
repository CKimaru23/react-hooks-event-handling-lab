// Code Keypad Component Here
import React from "react";

function handleChange(){
    console.log("Entering Password");
}
function Keypad (){
    return (
        <div>
            <input type="password" onChange={handleChange}/>
        </div>
    )
}

export default Keypad;