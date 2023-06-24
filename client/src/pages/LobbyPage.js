import React from 'react'
import '../App.css'
import CodeBlock from '../components/CodeBlock'

function LobbyPage({handleClick}) {

  return (
    <div className='lobbyPage'>
      <img src='/code-logo.png' alt='code-fun-logo' className='img-logo' height={200} />
      <h2>Please choose code block</h2>
        <div className='codeBlockList'>
        <CodeBlock blockName="Naive Case" blockId='0' onClick={handleClick("0")}/>
        <CodeBlock blockName="Non-async Case" blockId='1' onClick={handleClick("1")}/>
        <CodeBlock blockName="Async Case" blockId='2' onClick={handleClick("2")}/>  
        <CodeBlock blockName="Optimal Case" blockId='3' onClick={handleClick("3")}/> 
      </div>
    </div>
  )
}

export default LobbyPage


