import React from "react";
import ListGroupItem from "react-bootstrap/cjs/ListGroupItem";
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button";
import FormLabel from "react-bootstrap/FormLabel";
import FormGroup from "react-bootstrap/FormGroup"

export const MovieItem = ({title, date}) => {
    return <ListGroupItem className="d-flex align-items-center justify-content-between">
        <FormGroup className="flex-grow-1 mr-5">
            <FormLabel>{date}</FormLabel>
            <FormControl
                placeholder="Movie"
                value={title}
            />
        </FormGroup>
        <Button variant="outline-danger">&times;</Button>
    </ListGroupItem>
}