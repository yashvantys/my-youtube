import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom';
import { GET_YOUTUBE_VIDEO_ID } from '../utils/constant';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchVideo = () => {
    const dispatch = useDispatch();
    const [params] = useSearchParams();
    const [videoData, setVideoData] = useState([])
    useEffect(() => {
        dispatch(closeMenu());
        //getVideoById(params.get("v"))
    }, [])
    // const getVideoById = async (id) => {
    //     const data = await fetch(GET_YOUTUBE_VIDEO_ID + "&id=" + id);
    //     const jsonData = await data.json();
    //     setVideoData(jsonData);
    // }
    //console.log(videoData)

    return (
        <div className='flex flex-col w-full'>
            <div className='px-5 mt-5 flex col-span-12'>
                <div className='col-span-8 w-[3/12]'>
                    <iframe
                        className='min-w-[800px]'
                        height="400"
                        src={`https://www.youtube.com/embed/${params.get("v")}`}
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                    />
                </div>
                <div className='col-span-4 w-[1/12]'>
                    <LiveChat />
                </div>
            </div>
            <div>
                <CommentsContainer />
            </div>
        </div>
    )
}

export default WatchVideo