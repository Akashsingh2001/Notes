import React, { useState } from 'react';

function CreateNote({ onCreate }) {
  const [title, setTitle] = useState('');
  const [content, setcontent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onCreate({ title, content });
    setTitle('');
    setcontent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-2">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="content"
            value={content}
            onChange={(e) => setcontent(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-success w-100">Add</button>
        </div>
      </div>
    </form>
  );
}

export default CreateNote;
