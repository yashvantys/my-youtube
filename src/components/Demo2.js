import React, { useRef, useState, useEffect } from 'react'

const Demo2 = () => {
    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async () => {
        const data = await fetch("http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q=namaste")
        const json = await data.json()
        console.log(json)
    }
    let x = 10;
    const [y, setY] = useState(0);
    const ref = useRef(0)
    return (
        <div className='m-4 p-2 bg-slate-100 border border-black w-96 h-96'>
            <div>
                <button onClick={() => {
                    x = x + 1;
                    console.log("let variable:=" + x)
                }} className='border border-orange-500 px-2'>
                    Change Value
                </button>
                <h1 className='font-bold text-xl'>{x}</h1>
            </div>
            <div>
                <button onClick={() => {
                    setY(y + 1);
                    console.log("state variable:=" + y)
                }} className='border border-orange-500 px-2'>
                    state Value
                </button>
                <h1 className='font-bold text-xl'>{y}</h1>
            </div>
            <div>
                <button onClick={() => {
                    ref.current = ref.current + 1;
                    console.log("ref variable:=" + ref.current)
                }} className='border border-orange-500 px-2'>
                    UseRef Value
                </button>
                <h1 className='font-bold text-xl'>{ref.current}</h1>
            </div>
        </div>
    )
}

export default Demo2