import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Viewsnip() {
    const {id}= useParams();
    const viewdata = useSelector(state=>state.snip.snips.find(item=> item._id == id))

    const navigate = useNavigate();
    
    if (!viewdata) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100">
                <div className="text-xl text-gray-600">Note not found</div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 py-8 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">{viewdata.title}</h1>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 whitespace-pre-wrap leading-relaxed">
                            {viewdata.content}
                        </p>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button 
                        className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition-colors' 
                        onClick={()=>navigate('/')}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Viewsnip