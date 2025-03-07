import React from 'react'
import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

const Orders = () => {

  const router = useRouter()
  const [orders, setOrders] = useState([])
  useEffect(() => {
    const fetchOrders = async ()=>{
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: JSON.parse(localStorage.getItem('myuser')).token }),
      })
      let res = await a.json()
      setOrders(res.orders)
      console.log(res)
    }
    if (!localStorage.getItem('myuser')) {
      router.push('/')
    }
    else {
      fetchOrders()
    }
      

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <div className='min-h-screen'>
      <Head>
        <title>orders - a4appoint</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/rk1.ico" />
      </Head>
      <h1 className='font-semibold text-center text-2xl p-8'>My Appointments</h1>
      <div className='container  mx-auto'>

        <div className='items'>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">

                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          #OrderId
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Email
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Amount
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      
                      {orders.map((item)=>{
                      return <tr key={item._id}  className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap md:text-sm font-medium text-gray-900">{item.orderId}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.amount}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <Link href={`/order?id=` + item._id}><a>Details</a></Link>
                        </td>
                      </tr> })}
                      
                      
                      
                      
                      </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Orders