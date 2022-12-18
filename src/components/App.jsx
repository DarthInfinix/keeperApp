import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import Note from './Note'
import Header from "./Header"
import Footer from './Footer'
import '../App.css'
import notes from './notesDB'
function noteCreate(props) {
  return <Note 
      key={props.id}
  id= {props.id}
          title = {props.title}
          body = {props.body} /> 
}
function App() {

  return (
    <>
    <Header />
    <div className='wrapper'>
    {notes.map(noteCreate)}
    </div>
    <Footer />
    </>
    
  )
}

export default App
