import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list = ["All", "Gaming", "Music", "News", "Songs", "Learning"]
    return (
        <div className='flex'>
            {list?.map(list => <Button key={list} name={list} />)}
        </div>
    )
}

export default ButtonList