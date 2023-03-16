/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import React, { useState } from "react";
import Axios from 'axios';
import Hospital from '../models/Hospital'
import mongoose from "mongoose";


const search = ({hospital}) => {

  const [search , setSearch] = useState('');
  const [hospitals, setHospitals] = useState([])
  const [filterData, setFilterData] = useState([]);
   
  useEffect(()=>{
    Axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/gethospitals`)
    .then((response)=>{
      setHospitals(response.data);
    })
  },[])


  useEffect(()=>{
    setFilterData(
      hospital.filter((hospital)=> hospital.category.toLowerCase().includes(search.toLowerCase()) ) 
    )
  },[search,hospital])
   
  return (
    <div className='min-h-screen'>
        <Head>
        <title>Book  Appointment </title>

        <link rel="icon" href="/rk1.ico" />
      </Head>
        <div className=" bg-white mt-4 rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                      <button  className="outline-none focus:outline-none"><svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                      <input  onChange={(e)=>{
        setSearch(e.target.value);
      }} type="search" name=""  placeholder="Search Your Doctor by name, Speciality , City and more " x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"/>
                    
                    </div>
                    <section className="text-gray-600 body-font min-h-screen">
        
          <div className="container px-5 py-4 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
           {filterData.length === 0 ? <div className=" place-content-center bg-white">
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
:filterData.map((item)=>{
            
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

export default search