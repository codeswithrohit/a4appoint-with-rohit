import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyAccount = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [user, setUser] = useState({ value: null })
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  const [npassword, setNpassword] = useState('')

  const router = useRouter()
  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem('myuser'))
    if (!myuser) {
      router.push('/')
    }

    if (myuser && myuser.token) {
      setUser(myuser)
      setEmail(myuser.email)
      fetchData(myuser.token)
      
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query])

  const fetchData = async(token)=>{
    let data = { token: token }
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    setName(res.name)
    setAddress(res.address)
    setPhone(res.phone)

  }
  

  const handleUserSubmit = async () => {
    let data = { token: user.token, address, name, phone }
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    toast.success("Successfully Updated Details", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }


  const handlePasswordSubmit = async () => {
    let res;
    if(npassword == cpassword){
    let data = { token: user.token, password, cpassword, npassword}
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatepassword`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
     res = await a.json()
  }
  else{
    res = {success: false}
  }
    if(res.success){
    toast.success("Successfully Updated Password", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  else{
    toast.error("Error Updating Password", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  }
  setPassword('')
  setCpassword('')
  setNpassword('')
  }

  

  const handleChange = (e) => {


    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'address') {
      setAddress(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setPhone(e.target.value)
    }
    else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
    else if (e.target.name == 'cpassword') {
      setCpassword(e.target.value)
    }
    else if (e.target.name == 'npassword') {
      setNpassword(e.target.value)
    }

    
  }


   return(

   <div>
    <Head>
        <title>MyAccount - appointme.com</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/rk1.ico" />
      </Head>
     <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    <h1 className='font-bold text-3xl my-8 text-center text-green-500'>Update Your Account</h1>
      <h2 className='font-semibold text-xl'>1.Patient Details</h2>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            {user && user.token ? <input value={user.email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly /> : <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />}

          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div className="mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
          <textarea onChange={handleChange} value={address} name="address" id="address" cols="30" row="2" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>

        </div>


      </div>

      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
            <input placeholder='Your 10 Digit Phone Number' onChange={handleChange} value={phone} type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        
      </div>
      <button  onClick={handleUserSubmit} className="m-2 disabled:bg-indigo-300 flex mb-5 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded">Submit</button>

      <h2 className='font-semibold text-xl'>2.Change Password</h2>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
            <input onChange={handleChange} value={password} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  />
          </div>
        </div>

        

        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="npassword" className="leading-7 text-sm text-gray-600">New Password</label>
             <input onChange={handleChange} value={npassword} type="password" id="npassword" name="npassword" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> 

          </div>
        </div>

        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="cpassword" className="leading-7 text-sm text-gray-600">Confirm New Password</label>
             <input onChange={handleChange} value={cpassword} type="password" id="cpassword" name="cpassword" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> 

          </div>
        </div>
      </div>
      <button  onClick={handlePasswordSubmit} className="m-2 disabled:bg-indigo-300 flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded">Submit</button>


      
   </div>
    
     
        
    

)
}



export default MyAccount