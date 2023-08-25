import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { GOOGLE_VIDEO_API } from '../utils/constant';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videoList, setVideoList] = useState([])
    useEffect(() => {
        getVideos()
    }, []);
    const getVideos = async () => {
        const data = await fetch(GOOGLE_VIDEO_API);
        const json = await data.json();
        setVideoList(json?.items);
    }

    return (
        <div className='flex flex-wrap'>
            {videoList?.map(list => {
                return (
                    <Link key={list?.id} to={"/watch?v=" + list?.id} >
                        <VideoCard videoList={list} />
                    </Link>
                )
            })}
        </div>
    )
}

export default VideoContainer