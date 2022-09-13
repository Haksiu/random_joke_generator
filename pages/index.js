import React, { useState } from 'react'
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
    <div className='md:px-[16px] py-[16px] px-[40px]'>
      <center>
        <div className='max-w-[450px] min-h-[150px] bg-slate-300 rounded p-4 shadow-md'>
        <h1 className='md:text-[35px] mb-4 font-bold text-gray-600 text-[30px]'>Random Joke Generator</h1>
        <p className='mb-10 text-[20px] text-white text-opacity-[0.7] font-[700]'>{ joke }</p>  
        
        <form className='bg-gray-400 shadow-lg rounded px-8 pt-6 pb-8 mb-4 max-w-[400px]'>
          <input type="text" className='mb-4 text-center flex justify-center items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  placeholder='First Name' ref={firstNameRef}/>
          <input type="text" className='flex text-center justify-center items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Last Name' ref={lastNameRef}/>
          <button className='text-white w-full h-[50px] mt-5 transition duration-300 ease-in-out bg-gray-500 hover:bg-gray-900 hover:opacity-[.6] rounded font-bold' onClick={(e) => generateRandomJoke(e.preventDefault())}>Generate Joke</button>
        </form>
        </div>
      </center>
    </div>
  )
}
