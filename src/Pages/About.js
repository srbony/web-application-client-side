import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/Authprovider';

const About = () => {
    const aboutData = useLoaderData();
    const { createUser, user } = useContext(AuthContext);
    console.log(aboutData);

    // const [user, setUser] = useState(aboutData);



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const university = form.university.value;
        const address = form.address.value;
        console.log(name, email, university, address);

        form.reset('')
        const about = {
            name: name,
            email: email,
            university: university,
            address: address
        }
        fetch('https://web-application-server.vercel.app/about', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(about)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log(error))
    }

    // const handleUpdate = event => {
    //     event.preventDefault();
    // }


    return (
        <div className='flex justify-center items-center pt-8'>

            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>


                <div className='mb-8 text-center '>

                    <h1 className='my-3 text-4xl font-bold'>About Myself</h1>
                    <button className="btn btn-xs  ml-32 bg-gray-900 " >Edit</button>
                    {/* <p className='text-sm text-gray-400'>
              Sign in to access your account
            </p> */}
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input
                                type='Name'
                                name='name'
                                //   id='email'
                                //   required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                //   id='email'
                                //   required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                University
                            </label>
                            <input
                                type='text'
                                name='university'
                                //   id='email'
                                //   required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Address
                                </label>
                            </div>
                            <input
                                type='text'
                                name='address'
                                //   id='password'
                                //   required
                                //   placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'

                        >
                            add
                        </button>
                    </div>
                </form>



            </div>
        </div>
    );
};

export default About;