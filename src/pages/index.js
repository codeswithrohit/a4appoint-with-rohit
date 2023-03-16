/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import { BsTelephoneOutboundFill} from 'react-icons/bs';
import { FcApproval } from 'react-icons/fc';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
import { useEffect } from 'react'
import React, { useState } from "react";
import Axios from 'axios';
import Hospital from '../models/Hospital'
import mongoose from "mongoose";



export default function Home({hospital}) {

 
    const [search , setSearch] = useState('');
    const [hospitals, setHospitals] = useState([])
    const [filterData, setFilterData] = useState([]);



    const [location, setLocation] = useState(hospital);
    const filterLocation=(catval)=>{
      const result=hospital.filter((curData)=>{
        return curData.service1===catval;
      });
      setLocation(result);
    }



    const [data, setData] = useState(hospital);
    const filterResult=(catItem)=>{
      const result=hospital.filter((curData)=>{
        return curData.location===catItem;
      });
      setData(result);
    }

    

    const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 5500);
  });

  const slideRight = () => {
    setCurrent(current === hospital.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? hospital.length - 1 : current - 1);
  };
  
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
        <title>a4appoint </title>
        <meta name="description" content="Search Your Doctor, Select Your Slot & Book Your Appointment in Easiest Way. Will Book appointments with a tap Say a4appoint " />
        <link rel="icon" href="/rk1.ico" />
      </Head>

      <div className="relative justify-center items-center mt-2 ">


      <div className="relative px-4   ">
 

  <div className=" md:px-24 flex bg-green-100 rounded-lg items-center p-2 md:p-6">
    <BsTelephoneOutboundFill className="h-6 w-6 text-green-500 rounded-lg object-cover"/>
    
    <div className="ml-3 overflow-hidden">
      <h className=" font-bold text-sm text-gray-900">a4appoint Helpline:-</h>

      <h className=" text-sm text-gray-500">
        +917667411501
      </h>
    </div>
    <div className="md:ml-64">
      <h className="font-medium  text-gray-900">Emergency:-</h>

      <h className="max-w-xs mr-2 truncate text-sm text-gray-500">
        1066
      </h>
    </div>
  </div>
</div>

     
      
<div className="container ">

<div className="relative flex items-center justify-contenth-full w-full dark:text-gray-50">

	<div className="flex items-center justify-center w-full h-full py-2 mx-auto "
  onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}>
        <AiOutlineDoubleLeft className="w-12 h-12 text-2xl text-blue-500 cursor-pointer px-2" onClick={slideLeft}/>
        <div className="w-full relative h-full">
        {data.map((image, index) => {
          return (
            /* (condition) ? true : false */

            <div
              key={image._id}
              className={
                index == current
                  ? "opacity-1 transform-1 pointer-events-auto  "
                  : "flex absolute w-full overflow-hidden mb-20 opacity-0 pointer-events-none translate-0.8 transition-opacity h-full"
              }
            >
              <img className="object-cover  object-center w-full h-64 md:h-96 rounded-lg" src={image.locationimg} alt="" />
              <figcaption className="absolute inset-x-0 bottom-2  w-72 md:w-96 mx-auto p-6  font-light text-xl text-center tracking-widest leading-snug bg-gray-300 bg-opacity-25">
              {image.location}
        </figcaption>
            </div>
            
          );
        })}
      </div>
    <AiOutlineDoubleRight className="w-8 h-8 text-2xl text-blue-500 cursor-pointer" onClick={slideRight}/>
        
	</div>
</div>  
 



</div>


</div>

        <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                      <button  className="outline-none focus:outline-none"><svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                      <input  onChange={(e)=>{
        setSearch(e.target.value);
      }} type="search" name=""  placeholder="Search Your Doctor by name, Speciality , City and more " x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"/>
                    
                    </div>
        <div className="relative w-full flex gap-4 py-4 overflow-x-auto">
        { filterData.length === 0 ? <div className=" place-content-center bg-white">
  <div className="text-center">
    <strong className="text-9xl font-black text-gray-200">Sorry</strong>

    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Comming Soon!
    </h1>

    <p className="mt-4 text-gray-500">On this location</p>

    <a
      
      className="mt-6 inline-block rounded bg-green-400 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
    >
      Stay tuned!
    </a>
  </div>
</div>: filterData.map((val)=>{ return <Link passHref={true} key={val._id} href={`/hospital/${val.slug}`}>
          
	<div className='relative flex flex-shrink-0 w-48  cursor-pointer' ><img className="h-48 aspect-video  object-cover w-full mx-auto rounded-lg object-center dark:bg-gray-500" src={val.img} alt="Image 1"/>
  <figcaption className="absolute inset-x-0 bottom-4 w-48 mx-auto p-1 font-semibold text-sm text-center tracking-widest leading-snug bg-gray-300 bg-opacity-25">
              {val.title}-{val.location}
        </figcaption>
  </div>
  
  
</Link>})}</div>









<div>
        <h1 className='text-center text-2xl uppercase font-bold text-gray-400'>Doctors by city</h1>

<div className='mx-2 w-full'>
            <div className='row mt-5 mx-2'>
            <div className="flex flex-wrap justify-center space-x-1 py-2 items-end">
