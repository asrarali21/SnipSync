import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Viewsnip() {
    const {id}= useParams();
     const viewdata = useSelector(state=>state.snip.snips.find(item=> item._id == id))
  return (
<div>
 
    <div>
      {viewdata.title}
      {viewdata.content}
    </div>

</div>
  )
}

export default Viewsnip