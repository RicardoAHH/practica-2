import React from 'react'

export default function Pexels() {
    return (
        <div className='flex flex-col w-full justify-center items-center'>
            <a className='text-white' href="https://www.pexels.com">Photos provided by Pexels</a>

            {/* <!-- or show our white logo --> */}

            <a href="https://www.pexels.com">
                <img className='w-100' src="https://images.pexels.com/lib/api/pexels-white.png" />
            </a>

            {/* <!-- or show our black logo --> */}

            {/* <a href="https://www.pexels.com">
                <img src="https://images.pexels.com/lib/api/pexels.png" />
            </a> */}
        </div>
    )
}
