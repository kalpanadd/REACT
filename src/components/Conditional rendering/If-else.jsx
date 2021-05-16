import React, { useState } from 'react'


//variable approach
function Usergreeting() {

    const [isloggedin, setIsLoggedIn] = useState(false);
    let message;
    {
        if (isloggedin) {
            message = <div>welcome kalpana</div>
        }
        else {
            message = <div>welcome guest</div>
        }
    }
    return (
        <>
            {message}
        </>
    )
}

export default Usergreeting
