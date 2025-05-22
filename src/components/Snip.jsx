import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveFromSnip } from '../Redux/features/SnipSlice'
import { useNavigate } from 'react-router-dom';
import { Copy, Drumstick, Eye, LucideDelete, Pencil, Trash2, VideoIcon} from 'lucide-react'
import toast from 'react-hot-toast';

function Snip() {
   
  const data = useSelector((state)=> state.snip.snips)
  const dispatch = useDispatch();
  const [search, setsearch] = useState('')
  
  const filteredData = data.filter((item)=> item.title.toLowerCase().includes(search.toLowerCase()))

  function handledelete(index) {
    dispatch(RemoveFromSnip(index))  
  }
  const navigate = useNavigate()
  function handleview(id) {
    console.log(id);
    navigate(`/viewsnip/${id}`)
  }

  return (
    <div className="space-y-10">
      <div className="flex justify-center">
        <input 
          type="search" 
          placeholder='Search notes...' 
          onChange={(e)=>setsearch(e.target.value)}
          className="w-64 px-3 py-1.5 text-sm border border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-gray-50 text-gray-800 placeholder-gray-500 mt-[2rem]"
        />
      </div>
      {filteredData.map((item, i) => (
        
        <div
          key={i}
          className="relative bg-white/70 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-xl p-8 flex flex-col gap-4 transition hover:scale-[1.02] hover:shadow-2xl duration-200 overflow-hidden"
        >
          <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200 rounded-l-3xl" />
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-blue-800 tracking-tight truncate drop-shadow-sm">{item.title}</h2>
            <div className="flex gap-2">
              <button
                className="group relative p-2 rounded-full bg-red-50 hover:bg-red-100 transition"
                onClick={() => handledelete(i)}
                aria-label="Delete"
              >
                <span className="material-icons text-red-500 group-hover:scale-110 transition text-xl"> <Trash2/></span>
              </button>
              <button
                className="group relative p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition"
                aria-label="Edit"
              >
                <span className="material-icons text-blue-500 group-hover:scale-110 transition text-xl"><Pencil/></span>
              </button>

              <button
                className="group relative p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition"
                aria-label="Edit"
              >
                <span className="material-icons text-blue-500 group-hover:scale-110 transition text-xl" onClick={()=>handleview(item._id)}> <Eye/> </span>
              </button>

              <button
                className="group relative p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition"
                aria-label="Edit"
              >
                <span className="material-icons text-blue-500 group-hover:scale-110 transition text-xl" onClick={()=>{navigator.clipboard.writeText(item.content) , toast.success("copied successfully")}}> <Copy/> </span>
              </button>

            </div>
          </div>
          <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line font-medium">
            {item.content}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Snip