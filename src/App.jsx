
import NoteForm from "./components/NoteForm.jsx";
import {useEffect, useState} from "react";
import NoteLList from "./components/NoteLList.jsx";

function App() {
    const [notes, setNotes] = useState(()=>{
        const savedNotes = localStorage.getItem("notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    },[notes])

    const deleteNote = (id) => {
        if (!window.confirm("Are you sure you want to delete this note?")) return;
        setNotes(notes.filter(note => note.id !== id));
    }

    return (
        <div className="max-w-lg mx-auto mt-10 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Notes App</h2>

            <NoteForm notes={notes} setNotes={setNotes}/>
            <NoteLList notes={notes} deleteNote={deleteNote}/>
        </div>
    );
}

export default App;