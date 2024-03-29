import React, {useState,useEffect} from 'react'
// import notes from '../assets/data'
import ListItem from '../components/ListItem'
import AddButton from '../components/addButton'
const NoteListPage = () => {
    let [notes,setNote]=useState([])
    useEffect(() => {
        getNote()
    })
    let getNote =async()=> {
        let response=await fetch('http://localhost:5000/notes/')
        let data=await response.json()
        // console.log('data:',data);
        setNote(data)
    }
    return (
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">
                    &#9782; Notes
                </h2>
                <p className="notes-count">
                    {notes.length}
                </p>
            </div>
            <div className='notes-list'>
                {notes.map((  note, index) => (
                // <p>{note.body}</p>
                <ListItem key={index} note={note}/>
                ))}
            </div>
            <AddButton />
        </div>
    )
    }
    

export default NoteListPage
