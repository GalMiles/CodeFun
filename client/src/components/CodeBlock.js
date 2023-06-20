import React from 'react'
import {Link} from 'react-router-dom'

function CodeBlock({blockName, blockId}) {
  return (
    <div className='CodeBlock'>
        <Link to ={`/editor/${blockId}`} style = {{color: 'white', textDecoration: 'none'}}>{blockName}</Link>

    </div>
  )
}

export default CodeBlock