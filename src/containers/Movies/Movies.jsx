import React, {useEffect, useRef, useState} from "react";
import BasicForm from "../../components/BasicForm/BasicForm";
import {NotesList} from "../../components/NotesList/NotesList";
import axios from "../../assets/instance"
import {validString, handlerDataFromDB} from "../../assets/helpers";
import {postRequest} from "../Todos/Todos";
import {useNotesApp} from "../NotesApp/NotesContext";
import {NotesAlert} from "../../components/NotesAlert/NotesAlert";

export const Movies = () => {
    const {showLoad, hideLoad, showAlert, isAlertShow} = useNotesApp()
    const [movies, setMovies] = useState([])
    const $movieInput = useRef()
    useEffect(() => {
        showLoad()
        axios.get(BASE_URI).then(e => {
            if (e.data) {
                handlerMoviesFromDB(e.data)
            }
        }).finally(hideLoad)
    }, [])
    const handlerMoviesFromDB = (data) => {
        const movies = handlerDataFromDB(data)
        setMovies(movies)
    }
    const addMovie = () => {
        const movie = $movieInput.current.value
        if (validString(movie)) {
            showLoad()
            const data = prepareMovieForRequest(movie)
            postRequest(BASE_URI, data).then((e) => {
                data.id = e.data.name
                setMovies((prev) => [data, ...prev])
                showAlert()
            }).finally(() => {
                $movieInput.current.value = ""
                hideLoad()
            })
        }
    }
    const movieTitleUpdate = (id) => {
        showLoad()
        const updateURI = `/movies/${id}.json`
        const movie = movies.find(m => m.id === id)
        axios.put(updateURI, movie).finally(hideLoad)
    }
    const movieTitleChange = (id, title) => {
        if (title.length < 1) {
            removeMovie(id)
            return;
        }
        setMovies(movies.map(movie => {
            if (movie.id === id) {
                return {
                    ...movie,
                    title,
                }
            }
            return movie
        }))
    }
    const prepareMovieForRequest = (title) => {
        return {
            title,
            date: new Date().toLocaleString(),
        }
    }
    const removeMovie = (id) => {
        showLoad()
        const removeURI = `/movies/${id}.json`
        axios.delete(removeURI).then(e => {
            if (e.statusText === "OK") {
                setMovies(movies.filter(movie => movie.id !== id))
            }
        }).finally(hideLoad)
    }
    const BASE_URI = '/movies.json'
    return <>
        <BasicForm inputRef={$movieInput} handler={addMovie}/>
        <NotesAlert message="Succesfull add, Congrulations!" type="success" show={isAlertShow}/>
        <NotesList items={movies} onRemove={removeMovie}
                   type="movies"
                   onChange={movieTitleChange}
                   onUpdate={movieTitleUpdate}/>
    </>
}