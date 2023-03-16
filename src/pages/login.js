/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { Router } from 'next/router';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head'

const login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 useEffect(() => {
  if(localStorage.getItem('myuser')){
    router.push('/')
  } 
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])

  const handleChange = (e) => {
    if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { email, password }

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: 'POST', // or 'PUT
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log(response)
    setEmail('')
    setPassword('')
    if (response.success) {
      localStorage.setItem('myuser', JSON.stringify({token:response.token, email:response.email}))
      toast.success('Your are successfully logged in', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push(process.env.NEXT_PUBLIC_HOST)

      }, 1000);

    }
    else {
      toast.error(response.error, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }
  }
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
      <title>login-a4appoint</title>
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
      <link rel="icon" href="/rk1.ico" />
    </Head>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className="px-6 py-4  ">

      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="px-6 py-4">
      
        <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">a4appoint</h2>

        <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

        <form onSubmit={handleSubmit} method="POST">
            <div className="w-full mt-4">
            <input onChange={handleChange}
                    type="email"
                    value={email}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    id="email"
                    name="email"
                    placeholder="Email address"
                  />
            </div>

            <div className="w-full mt-4">
            <input onChange={handleChange}
                    type="password"
                    value={password}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
            </div>

            <div className="flex items-center justify-between mt-4">
            <button
                    type="Submit"
                    className="px-4 py-2 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                  >
                    Login
                  </button>

                
            </div>
        </form>
    </div>

    <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">Dont have an account? </span>

        <a href={'/signup'} className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</a>
    </div>
</div>









      
      </section>
    </div>
  )
}

export default login