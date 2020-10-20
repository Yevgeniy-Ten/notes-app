import React from "react";
import Spinner from "react-bootstrap/Spinner";
import {useNotesApp} from "../../containers/NotesApp/NotesContext";

export const Preloader = () => {
    const {loadIsShow} = useNotesApp()
    const show = loadIsShow;
    const styles = {
        backgroundColor: "rgba(0,0,0,0.2)",
        opacity: show ? 1 : 0,
        visibility: show ? 'visible' : 'hidden'
    }
    return <div style={styles}
                className="position-fixed fixed-top min-vh-100 d-flex align-items-center justify-content-center">
        <Spinner animation="border" variant="success"/>
    </div>
}