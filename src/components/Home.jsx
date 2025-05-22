import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addtoSnip, updatetoSnip } from '../Redux/features/SnipSlice'
import Snip from './Snip'

function Home() {
  const [title, setTitle] = useState("")
  const [value, setvalue] = useState("")
  const [searchparams , setsearchparams] =useSearchParams()
  const snipid = searchparams.get("snipid")
  
  

   const dispatch  = useDispatch();
    
      
        function handleclick() {
           if (!title.trim() || !value.trim()) return;
          const snip  ={
            title : title,
          content : value,
          _id : snipid || 
          Date.now().toString(36)
        }
        if (snipid) {
          
          dispatch (updatetoSnip(snip))
        } else {
          
          dispatch (addtoSnip(snip))
        }
      
        setTitle('')
        setvalue('')
        setsearchparams({})
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 py-8">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">SnipSync - Note Saver</h1>
        <input 
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={title} 
          onChange={(e)=> setTitle(e.target.value)}
          placeholder='Title here' type="text"  
        />
        <textarea 
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-gray-50"
          value={value} 
          onChange={(e)=>setvalue(e.target.value)}   rows={8}
          placeholder="Write your note here..."
        ></textarea>
        <button  
          className={`w-full py-2 rounded-lg font-semibold text-white transition  ${!title.trim() || !value.trim() ? 'bg-blue-200 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 shadow-md'}`}
          onClick={handleclick}
          disabled={!title.trim() || !value.trim()}>
          {snipid ? "Update" : "Create"}
        </button>
        <div className="mt-8">
          <Snip/> 
        </div>
      </div>
    </div>
  )
}

export default Home