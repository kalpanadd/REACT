import React, { useState } from 'react'


//ternarany operator--can be used to do something even if condition is false
//condition?true:false

//shortcircuit condtion is used only when condition is true do something 
// if condition is false don't do anything { condition && do something }
function Conditional() {
    const [isloggedin, setIsLoggedIn] = useState(true);
    return (
        <div>
            {/*{isloggedin ? <h1>welcome kalpana</h1> : <h1>welcome guest</h1>}*/}

            {isloggedin && <h1>welcome kalpana</h1>}

        </div>
    )
}

export default Conditional
