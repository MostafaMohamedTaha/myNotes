import React,{useState,useEffect} from 'react'
// import { Route, useParams } from 'react-router';
// import notes from '../assets/data'
import {Link} from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

const NotePage = ({match,history}) =>{
    let noteId=match.params.id
    // console.log('PROPS:',noteId)
    // let note =notes.find(note=>note.id===Number(noteId))
    let[note,setNote]=useState(null)
    useEffect(() => {
        getNote()
    }, [noteId])
    let getNote=async()=>{
        if (noteId === 'new') return
        let response=await fetch(`http://localhost:5000/notes/${noteId}`)
        let data =await response.json()
        setNote(data)
    }
    let createNote=async()=>{
        await fetch(`http://localhost:5000/notes/`,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({...note,'updated':new Date()})
        })
    }
    let updateNote=async()=>{
        await fetch(`http://localhost:5000/notes/${noteId}`,{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({...note,'updated':new Date()})
        })
    }
    let deleteNote=async()=>{
        await fetch(`http://localhost:5000/notes/${noteId}`,{
            method:'DELETE',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(note)
    })
    history.push('/')
}
    let handleSubmit=()=>{
        if(noteId !== 'new' && !note.body){
            deleteNote()
        }else if (noteId !== 'new'){
            updateNote()
        }else if (noteId === 'new' && note!==null){
            createNote()
        }
        history.push('/')
    }
    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to="/">
                        <ArrowLeft onClick={handleSubmit} />
                    </Link>
                </h3>
                {noteId !=='new'?(<button onClick={deleteNote}>Delete</button>):
                <button onClick={createNote}>Done</button>}
            </div>
            <textarea onChange={(e)=>{setNote({...note,'body':e.target.value})}} value={note?.body}></textarea>
        </div>
    )
} 

export default NotePage
