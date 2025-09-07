import React from 'react';

function ShareModal({ note, onClose }) {
  const shareLink = `${window.location.origin}/notes/share/${note.shareURL}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content p-4">
          <h5 className="mb-3">Share Note</h5>
          <p><strong>Title:</strong> {note.title}</p>
          <p><strong>content:</strong> {note.content}</p>
          <input type="text" className="form-control mb-3" value={shareLink} readOnly />
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary me-2" onClick={handleCopy}>Copy Link</button>
            <button className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
