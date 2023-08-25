import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("")
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages)
    useEffect(() => {
        const interVal = setInterval(() => {
            // API polling
            console.log("API Polling")
            dispatch(addMessage({
                name: generateRandomName(),
                messages: makeRandomMessage(20)
            }))
        }, 1500);
        return () => clearInterval(interVal)
    }, [])
    return (
        <>
            <div className='px-1 mx-2 border border-black min-w-[300px] max-w-[400px] h-[400px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                {chatMessages?.map((c, i) => <ChatMessage key={i} name={c.name} message={c.messages} />)}
            </div>
            <form className='w-full p-2 ml-2 border border-black' onSubmit={(e) => {
                e.preventDefault()
                dispatch(addMessage({
                    name: "Yashvant Yadav",
                    messages: liveMessage
                }))
                setLiveMessage("")

            }}>
                <input className='px-2 w-72' type='text' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
                <button className='px-2 mx-2 bg-green-100' >Send</button>
            </form>
        </>
    )
}

export default LiveChat