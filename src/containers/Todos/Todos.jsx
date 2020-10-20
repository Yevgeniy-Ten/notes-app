import React, {useEffect, useRef, useState} from "react";
import BasicForm from "../../components/BasicForm/BasicForm";
import {NotesList} from "../../components/NotesList/NotesList";
import axios from "../../assets/instance"
import {handlerDataFromDB, validString} from "../../assets/helpers";
import {useNotesApp} from "../NotesApp/NotesContext";


export const postRequest = (uri, data) => {
    return axios.post(uri, data).catch(e => {
        console.error("error", e)
    })
}
export const Todos = () => {
    const {showLoad, hideLoad} = useNotesApp()
    const [todos, setTodos] = useState([])
    const $todoInput = useRef()
    const BASE_URI = "/todos.json"
    useEffect(() => {
        showLoad()
        axios.get(BASE_URI).then(e => {
            if (e.data) {
                handlerTodosFromDB(e.data)
            }
        }).finally(hideLoad)
    }, [])
    const handlerTodosFromDB = (data) => {
        const todos = handlerDataFromDB(data)
        setTodos(todos)
    }
    const addTodo = () => {
        const todoTitle = $todoInput.current.value
        if (validString(todoTitle)) {
            showLoad()
            const data = prepareTodoForRequest(todoTitle)
            postRequest(BASE_URI, data).then((e) => {
                data.id = e.data.name
                setTodos((prev) => [data, ...prev])
            }).finally(() => {
                $todoInput.current.value = ""
                hideLoad()
            })
        }
    }

    const prepareTodoForRequest = (title) => {
        return {
            title,
            date: new Date().toLocaleString(),
            completed: false,
        }
    }
    const removeTodo = (id) => {
        showLoad()
        const removeURI = `/todos/${id}.json`
        axios.delete(removeURI).then(e => {
            if (e.statusText === "OK") {
                setTodos(todos.filter(todo => todo.id !== id))
            }
        }).finally(hideLoad)
    }
    return <>
        <BasicForm inputRef={$todoInput} handler={addTodo}/>
        <NotesList items={todos} onRemove={removeTodo} type="todos"/>
    </>
}