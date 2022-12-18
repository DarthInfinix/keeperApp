import React from 'react'
import notesDB from './notesDB'
const Note = (props) => {
  return (
    <div className='note'>
        <h1> {props.id} . {props.title}</h1>
        <p> {props.body}</p>
    </div>
  )
}

export default Note