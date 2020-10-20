import React from "react";
import ListGroupItem from "react-bootstrap/cjs/ListGroupItem";
import Button from "react-bootstrap/Button";
import FormCheck from "react-bootstrap/FormCheck";

export const TodoItem = ({title, date, onRemove, isCheck, onChange}) => {
    const cls = ["p-2"]
    if (isCheck) {
        cls.push("text-bad")
    }
    return <ListGroupItem>
        <div className="d-flex align-items-center justify-content-between">
            <span>{date}</span>

            <Button onClick={onRemove} variant="outline-danger">&times;</Button>
        </div>
        <div className="d-flex justify-content-around align-items-center">
            <p className={cls.join(" ")}>{title}</p>
            <FormCheck onChange={onChange} type="checkbox" title="end?" checked={isCheck}/>
        </div>
    </ListGroupItem>
}