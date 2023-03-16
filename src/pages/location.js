/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import React, { useState } from "react";
import Hospital from '../models/Hospital'
import mongoose from "mongoose";


const location = ({hospital}) => {

    const [data, setData] = useState(hospital);
    const filterResult=(catval)=>{
      const result=hospital.filter((curData)=>{
        return curData.location===catval;
      });
      setData(result);
    }
   

   
  return (
    <div className='min-h-screen'>
       <Head>
        <title>Doctor locations </title>
        <link rel="icon" href="/rk1.ico" />
      </Head>

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-12 xl:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:vals-start">
      <div className="lg:sticky lg:top-4">
        <details open className="overflow-hidden rounded border border-gray-200">
          <summary
            className="flex vals-center justify-between bg-gray-100 px-5 py-3 lg:hidden"
          >
            <span className="text-xl font-medium"> Choose Doctor Location </span>

            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>
          
                

          <div className="flex flex-wrap justify-center space-x-1 py-2 vals-end">
<span
    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
     <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>setData(hospital)}>All</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Haridwar, Uttrakhand')}>Haridwar</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Rishikesh, Uttrakhand')} >Rishikesh</button>
  </span>
  <span
    className="rounded-full text-gray-500 mt-2 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Dehradun, Uttrakhand')}>Dehradun</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 mt-2 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Nainital, Uttrakhand')}>Nainital</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 font-semibold mt-2 text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Roorkee, Uttrakhand')}>Roorkee</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm mt-2 flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Sasaram, Bihar')}>Sasaram</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center mt-2 cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Patna, Bihar')}>Patna</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 mt-2 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Bhabhua, Bihar')}>Bhabhua</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Buxar, Bihar')}>Buxar</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Banaras, Bihar')}>Banaras</button>
  </span>
  
  
</div>


          
        </details>
      </div>

      <div className="lg:col-span-3">

        <section className="text-gray-600 body-font min-h-screen">
        
          <div className="container px-5 py-4 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
           {data.length === 0 ? <div className=" place-content-center bg-white">
  <div className="text-center">
    <strong className="text-9xl font-black text-gray-200">Sorry</strong>

    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Comming Soon!
    </h1>
    

    <h className="mt-4 text-gray-500">Doctor On this location</h>
    <h1 className="text-xl bg-green-400 font-bold tracking-tight text-gray-900 sm:text-2xl">
    Stay tuned!
    </h1>
  </div>
</div>
:data.map((item)=>{
            
            return<Link passHref={true} key={item._id} href={`/hospital/${item.slug}`}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
            <a className="block relative  rounded overflow-hidden">
          <img alt="doctor" className="m-auto  h-[30vh] md:h-[36vh] block" src={item.img}/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.service1}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
          <p className="mt-1">{item.location}</p>
          <p className="mt-1">₹ {item.price}</p>
        </div>
      </div>
      </Link>})}
      
      
    </div>
  </div>
</section>
      </div>
    </div>
  </div>
</section>



        
 </div>
  )
}
export async function getServerSideProps(context) {
    let error=null;
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI)
    }
    let hospital = await Hospital.find({company: "a4appoint"})
    
    return {
      props: { hospital: JSON.parse(JSON.stringify(hospital)) }, // will be passed to the page component as props
    }
  }
export default location