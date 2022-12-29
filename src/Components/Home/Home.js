import React from 'react';
import PostForm from '../../Pages/PostForm';
import AllPost from '../AllPost';
import Header from '../Header/Header';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <PostForm></PostForm>
            <AllPost></AllPost>
        </div>
    );
};

export default Home;