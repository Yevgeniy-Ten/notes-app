import React, {useEffect, useRef, useState} from "react";
import BasicForm from "../../components/BasicForm/BasicForm";
import {NotesList} from "../../components/NotesList/NotesList";
import axios from "../../assets/instance"
import {validString} from "../../assets/helpers";

export const Todos = () => {
    const [todos, setTodos] = useState([])
    const $todoInput = useRef()
    const BASE_URI = "/todos.json"
    useEffect(() => {
        axios.get(BASE_URI).then(e => {
            if (e.data) {
                handlerTodosFromDB(e.data)
            }
        })
    }, [])
    const handlerTodosFromDB = (data) => {
        const todos = Object.keys(data).map(id => {
            return {
                ...data[id],
                id
            }
        }).reverse()
        setTodos(todos)
    }
    const addTodo = () => {
        const todoTitle = $todoInput.current.value
        if (validString(todoTitle)) {
            const data = prepareTodoForRequest(todoTitle)
            postRequest(BASE_URI, data).then((e) => {
                data.id = e.data.name
                setTodos((prev) => [data, ...prev])
            }).finally(() => {
                $todoInput.current.value = ""
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
    const postRequest = (uri, data) => {
        return axios.post(uri, data).catch(e => {
            console.error("error", e)
        })
    }
    const removeTodo = (id) => {
        const removeURI = `/todos/${id}.json`
        axios.delete(removeURI).then(e => {
            if (e.statusText === "OK") {
                setTodos(todos.filter(todo => todo.id !== id))
            }
        })
    }
    return <>
        <BasicForm inputRef={$todoInput} handler={addTodo}/>
        <NotesList items={todos} onRemove={removeTodo} type="todos"/>
    </>
}