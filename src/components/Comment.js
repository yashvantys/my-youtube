import React from 'react'

const Comment = ({ data }) => {
    const { name, text, replies } = data;

    return (
        <div className='flex shadow-lg bg-gray-100 p-2 rounded-lg my-2'>
            <img className="w-12 h-12" alt='user' src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Comment