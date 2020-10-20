import React from "react";
import Alert from "react-bootstrap/Alert";

export const NotesAlert = ({message, show, type}) => {
    if (!message || !show) return null;
    return <Alert variant={type || "info"}>
        <Alert.Heading>{message}</Alert.Heading>
    </Alert>
}