import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../Pages/Post';

const AllPost = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://web-application-server.vercel.app/allPosts')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            {
                data.map(post => <Post
                    post={post}
                    key={post._id}
                ></Post>)
            }
        </div>
    );
};

export default AllPost;