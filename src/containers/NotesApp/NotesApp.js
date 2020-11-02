import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Container from "react-bootstrap/Container";
import {Switch, Route, Redirect} from "react-router-dom"
import {About} from "../../pages/About/About";
import {Todos} from "../Todos/Todos";
import {Notes} from "../Notes/Notes";
import {Preloader} from "../../components/Preloader/Preloader";
import NotesProvider from "./NotesContext";

function NotesApp() {

    return (
        <>
            <NotesProvider>
                <NavBar/>
                <Preloader/>
                <Container>
                    <Switch>
                        <Route exact path="/" component={About}/>
                        <Route path="/todos" exact component={Todos}/>
                        <Route path="/notes" exact component={Notes}/>
                        <Redirect from="" to="/"/>
                    </Switch>
                </Container>
            </NotesProvider>
        </>
    );
}

export default NotesApp;
