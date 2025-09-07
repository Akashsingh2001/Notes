import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateNote from './CreateNote';
import NoteList from './NoteList';

const backendURL = "https://quicknotes-production.up.railway.app"; 

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${backendURL}/notes`);
      setNotes(response.data);
    } catch (err) {
      setError('Failed to fetch notes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleCreate = async (newNote) => {
    try {
      const response = await axios.post(`${backendURL}/notes`, newNote);
      setNotes([...notes, response.data]);
    } catch {
      alert('Failed to create note');
    }
  };

  const handleUpdate = async (id, updatedNote) => {
    try {
      await axios.put(`${backendURL}/notes/${id}`, updatedNote);
      fetchNotes(); // Refresh notes
    } catch {
      alert('Failed to update note');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendURL}/notes/${id}`);
      setNotes(notes.filter((note) => note.id !== id));
    } catch {
      alert('Failed to delete note');
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">QuickNotes</h2>
      <CreateNote onCreate={handleCreate} />
      {loading && <p>Loading notes...</p>}
      {error && <p className="text-danger">{error}</p>}
      <NoteList
        notes={notes}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
