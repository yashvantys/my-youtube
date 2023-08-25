import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice'

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store) => store.search)

    const dispatch = useDispatch()
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    useEffect(() => {
        // api call every key stoke
        // but the difference between 2 api is <200ms then decline api call
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions()
            }
        }, 200)
        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery]);
    /**
     * key - i
     * - render the component
     * - useEffect ()
     * - start timer => make an api call after 200ms
     * 
     * key - ip
     * - destroy the component (useEffect return method)
     * - render the component
     * - useEffect()
     * - start timer => make an api call after 200ms
     * 
     * 
     */

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        // update cache
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }));
    }
    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img onClick={() => toggleMenuHandler()} className='h-8 cursor-pointer' alt="menu" src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg" />
                <a href='/'>
                    <img className='h-8 mx-2' alt='logo' src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' />
                </a>
            </div>
            <div className='col-span-10 px-10'>
                <div>
                    <input className='border w-1/2 border-gray-400 rounded-l-full p-1 px-2' type='text'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button className='border border-gray-400 rounded-r-full p-1 bg-gray-300'>
                        Search
                    </button>
                </div>
                {showSuggestions && <div className='bg-white py-2 px-5 w-[29rem] shadow-lg rounded-lg border border-gray-200 absolute mx-2'>
                    <ul>
                        {suggestions?.map(suggestion => <li key={suggestion[0]} className='py-2 shadow-sm'>{suggestion[0]}</li>)}
                    </ul>
                </div>}
            </div>
            <div className='col-span-1'>
                <img className='h-8' alt="user icon" src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' />
            </div>

        </div>
    )
}

export default Head

