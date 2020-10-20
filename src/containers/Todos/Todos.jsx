import React from "react";
import BasicForm from "../../components/BasicForm/BasicForm";
import {NotesList} from "../../components/NotesList/NotesList";

export const Todos = () => {
    return <>
        <BasicForm/>
        <NotesList/>
    </>
}