import React from 'react';
import { Link } from 'react-router-dom';

const PostForm = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const image = form.image.files[0];
        console.log(message, image);
        form.reset('')
        const formData = new FormData();
        formData.append('image', image);


        const url = 'https://api.imgbb.com/1/upload?key=87c47e4a9562b277d4d4cdd9c60b2681';
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    console.log(imageData.data.display_url);
                    const post = {
                        message: message,
                        image: imageData.data.display_url
                    }
                    fetch('https://web-application-server.vercel.app/post', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(post)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                        })
                        .catch(error => console.log(error))

                }



            });




    }


    return (
        <div className='mx-auto w-1/2 mt-20 h-68 p-4 rounded-md shadow-lg'>
            <form onSubmit={handleSubmit} className=" ">
                <textarea name="message" className="textarea textarea-bordered w-1/2" placeholder="type your post"></textarea>
                <br />
                <input name="image" type="file" placeholder="Type here" className="input input-bordered w-full mt-4 max-w-xs" />
                <br />
                {/* <Link to="/media"> */}
                <button className='rounded px-4 py-2 mt-2 mr-4 btn-primary'>Submit</button>
                {/* </Link> */}

            </form>
            <div className='mx-auto w-1/2 '>
                <Link to='/media'>
                    <button className="rounded px-4 py-2 mt-2  btn-primary">SEE ALL POSTS</button>
                </Link>
            </div>

        </div>
    );
};

export default PostForm;