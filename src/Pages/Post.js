import React from 'react';

import { Link } from 'react-router-dom';

const Post = ({ post }) => {

    const { message, image, _id } = post;
    console.log(post);
    return (
        <div>
            <div className="card w-96 mx-auto my-4 bg-base-100 shadow-xl">
                <figure><img className='w-[100%] rounded-lg' src={image} alt="Shoes" /></figure>
                <div className="card-body">

                    <p>{message}</p>
                    <div className="card-actions justify-end">
                        <div className="flex items-center">



                            <div >
                                <Link to={`/details/${_id}`}>
                                    <button className='btn btn-primary'>Details</button>
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;