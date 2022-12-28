import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Post from './Post';

const Media = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allPosts')
            .then(res => res.json())
            .then(data => setAllPosts(data))
    }, [])
    return (
        <div className='mx-auto center my-4'>
            {/* <h2>This is media{allPosts.length}</h2> */}
            {
                allPosts.map(post => <Post
                    post={post}
                    key={post._id}
                >

                </Post>)
            }
        </div>
    );
};

export default Media;