/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MdFavorite } from 'react-icons/md';
import Head from 'next/head'
import Hospital from '../../models/Hospital';
import Error from 'next/error'
import mongoose from "mongoose";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcQuestions, FcAnswers } from 'react-icons/fc';
import { AiFillDownCircle } from "react-icons/ai";


const Post = ({ bookNow , addToCart, hospital, variants, error }) => {
  const router = useRouter()
  const { slug } = router.query

  const [date, setDate] = useState()
  const [slot, setSlot] = useState()
  
  useEffect(()=>{
    if(!error){
    setDate(hospital.date)
    setSlot(hospital.slot)
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[router.query])

  const refreshvariant = (newdate, newslot)=>{
    let url = `${process.env.NEXT_PUBLIC_HOST}/hospital/${variants[newdate][newslot]['slug']}`
    router.push(url)

  }

  if (error == 404){
    return<Error statusCode={404}/>
  }

  return <>
  <Head>
        <title>Book Ur appointment-a4appoint</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
      </Head>

    <section className="text-gray-600 body-font overflow-hidden min-h-screen">
      <div className="container px-5 py-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg" src={hospital.img}/>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-sm md:text-2xl title-font font-medium mb-1">{hospital.title} ( {hospital.date}/{hospital.slot} )</h1>
            <div className="flex mb-4">
             
            <p className="leading-relaxed text-sm md:text-xl font-medium">Location: {hospital.location}</p>
             
            </div>
            <p className="leading-relaxed text-red-700">{hospital.desc}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">

                <select value={date}  onChange={(e)=>{refreshvariant ( e.target.value, slot)}} className="rounded border appearance-none border-green-300 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base pl-3 pr-10">
                
                  {Object.keys(variants).includes('29/10/2022') && Object.keys(variants['29/10/2022']).includes(slot) && <option value={'29/10/2022'}>29/10/2022</option>}
                  {Object.keys(variants).includes('30/10/2022') && Object.keys(variants['30/10/2022']).includes(slot) && <option  value={'30/10/2022'}>30/10/2022</option>}
                  {Object.keys(variants).includes('31/10/2022') && Object.keys(variants['31/10/2022']).includes(slot) && <option  value={'31/10/2022'}>31/10/2022</option>}
                  {Object.keys(variants).includes('01/11/2022') && Object.keys(variants['01/11/2022']).includes(slot) && <option  value={'01/11/2022'}>01/11/2022</option>}
                  {Object.keys(variants).includes('02/11/2022') && Object.keys(variants['02/11/2022']).includes(slot) && <option  value={'02/11/2022'}>02/11/2022</option>}
                  {Object.keys(variants).includes('03/11/2022') && Object.keys(variants['03/11/2022']).includes(slot) && <option  value={'03/11/2022'}>03/11/2022</option>}
                  {Object.keys(variants).includes('04/11/2022') && Object.keys(variants['04/11/2022']).includes(slot) && <option  value={'04/11/2022'}>04/11/2022</option>}
                </select>
              </div>
              <div className="flex ml-6 items-center">

                <div className="relative">
                    <select value={slot} onChange={(e)=>{refreshvariant(date,  e.target.value)}} className="rounded border appearance-none border-green-300 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base pl-3 pr-10">
                    {date && Object.keys(variants[date]).includes('8:00AM-9:00AM') &&<option value={'8:00AM-9:00AM'}>8:00AM-9:00AM</option>}
                    {date && Object.keys(variants[date]).includes('9:00AM-10:00AM') &&<option value={'9:00AM-10:00AM'}>9:00AM-10:00AM</option>}
                    {date && Object.keys(variants[date]).includes('10:00AM-11:00AM') &&<option value={'10:00AM-11:00AM'}>10:00AM-11:00AM</option>}
                    {date && Object.keys(variants[date]).includes('11:00AM-12:00PM') &&<option value={'11:00AM-12:00PM'}>11:00AM-12:00PM</option>}
                    {date && Object.keys(variants[date]).includes('12:00PM-1:00PM') &&<option value={'12:00AM-1:00PM'}>12:00AM-1:00PM</option>}
                    {date && Object.keys(variants[date]).includes('1:00PM-2:00PM') &&<option value={'1:00PM-2:00PM'}>1:00PM-2:00PM</option>}
                    {date && Object.keys(variants[date]).includes('2:00PM-3:00PM') &&<option value={'2:00PM-3:00PM'}>2:00PM-3:00PM</option>}
                    {date && Object.keys(variants[date]).includes('3:00PM-4:00PM') &&<option value={'3:00PM-4:00PM'}>3:00PM-4:00PM</option>}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              {hospital.availableQty>0 && <span className="title-font font-medium text-2xl text-gray-900">₹ {hospital.price} </span>}
              {hospital.availableQty<=0 && <span className="title-font font-medium text-2xl text-gray-900">No slot available! </span>}
              <button disabled={hospital.availableQty<=0} onClick={()=>(bookNow(slug, 1, hospital.price, hospital.title,date, slot))} className="flex ml-auto text-white bg-indigo-500 disabled:bg-indigo-200 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Book Now</button>
              
              
            </div>
          </div>
        </div>
        
      </div>
      <div className="p-6  shadow-lg rounded-lg bg-gray-200 text-gray-800 container m-auto">
  <h2 className="font-semibold text-3xl mb-5">Profile of {hospital.title}</h2>
  <p>
{hospital.profile}
  </p>
</div>

<div className="p-6  shadow-lg rounded-lg bg-gray-200 text-gray-800 container m-auto mt-6">
  <h2 className="font-semibold text-3xl mb-5">Services of {hospital.title}</h2>
  <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                      
                        <span className="mx-2 font-medium text-gray-900 "> ➤ {hospital.service1}
                        <br className=" md:block" />
                        ➤ {hospital.service2}
                        <br className=" md:block" />
                        ➤ {hospital.service3}
                        <br className=" md:block" />
                        ➤ {hospital.service4}
                        <br className=" md:block" />
                        ➤ {hospital.service5}
                        </span>
                    </p>
</div>



    </section> 

    


    
    </>
}

export async function getServerSideProps(context) {
  let error=null;
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let hospital = await Hospital.findOne({ slug: context.query.slug})
  if(hospital == null){
    return{
      props: {error: 404},
    }
  }

 
  let variants = await Hospital.find({ title: hospital.title })
  let dateSlotSlug = {}
  for (let item of variants) {
    if (Object.keys(dateSlotSlug).includes(item.date)) {
      dateSlotSlug[item.date][item.slot] = { slug: item.slug }
    }
    else {
      dateSlotSlug[item.date] = {}
      dateSlotSlug[item.date][item.slot] = { slug: item.slug }
    }
  }



  return {
    props: {error: error, hospital: JSON.parse(JSON.stringify(hospital)), variants: JSON.parse(JSON.stringify(dateSlotSlug)) }, // will be passed to the page component as props
  }
}

export default Post