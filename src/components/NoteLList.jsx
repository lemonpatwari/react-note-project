import React from 'react';

function NoteLList({notes,deleteNote}) {
    if (notes.length === 0) {
        return <p className="text-center text-gray-500 py-2">No notes available.</p>;
    }
    return (
        <div className="space-y-4 px-4 pb-4">
            {notes.map((note) => (
                <div key={note.id} className="p-4 bg-white rounded-lg shadow-md border-l-4">
                    <h3 className="text-xl font-bold">{note.title}</h3>
                    <p className="text-sm text-gray-500">
                        <strong>Category:</strong>{note.category}
                    </p>
                    <p className="text-sm text-gray-500">
                        <strong>Priority:</strong>{note.priority}
                    </p>
                    <p className="text-sm text-gray-500">{note.description}</p>

                    <button onClick={()=>deleteNote(note.id)} className="mt-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700">
                        Delete
                    </button>
                </div>
            ))}

        </div>
    );
}

export default NoteLList;