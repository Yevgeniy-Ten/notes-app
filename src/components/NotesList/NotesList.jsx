import React from "react";
import ListGroup from "react-bootstrap/cjs/ListGroup";
import {TodoItem} from "./TodoItem/TodoItem";
import {MovieItem} from "./MovieItem/MovieItem";

export const NotesList = ({items, type, onRemove, onChange, onUpdate}) => {
    if (!type) return null;
    let notesItems = []
    if (type === "movies") {
        notesItems = items.map(el => <MovieItem title={el.title} key={el.id}
                                                onChange={e => onChange(el.id, e.target.value)}
                                                onRemove={onRemove.bind(null, el.id)}
                                                date={el.date}
                                                onUpdate={() => onUpdate(el.id)}/>)
    } else if (type === "todos") {
        notesItems = items.map((el) => <TodoItem key={el.id}
                                                 onRemove={onRemove.bind(null, el.id)}
                                                 title={el.title}
                                                 isCheck={el.completed}
                                                 date={el.date}
                                                 onChange={() => onChange(el.id)}/>)
    }
    return <ListGroup className="mt-3 shadow">
        {
            notesItems.length ? notesItems : <ListGroup.Item variant="info">Your list empty!</ListGroup.Item>
        }
    </ListGroup>
}