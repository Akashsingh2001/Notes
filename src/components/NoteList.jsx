import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onUpdate, onDelete }) {
  return (
    <div className="row">
      {notes.map((note) => (
        <div key={note.id} className="col-md-4 mb-4">
          <NoteItem
            note={note}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        </div>
      ))}
    </div>
  );
}

export default NoteList;
