import React from 'react';

const Post = ({ post }) => {
    const { message, image, _id } = post;
    console.log(post);
    return (
        <div>
            <div className="card w-100 mx-auto my-4 bg-base-100 shadow-xl">
                <figure><img className='w-3/4 rounded-lg' src={image} alt="Shoes" /></figure>
                <div className="card-body">

                    <p>{message}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="">
                            <button className='btn btn-primary'>Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;