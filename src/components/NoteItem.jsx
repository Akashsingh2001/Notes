import React, { useState } from 'react';
import ShareModal from './ShareModal';

function NoteItem({ note, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedcontent, setEditedcontent] = useState(note.content);
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    onUpdate(note.id, {
      title: editedTitle,
      content: editedcontent,
      shareURL: note.shareURL,
    });
    setIsEditing(false);
  };

  return (
    <div className="card h-100">
      <div className="card-body">
        {isEditing ? (
          <>
            <input
              className="form-control mb-2"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              className="form-control mb-2"
              rows="2"
              value={editedcontent}
              onChange={(e) => setEditedcontent(e.target.value)}
            />
            <div className="d-flex justify-content-between">
              <button className="btn btn-success btn-sm" onClick={handleSave}>Save</button>
              <button className="btn btn-secondary btn-sm" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <h5>{note.title}</h5>
            <p>{note.content}</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-warning btn-sm" onClick={() => setIsEditing(true)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(note.id)}>Delete</button>
              <button className="btn btn-primary btn-sm" onClick={() => setShowModal(true)}>Share</button>
            </div>
          </>
        )}
      </div>

      {showModal && (
        <ShareModal
          note={note}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default NoteItem;
