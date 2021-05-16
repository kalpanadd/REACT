import React from 'react'
import picture from '../../Images/pic.jpg';
function Imagerendering() {
    return (
        <div>
            <div>
                <span>image from online</span>
                <img
                    src='https://images.unsplash.com/photo-1621160471147-c5be030e199b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=848&q=80'
                    style={{ height: '200px', width: '200px' }}
                />
            </div>


            <div>
                <span>image from local folder</span>
                <img src={picture} style={{ height: '200px', width: '200px' }} />

            </div>

            <div>
                <span>image from public folder</span>
                <img src='photo.jpg' style={{ height: '200px', width: '200px' }} />

            </div>
        </div>
    )
}

export default Imagerendering
