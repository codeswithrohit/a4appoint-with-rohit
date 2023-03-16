/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import React, { useState } from "react";
import Hospital from '../models/Hospital'
import mongoose from "mongoose";

const speciality = ({hospital}) => {

    const [data, setData] = useState(hospital);
    const filterResult=(catval)=>{
      const result=hospital.filter((curData)=>{
        return curData.service1===catval;
      });
      setData(result);
    }
  return (
    <div className='min-h-screen'>

<Head>
        <title>Doctors By Specialist </title>
       
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
              <span className="text-xl font-medium"> a4ppoint Speciality </span>
  
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
            <div>
                        <a className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100   dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" >
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                    </path>
                                </svg>
                            </span>
                            <span
      className="rounded-full text-gray-500 ml-4 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
       <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>setData(hospital)}>All</button>
    </span>
                        </a>
                        <a className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100   dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" >
                            <span className="text-left">
                            <span className="flex flex-col items-center">
    <img alt="doctor"  className="object-cover w-12 h-12 mb-2 rounded-full shadow" src="https://ayurvedicuttarakhand.com/wp-content/uploads/2020/09/tenor.gif"/>
    </span>
                            </span>
                            <span
      className="rounded-full text-gray-500 ml-4 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
      <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Cardiolgist')}>Cardiolgist-  हृदय रोग विशेषज्ञ</button>
    </span>
                        </a>
                        <a className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100   dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" >
                            <span className="text-left">
                            <span className="flex flex-col items-center">
    <img alt="doctor"  className="object-cover w-12 h-12 mb-2 rounded-full shadow" src="https://media.tenor.com/LBUTGCMhxiQAAAAC/trippy-psychedelic.gif"/>
    </span>
                            </span>
                            <span
      className="rounded-full text-gray-500 ml-4 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
       <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Neurosurgeon')}>Neurosurgeon - ब्रेन सर्जन</button>
    </span>
                        </a>
                        <a className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100   dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" >
                            <span className="text-left">
                            <span className="flex flex-col items-center">
    <img alt="doctor"  className="object-cover w-12 h-12 mb-2 rounded-full shadow" src="https://i.makeagif.com/media/3-08-2017/jkhyYX.gif"/>
    </span>
                            </span>
                            <span
      className="rounded-full text-gray-500 ml-4 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
      <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Orthopaedics')} >Orthopaedics - हड्डी रोग विशेषज्ञ</button>
    </span>
                        </a>
                        <a className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100   dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" >
                            <span className="text-left">
                            <span className="flex flex-col items-center">
    <img alt="doctor"  className="object-cover w-12 h-12 mb-2 rounded-full shadow" src="https://thumbs.gfycat.com/SecondaryPoorGypsymoth-max-1mb.gif"/>
    </span>
                            </span>
                            <span
      className="rounded-full text-gray-500 ml-4 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
       <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Oncologist')} >Oncologist - कैंसर विशेषज्ञ</button>
    </span>
                        </a>
                        <a className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100   dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" >
                            <span className="text-left">
                            <span className="flex flex-col items-center">
    <img alt="doctor"  className="object-cover w-12 h-12 mb-2 rounded-full shadow" src="https://media.baamboozle.com/uploads/images/325462/1657696968_41198_gif-url.gif"/>
    </span>
                            </span>
                            <span
      className="rounded-full text-gray-500 ml-4 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
       <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Gastroenterologist')}>Gastroenterologist - पाचन रोग विशेषज्ञ </button>
    </span>
                        </a>
                        <a className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100   dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" >
                            <span className="text-left">
                            <span className="flex flex-col items-center">
    <img alt="doctor"  className="object-cover w-12 h-12 mb-2 rounded-full shadow" src="https://gurusgarden.com/images/grinding.gif"/>
    </span>
                            </span>
                            <span
      className="rounded-full text-gray-500 ml-4 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
       <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Ayurvedevic')}>Ayurvedevic</button>
    </span>
                        </a>
                        <a className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100   dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" >
                            <span className="text-left">
                            <span className="flex flex-col items-center">
    <img alt="doctor"  className="object-cover w-12 h-12 mb-2 rounded-full shadow" src="https://i.pinimg.com/originals/ab/1b/3c/ab1b3cc5cd7174afcf036840cbecb17d.gif"/>
    </span>
                            </span>
                            <span
      className="rounded-full text-gray-500 ml-4 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
       <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Dentist')}>Dentist - दंत चिकित्सक</button>
    </span>
                        </a>
                        <a className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100   dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" >
                            <span className="text-left">
                            <span className="flex flex-col items-center">
    <img alt="doctor"  className="object-cover w-12 h-12 mb-2 rounded-full shadow" src="https://harshahospital.in/images/urology.jpg"/>
    </span>
                            </span>
                            <span
      className="rounded-full text-gray-500 ml-4 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
       <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Urologist')}>Urologist - मूत्रतंत्र तथा पुरूषों के जननांग के विशेषज्ञ</button>
    </span>
                        </a>
                        <a className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100   dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" >
                            <span className="text-left">
                            <span className="flex flex-col items-center">
    <img alt="doctor"  className="object-cover w-12 h-12 mb-2 rounded-full shadow" src="https://www.fullcircleidaho.org/app/uploads/sites/3/2018/11/PedDocs_Toddlers.gif"/>
    </span>
                            </span>
                            <span
      className="rounded-full text-gray-500 ml-4 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
       <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Paediatrics')}>Paediatrics - बच्चों के विशेषज्ञ</button>
    </span>
                        </a>
                        <a className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100   dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" >
                            <span className="text-left">
                            <span className="flex flex-col items-center">
    <img alt="doctor"  className="object-cover w-12 h-12 mb-2 rounded-full shadow" src="https://thumbs.dreamstime.com/b/two-surgeons-physicians-holding-scalpels-performing-surgical-operation-lying-patient-isolated-white-background-surgery-117620322.jpg"/>
    </span>
                            </span>
                            <span
      className="rounded-full text-gray-500 ml-4 bg-gray-200 font-semibold  text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
       <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Genral Surgeon')}>Genral Surgeon</button>
    </span>
                        </a>
                        <a className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100   dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" >
                            <span className="text-left">
                            <span className="flex flex-col items-center">
    <img alt="doctor"  className="object-cover w-12 h-12 mb-2 rounded-full shadow" src="data:image/png;base64,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"/>
    </span>
                            </span>
                            <span
      className="rounded-full text-gray-500 ml-4 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
       <button className="flex vals-center px-3 py-2 bg-transparent hover focus:outline-none" onClick={()=>filterResult('Psychiatrist')}>Psychiatrist - मनोचिकित्सक</button>
    </span>
                        </a>

                    </div>
            
  
  
            
          </details>
        </div>
  
        <div className="lg:col-span-3">
  
          <section className="text-gray-600 body-font min-h-screen">
          
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
            {data.length === 0 ? <div className=" place-content-center bg-white">
    <div className="text-center">
      <strong className="text-9xl font-black text-gray-200">Sorry</strong>
  
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Comming Soon!
      </h1>
      
  
      <h className="mt-4 text-gray-500">On this location</h>
      <h1 className="text-xl bg-green-400 font-bold tracking-tight text-gray-900 sm:text-2xl">
      Stay tuned!
      </h1>
    </div>
  </div>
  :data.map((val)=>{
            
            return<Link passHref={true} key={val._id} href={`/hospital/${val.slug}`}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
            <a className="block relative  rounded overflow-hidden">
          <img alt="doctor" className="object-cover w-full h-64 mb-2  shadow" src={val.img}/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{val.service1}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{val.title}</h2>
          <p className="mt-1">{val.location}</p>
          <p className="mt-1">₹ {val.price}</p>
        </div>
      </div>
      </Link>})}
      
      
    </div>
  </div>
  </section>
        </div>
      </div>
    </div>
  </section></div>
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
export default speciality