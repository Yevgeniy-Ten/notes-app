import React from "react";
import ListGroupItem from "react-bootstrap/cjs/ListGroupItem";
import Button from "react-bootstrap/Button";

export const TodoItem = ({title, date, onRemove}) => {
    return <ListGroupItem>
        <div className="d-flex align-items-center justify-content-between">
            <span>{date}</span>
            <Button onClick={onRemove} variant="outline-danger">&times;</Button>
        </div>
        <p className="p-2">{title}</p>
    </ListGroupItem>
}