import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { HiHeart, HiThumbUp, HiChat } from "react-icons/hi";
// import { Link } from 'react-router-dom';
// import likeIcone from '../../assets/like.png';
// import diLike from '../../assets/dislike.png';
import likeIcone from '../assets/like.png';
import disLike from '../assets/dislike.png'

const Details = () => {
    const data = useLoaderData();
    console.log(data);
    const [like, setLike] = useState('');
    const [count, setCount] = useState(0);
    const handleLike = () => {
        if (like) {
            setCount(count+1)
        }
    }
    return (
        <div>
            <div className="card w-96 mx-auto my-4 bg-base-100 shadow-xl">
                <figure><img className='w-[100%] rounded-lg' src={data.image} alt="Shoes" /></figure>
                <div className="card-body">

                    <p>{data.message}</p>
                    <div className="card-actions justify-end">
                        <div className="flex items-center">
                            <div className='flex items-center mr-4 cursor-pointer text-sm'>
                                <span>Like</span>
                                <HiThumbUp onClick={() => handleLike(like)} className='text-blue-500 text-xl'></HiThumbUp>
                                {/* <img src={like} onClick={handleLike} alt="" /> */}

                            </div>
                            <div className='flex items-center mr-4 cursor-pointer text-sm'>
                                <span>Reaction</span>
                                <HiHeart className='text-red-600 text-xl'></HiHeart>
                            </div>
                            <div className='flex items-center mr-4 cursor-pointer text-sm'>
                                <span>Comments</span>
                                <HiChat className='text-xl'></HiChat>
                            </div>

                            <div >
                                {/* <Link to={`/details/${_id}`}>
                                    <button className='btn btn-primary'>Details</button>
                                </Link> */}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;