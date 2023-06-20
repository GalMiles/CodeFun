import React from 'react'
import '../App.css'
import CodeBlock from '../components/CodeBlock'

function LobbyPage() {
  return (
    <div className='lobbyPage'>
      <img src='/code-logo.png' alt='code-fun-logo' className='img-logo' height={200} />
      <h2>Please choose code block</h2>
      <div className='codeBlockList'>
        <CodeBlock blockName="Naive Case" blockId='1'/>
        <CodeBlock blockName="Async Case" blockId='2'/>
        <CodeBlock blockName="Non-async Case" blockId='3'/>  
        <CodeBlock blockName="Optimal Case" blockId='4'/> 
      </div>
    
    </div>
  )
}

export default LobbyPage