import React from 'react';
import image from '../../assets/images.jpg'
const Header = () => {
    return (
        <div className='mx-auto w-1/2 mt-10 header-wrapper'>
            <div className='header-top flex items-center'>
                <div className='avatar'>
                    <div className='w-24 rounded-full '>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className=''>
                    <input type="text" className='ml-10' placeholder="What's in your mind?" />

                </div>
            </div>
            <hr className='mt-5' />
            <div className='header-bottom'>
                <div>
                    <div>
                        <span>Photo/Video</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;