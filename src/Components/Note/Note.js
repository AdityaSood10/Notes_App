import React from 'react'

import deleteIcon  from '../../Assets/deleteIcon.jpg'

import "./Note.css";

function Note(props) {
    
  return (
    <div className='note' style={{backgroundColor: props.note.color}}>
        <textarea className='note_text' defaultValue={props.note.text} />
        <div  className='note_footer'>
        <p>{props.note.time}</p>
        <img src={deleteIcon} alt='Delete' onClick={()=>props.deleteNote(props.note.id)}/>
        </div>
    </div>
  )
}

export default Note

