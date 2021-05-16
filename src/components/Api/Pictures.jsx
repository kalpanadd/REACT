import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Pictures() {
    const [state, setState] = useState();
    useEffect(async () => {
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/photos')
            console.log(res.data);
            setState(res.data);
            console.log(state);

        } catch (err) {
            console.log(`${err.message}`);
        }
    }, []);
    return (
        <div>
            {state && state.map((pics) => {
                const { title, thumbnailUrl } = pics;
                return (
                    <>
                        <p>{title}</p>
                        <img src={thumbnailUrl} />
                    </>
                )
            })}

        </div>
    )
}

export default Pictures
