import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addtoSnip, updatetoSnip } from '../Redux/features/SnipSlice'
import Snip from './Snip'
import { useEffect } from 'react'
import { Copy } from 'lucide-react'

function Home() {
  const [title, setTitle] = useState("")
  const [value, setvalue] = useState("")
  const [searchparams , setsearchparams] =useSearchParams()
  const snipid = searchparams.get("snipid")
  
  const dispatch  = useDispatch();
  const data = useSelector(state => state.snip.snips)

  useEffect(() => {
    if (snipid) {
      const snip = data.find(item=> item._id ===snipid)
      if (snip) {
         setTitle(snip.title);
        setvalue(snip.content);
      }
      else{
       setTitle('');
      setvalue('');
      }
    }else{
        setTitle('');
    setvalue('');
    }
  }, [snipid , data])
  
    
  function handleclick() {
    if (!title.trim() || !value.trim()) return;
    const snip  ={
      title : title,
      content : value,
      _id : snipid || 
      Date.now().toString(36)
    }
    if (snipid) {
      setsearchparams({}); 
      dispatch (updatetoSnip(snip))
      
    } else {
      dispatch (addtoSnip(snip))
    }
  
  }
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">SnipSync</h1>
        
        <div className="space-y-4">
          <input 
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
            value={title} 
            onChange={(e)=> setTitle(e.target.value)}
            placeholder='Enter title...' 
            type="text"  
          />
         
                  <textarea 
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 font-mono"
            value={value} 
            onChange={(e)=>setvalue(e.target.value)}   
            rows={8}
            placeholder="Write your note here..."
            
          ></textarea>

          <button  
            className={`w-full py-2 rounded-lg font-medium text-white transition-colors ${
              !title.trim() || !value.trim() 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
            onClick={handleclick}
            disabled={!title.trim() || !value.trim()}>
            {snipid ? "Update Note" : "Create Note"}
          </button>
        </div>

        <div className="mt-8">
          <Snip/> 
        </div>
      </div>
    </div>
  )
}

export default Home