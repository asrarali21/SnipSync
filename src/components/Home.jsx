import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addtoSnip, updatetoSnip } from '../Redux/features/SnipSlice'

function Home() {
  const [title, setTitle] = useState("")
  const [value, setvalue] = useState("")
  const [searchparams , setsearchparams] =useSearchParams()
  const snipid = searchparams.get("snipid")
   const dispatch  = useDispatch();
    function handleclick() {
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
    }
  return (
    <div>
      <input 
      value={title} 
      onChange={(e)=> setTitle(e.target.value)}
       placeholder='Title here' type="text"  />
      <button onClick={handleclick}>
        {snipid ? "update" : "create"}
        </button>
      <div>
      <textarea value={value} onChange={(e)=>setvalue(e.target.value)}   rows={20}></textarea>
      </div>
           

    
    </div>
  )
}

export default Home