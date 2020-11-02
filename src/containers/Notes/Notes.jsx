import React, {useEffect, useRef, useState} from "react";
import BasicForm from "../../components/BasicForm/BasicForm";
import {NotesList} from "../../components/NotesList/NotesList";
import axios from "../../assets/instance"
import {validString, handlerDataFromDB} from "../../assets/helpers";
import {postRequest} from "../Todos/Todos";
import {useNotesApp} from "../NotesApp/NotesContext";
import {NotesAlert} from "../../components/NotesAlert/NotesAlert";

export const Notes = () => {
    const {showLoad, hideLoad, showAlert, isAlertShow} = useNotesApp()
    const [notes, setNotes] = useState([])
    const $noteInput = useRef()
    const BASE_URI = '/notes.json'
    useEffect(() => {
        showLoad()
        axios.get(BASE_URI).then(e => {
            if (e.data) {
                handlerMoviesFromDB(e.data)
            }
        }).finally(hideLoad)
    }, [])
    const handlerMoviesFromDB = (data) => {
        const notes = handlerDataFromDB(data)
        setNotes(notes)
    }
    const addMovie = () => {
        const note = $noteInput.current.value
        if (validString(note)) {
            showLoad()
            const data = prepareNoteForRequest(note)
            postRequest(BASE_URI, data).then((e) => {
                data.id = e.data.name
                setNotes((prev) => [data, ...prev])
                showAlert()
            }).finally(() => {
                $noteInput.current.value = ""
                hideLoad()
            })
        }
    }
    const noteTitleUpdate = (id) => {
        showLoad()
        const updateURI = `/notes/${id}.json`
        const movie = notes.find(m => m.id === id)
        axios.put(updateURI, movie).finally(hideLoad)
    }
    const noteTitleChange = (id, title) => {
        if (title.length < 1) {
            removeNote(id)
            return;
        }
        setNotes(notes.map(movie => {
            if (movie.id === id) {
                return {
                    ...movie,
                    title,
                }
            }
            return movie
        }))
    }
    const prepareNoteForRequest = (title) => {
        return {
            title,
            date: new Date().toLocaleString(),
        }
    }
    const removeNote = (id) => {
        showLoad()
        const removeURI = `/notes/${id}.json`
        axios.delete(removeURI).then(e => {
            if (e.statusText === "OK") {
                setNotes(notes.filter(note => note.id !== id))
            }
        }).finally(hideLoad)
    }

    return <>
        <BasicForm inputRef={$noteInput} handler={addMovie}/>
        <NotesAlert message="Succesfull add, Congrulations!" type="success" show={isAlertShow}/>
        <NotesList items={notes} onRemove={removeNote}
                   type="notes"
                   onChange={noteTitleChange}
                   onUpdate={noteTitleUpdate}/>
    </>
}