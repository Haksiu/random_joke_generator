import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import useRandomJoke from "../utils/useRandomJoke"

export default function Home() {

  const firstNameRef = React.createRef(null);
  const lastNameRef = React.createRef(null);
  const [firstName, setFirstName] = useState("Johnny");
  const [lastName, setLastName] = useState("Test");

  const joke = useRandomJoke(firstName, lastName);


  const generateRandomJoke = () => {
   
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  }

  return (
    <div className='p-[16px] text-white'>
      <center>
        <h1 className='text-[30px] mb-4 font-bold'>Random Joke Generator</h1>
        <p className='mb-10 text-[20px]'>{joke}</p>  

        <form className='bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-[400px]'>
          <input type="text" className='flex justify-center items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  placeholder='first name' ref={firstNameRef}/>
          <input type="text" className='flex justify-center items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='last name' ref={lastNameRef}/>
          <button className='w-full h-[50px] mt-5 bg-gray-500 rounded font-bold' onClick={(e) => generateRandomJoke(e.preventDefault())}>Generate Joke</button>
        </form>
      </center>
    </div>
  )
}
