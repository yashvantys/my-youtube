import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center shadow-sm p-1'>
            <img className='h-8' alt="user icon" src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' />
            <span className='text-sm mx-1 font-bold'>{name}</span>
            <span className='text-sm'>{message}</span>
        </div>
    )
}

export default ChatMessage