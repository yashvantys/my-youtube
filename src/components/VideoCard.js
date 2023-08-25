import React from 'react'

const VideoCard = ({ videoList }) => {

    const { snippet, statistics } = videoList;
    const { channelTitle, title, thumbnails } = snippet
    return (
        <div className='p-2 m-2 w-52 shadow-lg'>
            <div>
                <img className='rounded-lg' src={thumbnails?.medium?.url} alt='thumbnail' />
            </div>
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics?.likeCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard