import React, { useEffect, useState } from 'react'
import axios from 'axios';
import userEvent from '@testing-library/user-event';
function Api() {
    const [postdata, setPostData] = useState();

    useEffect(async () => {
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setPostData(res.data);
            console.log(postdata);
        }
        catch (err) {
            console.log(`${err.message}`);
        }
    }, []);
    return (
        <div>
            {postdata && postdata.map((user) => {
                const { email, username } = user;
                return (
                    <>
                        <p>{email}</p>
                        <p>{username}</p>
                    </>
                );
            })}
        </div>


    );
}

export default Api
