import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const backendURL = "https://quicknotes-production.up.railway.app";

function SharedNotePage() {
  const { shareURL } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${backendURL}/notes/share/${shareURL}`)
      .then(res => {
        setNote(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Note not found or error fetching');
        setLoading(false);
      });
  }, [shareURL]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="container py-5">
      <h2>Shared Note</h2>
      <div className="card p-4 mb-3">
        <h4>{note.title}</h4>
        <p>{note.content}</p>
        <small className="text-muted">
          {note.updatedAt ? `Updated at: ${new Date(note.updatedAt).toLocaleString()}` : `Created at: ${new Date(note.createdAt).toLocaleString()}`}
        </small>
      </div>
    </div>
  );
}

export default SharedNotePage;