<span
    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
     <button className="flex items-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>setData(hospital)}>All</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex items-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Haridwar, Uttrakhand')}>Haridwar</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex items-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Rishikesh, Uttrakhand')} >Rishikesh</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex items-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Dehradun, Uttrakhand')}>Dehradun</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 mt-2 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex items-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Nainital, Uttrakhand')}>Nainital</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex items-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Roorkee, Uttrakhand')}>Roorkee</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex items-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Sasaram, Bihar')}>Sasaram</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex items-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Patna, Bihar')}>Patna</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 mt-2 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex items-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Bhabhua, Bihar')}>Bhabhua</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex items-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Buxar, Bihar')}>Buxar</button>
  </span>
  <span
    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex mt-2 align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <button className="flex items-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Banaras, Bihar')}>Banaras</button>
  </span>
  
  
</div>
<div className="relative w-full flex gap-4 py-4 overflow-x-auto">
        {data.length === 0 ? <div className=" place-content-center bg-white">
  <div className="text-center">
    <strong className="text-9xl font-black text-gray-200">Sorry</strong>

    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Comming Soon!
    </h1>

    <h className="mt-4 text-gray-500">On this location</h>

    <a
      
      className="mt-6 inline-block rounded bg-green-400 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
    >
      Stay tuned!
    </a>
  </div>
</div>
:data.map((val)=>{ return <Link passHref={true} key={val._id} href={`/hospital/${val.slug}`}>
          
	<div className='relative flex flex-shrink-0 w-48  cursor-pointer' ><img className="h-48 aspect-video  object-cover w-full mx-auto rounded-lg object-center dark:bg-gray-500" src={val.img} alt="Image 1"/>
  </div>
  
  
</Link>})}</div>

            </div>

        </div>

    

    </div>


   
    



    <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2 className="max-w-lg mb-5 font-sans md:text-3xl text-lg font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
        <span className="inline-block mb-1 sm:mb-4">
        Why Book Your Appointment with a4appoint ?
          
          
        </span>
        <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
      </h2>
      <div className="mt-1 space-y-5">
                  <h3 className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    <FcApproval className="w-6 h-6 mx-2 text-blue-500"/>
                      <span className="mx-2 text-sm md:text-2xl text-blue-600">Will Book appointments with tap.</span>
                  </h3>

                  <h4 className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <FcApproval className="w-6 h-6 mx-2 text-blue-500"/>
                  <div className='animated-typing mx-2 text-sm md:text-2xl text-green-600'>
    
      Can search doctors by Name , doctor location, specialist.
    

  </div>
                  </h4>

                  <h5 className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <FcApproval className="w-6 h-6 mx-2 text-blue-500"/>

                      <span className="mx-2 text-sm md:text-2xl text-blue-600">Can increase wellness benefits usage.</span>
                  </h5>
                  
              </div>
    </div>
    <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
      <a aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-72 md:h-80 xl:h-90"
            src="hospital3.gif"
            alt=""
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <h6 className="mb-4 text-lg font-bold text-gray-100">It’s convenient</h6>
            <h className="text-sm tracking-wide text-gray-300">
            Unless a customer prefers to take more time to schedule an appointment or your employees would rather book them manually, an online appointment scheduler can save your business a lot of time on both ends. It gives customers the power to decide when and how they book, regardless of where they are. Employees simply have to check the system to see what’s been added instead of taking the information and filing the calendar themselves.
            </h>
          </div>
        </div>
      </a>
      <a aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-72 md:h-80 xl:h-90"
            src="hospital2.gif"
            alt=""
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <h className="mb-4 text-lg font-bold text-gray-100">
            Customer self-scheduling with 24-hour convenience
            </h>
            <h className="text-sm tracking-wide text-gray-300">
            At a time when 75% of Millennials choose texting over talking on the phone, more and more people will appreciate the freedom that comes with an online appointment scheduling.
              An online scheduling system allows for 24-hour booking, not just during usual facility or office hours. 
              Your customers and clients can make a reservation whenever it fits into their schedule.
            </h>
          </div>
        </div>
      </a>
      <a  aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-72 md:h-80 xl:h-90"
            src="hospital5.gif"
            alt=""
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <h className="mb-4 text-lg font-bold text-gray-100">Saving Time, Money, & Paper.</h>
            <h className="text-sm tracking-wide text-gray-300">
            If you’ve worked with a paper-based scheduling system, you will know that systems like that can quickly become enormously complex.
             Every appointment needs to be entered by hand into a master diary, and then each employee needs to make their own copy.
             ‘Traditional’ systems like that are simply a huge waste of time, money, and paper.
            </h>
          </div>
        </div>
      </a>
      <a aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-72 md:h-80 xl:h-90"
            src="hospital4.gif"
            alt=""
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <h className="mb-4 text-lg font-bold text-gray-100">
            Benefits of Online Doctor Appointment system :
            </h>
            <h className="text-sm tracking-wide text-gray-300">
            ➤ Online Doctor scheduling services attracts more patients
            <br className=" md:block" />
            ➤ Doctors will see you at your convenience! No more waiting!!
            <br className=" md:block" />
            ➤ Will make sure that there are no more phone calls.
            <br className=" md:block" />
            ➤ Will make Reminders/Cancellations/Reschedules easy.
            <br className=" md:block" />
            ➤ Delivers a premium experience
              
            </h>
          </div>
        </div>
      </a>
    </div>
  </div>









    </div >
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
