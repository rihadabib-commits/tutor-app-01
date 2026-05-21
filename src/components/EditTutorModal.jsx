'use client';

import { authClient } from '@/lib/auth-client';
import { useState } from 'react';

export const EditTutorModal = ({ teacher, onClose, onUpdated }) => {
  const [form, setForm] = useState({
    Name: teacher.Name || '',
    category: teacher.category || '',
    dayAndTime: teacher.dayAndTime || '',
    price: teacher.price || '',
    total: teacher.total || '',
    sessionStartDate: teacher.sessionStartDate
      ? new Date(teacher.sessionStartDate).toISOString().split('T')[0]
      : '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {

    const{data:tokenData} = await authClient.token();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`http://127.0.0.1:5000/teachers/${teacher._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        authorization: `Bearer ${tokenData?.token}`
      });
      if (!res.ok) throw new Error('Update failed');
      const updated = await res.json();
      onUpdated(updated);
      onClose();
    } catch (err) {
      setError('Failed to update. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.18s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .modal-box {
          background: #ffffff;
          border-radius: 20px;
          padding: 32px 28px 28px;
          width: 100%;
          max-width: 480px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.18);
          animation: slideUp 0.22s ease;
        }
        @keyframes slideUp {
          from { transform: translateY(24px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .modal-title { font-size: 18px; font-weight: 700; color: #111827; margin: 0; }
        .modal-subtitle { font-size: 12px; color: #9ca3af; margin-top: 3px; }
        .modal-close {
          width: 32px; height: 32px; border-radius: 8px;
          border: 1px solid #e5e7eb; background: #f9fafb;
          font-size: 16px; cursor: pointer; display: flex;
          align-items: center; justify-content: center; color: #6b7280;
        }
        .modal-close:hover { background: #f3f4f6; color: #111827; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .form-group { display: flex; flex-direction: column; gap: 5px; }
        .form-group.full-width { grid-column: 1 / -1; }
        .form-label {
          font-size: 11px; font-weight: 700; color: #6b7280;
          text-transform: uppercase; letter-spacing: 0.06em;
        }
        .form-input {
          height: 40px; border: 1.5px solid #e5e7eb; border-radius: 10px;
          padding: 0 12px; font-size: 13px; color: #111827;
          background: #f9fafb; outline: none; width: 100%; box-sizing: border-box;
          transition: border-color 0.15s, background 0.15s;
        }
        .form-input:focus { border-color: #1D9E75; background: #fff; }
        .modal-error {
          margin-top: 12px; padding: 10px 14px; background: #FEF2F2;
          border: 1px solid #FECACA; border-radius: 10px;
          font-size: 12px; color: #DC2626;
        }
        .modal-footer { margin-top: 24px; display: flex; gap: 10px; justify-content: flex-end; }
        .btn-cancel {
          height: 40px; padding: 0 18px; border: 1.5px solid #e5e7eb;
          border-radius: 10px; background: #fff; font-size: 13px;
          font-weight: 600; color: #6b7280; cursor: pointer;
        }
        .btn-cancel:hover { background: #f3f4f6; color: #111827; }
        .btn-save {
          height: 40px; padding: 0 22px; border: none; border-radius: 10px;
          background: #1D9E75; font-size: 13px; font-weight: 700;
          color: #fff; cursor: pointer; display: flex; align-items: center; gap: 6px;
        }
        .btn-save:hover:not(:disabled) { background: #0F6E56; }
        .btn-save:disabled { opacity: 0.65; cursor: not-allowed; }
        .spinner {
          width: 14px; height: 14px; border: 2px solid rgba(255,255,255,0.4);
          border-top-color: #fff; border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <div>
              <h2 className="modal-title">Edit Tutor</h2>
              <p className="modal-subtitle">Update {teacher.Name}s information</p>
            </div>
            <button className="modal-close" onClick={onClose}>✕</button>
          </div>

          <div className="form-grid">
            <div className="form-group full-width">
              <label className="form-label">Full Name</label>
              <input className="form-input" name="Name" value={form.Name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Subject / Category</label>
              <input className="form-input" name="category" value={form.category} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Hourly Fee (৳)</label>
              <input className="form-input" name="price" type="number" value={form.price} onChange={handleChange} />
            </div>
            <div className="form-group full-width">
              <label className="form-label">Available Day & Time</label>
              <input className="form-input" name="dayAndTime" value={form.dayAndTime} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Total Slots</label>
              <input className="form-input" name="total" type="number" value={form.total} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Session Start Date</label>
              <input className="form-input" name="sessionStartDate" type="date" value={form.sessionStartDate} onChange={handleChange} />
            </div>
          </div>

          {error && <div className="modal-error">{error}</div>}

          <div className="modal-footer">
            <button className="btn-cancel" onClick={onClose} disabled={loading}>Cancel</button>
            <button className="btn-save" onClick={handleSubmit} disabled={loading}>
              {loading ? <span className="spinner" /> : '✓'}
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};