import React from 'react';
import image from '../../assets/images.jpg';
import { HiFilm, HiLocationMarker, HiEmojiHappy } from "react-icons/hi";
import { HiTag } from "react-icons/hi2";


const Header = () => {
    return (
        <div className='mx-auto w-1/2 mt-20 h-52 rounded-md shadow-lg header-wrapper'>
            <div className='header-top flex items-center'>
                <div className='avatar '>
                    <div className='w-24 rounded-full '>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className=''>
                    <input type="text" className='ml-10' placeholder="What's in your mind?" />

                </div>
            </div>
            <hr className='mt-5' />
            <div className='header-bottom mt-4 '>
                <div className='flex items-center mx-4'>
                    <div className='flex items-center mr-4 cursor-pointer text-sm'>
                        <span>Photo or Video</span>
                        {/* <FaBeer></FaBeer> */}
                        <HiFilm className='text-xl text-orange-500	'></HiFilm>
                    </div>
                    <div className='flex items-center mr-4 cursor-pointer text-sm'>
                        <span>Tag</span>
                        <HiTag className='text-xl text-blue-500	'></HiTag>
                    </div>
                    <div className='flex items-center mr-4 cursor-pointer text-sm'>
                        <span>Location</span>

                        <HiLocationMarker className='text-xl text-green-500	'></HiLocationMarker>
                    </div>
                    <div className='flex items-center mr-4 cursor-pointer text-sm'>
                        <span>Feelings</span>
                        <HiEmojiHappy className='text-xl text-yellow-400	'></HiEmojiHappy>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;