import React, { useState, useMemo } from 'react'
import { findNthPrime } from '../../src/utils/helper'

function Demo() {
    const [text, setText] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    //console.log("Rendering....")
    const prime = useMemo(() => findNthPrime(text), [text]);


    return (
        <div className={'m-4 p-2 w-96 h-96 border border-black ' + (isDarkTheme && "bg-gray-900 text-white")}>
            <div>
                <button className='m-5 p-1 bg-green-500' onClick={() => setIsDarkTheme(!isDarkTheme)} >Change Theme</button>
            </div>
            <div>
                <input className='border border-black w-72 p-2' type="number" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div>
                <h1 className={'mt-4 font-bold text-xl'}>nth prime number: {prime}</h1>
            </div>
        </div >
    )
}

export default Demo