


'use client';

import { useState } from 'react';

const BookingTable = ({ initialBookings }) => {
  const [bookings, setBookings] = useState(initialBookings);

  const handleCancel = (bookingId) => {
    setBookings((prev) =>
      prev.map((b) => b._id === bookingId ? { ...b, status: 'Cancelled' } : b)
    );
  };

  return (
    <>
      <style>{`
        .bt-wrap {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          border: 1px solid #f0f0f0;
        }

        /* Desktop table */
        .bt-table {
          width: 100%;
          border-collapse: collapse;
        }
        .bt-table thead {
          background: linear-gradient(135deg, #1D9E75 0%, #0F6E56 100%);
        }
        .bt-table thead th {
          padding: 16px 20px;
          font-size: 11px;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          text-align: center;
          white-space: nowrap;
        }
        .bt-table tbody tr {
          border-bottom: 1px solid #f3f4f6;
          transition: background 0.15s;
        }
        .bt-table tbody tr:last-child { border-bottom: none; }
        .bt-table tbody tr:hover { background: #f0fdf8; }
        .bt-table tbody td {
          padding: 16px 20px;
          text-align: center;
          vertical-align: middle;
          font-size: 13px;
          color: #374151;
        }

        /* Mobile cards */
        .bt-cards { display: none; padding: 12px; gap: 12px; flex-direction: column; }
        .bt-card {
          background: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .bt-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .bt-card-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #f3f4f6;
          font-size: 13px;
        }
        .bt-card-row:last-of-type { border-bottom: none; }
        .bt-card-label {
          font-size: 11px;
          font-weight: 700;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .bt-card-value { color: #374151; font-size: 13px; text-align: right; }
        .bt-card-footer {
          margin-top: 12px;
          display: flex;
          justify-content: flex-end;
        }

        /* Shared styles */
        .bt-name { font-weight: 700; color: #111827; font-size: 13px; }
        .bt-email { color: #6b7280; font-size: 12px; }
        .bt-phone { font-size: 13px; color: #374151; }
        .bt-tutor {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #EEF2FF;
          color: #4338CA;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
        }
        .status-confirmed { background: #dcfce7; color: #15803d; }
        .status-cancelled { background: #fee2e2; color: #dc2626; }
        .cancel-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 7px 16px;
          border-radius: 10px;
          border: 1.5px solid #fca5a5;
          background: #fff;
          color: #dc2626;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.15s;
        }
        .cancel-btn:hover { background: #fee2e2; border-color: #dc2626; }
        .cancel-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          border-color: #e5e7eb;
          color: #9ca3af;
        }
        .empty-state { padding: 80px 20px; text-align: center; }
        .empty-icon { font-size: 48px; margin-bottom: 12px; }
        .empty-text { color: #9ca3af; font-size: 14px; }
        .row-even { background: #ffffff; }
        .row-odd { background: #fafafa; }

        @media (max-width: 768px) {
          .bt-table { display: none; }
          .bt-cards { display: flex; }
        }
      `}</style>

      <div className="bt-wrap">

        {/* Desktop Table */}
        <table className="bt-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Tutor</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.length > 0 ? bookings.map((booking, index) => {
              const isCancelled = booking.status === 'Cancelled';
              return (
                <tr key={booking._id} className={index % 2 === 0 ? 'row-even' : 'row-odd'}>
                  <td><span className="bt-name">{booking.username}</span></td>
                  <td><span className="bt-phone">{booking.usernumber}</span></td>
                  <td><span className="bt-tutor">📚 {booking.tutorName}</span></td>
                  <td><span className="bt-email">{booking.useremail}</span></td>
                  <td>
                    <span className={`status-badge ${isCancelled ? 'status-cancelled' : 'status-confirmed'}`}>
                      {isCancelled ? '✕' : '✓'} {isCancelled ? 'Cancelled' : 'Confirmed'}
                    </span>
                  </td>
                  <td>
                    <button className="cancel-btn" disabled={isCancelled} onClick={() => handleCancel(booking._id)}>
                      ✖ {isCancelled ? 'Cancelled' : 'Cancel'}
                    </button>
                  </td>
                </tr>
              );
            }) : (
              <tr>
                <td colSpan={6}>
                  <div className="empty-state">
                    <div className="empty-icon">📭</div>
                    <p className="empty-text">No bookings found</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Mobile Cards */}
        <div className="bt-cards">
          {bookings?.length > 0 ? bookings.map((booking) => {
            const isCancelled = booking.status === 'Cancelled';
            return (
              <div key={booking._id} className="bt-card">
                <div className="bt-card-header">
                  <span className="bt-name">{booking.username}</span>
                  <span className={`status-badge ${isCancelled ? 'status-cancelled' : 'status-confirmed'}`}>
                    {isCancelled ? '✕' : '✓'} {isCancelled ? 'Cancelled' : 'Confirmed'}
                  </span>
                </div>

                <div className="bt-card-row">
                  <span className="bt-card-label">Phone</span>
                  <span className="bt-card-value">{booking.usernumber}</span>
                </div>
                <div className="bt-card-row">
                  <span className="bt-card-label">Email</span>
                  <span className="bt-email">{booking.useremail}</span>
                </div>
                <div className="bt-card-row">
                  <span className="bt-card-label">Tutor</span>
                  <span className="bt-tutor">📚 {booking.tutorName}</span>
                </div>

                <div className="bt-card-footer">
                  <button className="cancel-btn" disabled={isCancelled} onClick={() => handleCancel(booking._id)}>
                    ✖ {isCancelled ? 'Cancelled' : 'Cancel'}
                  </button>
                </div>
              </div>
            );
          }) : (
            <div className="empty-state">
              <div className="empty-icon">📭</div>
              <p className="empty-text">No bookings found</p>
            </div>
          )}
        </div>

      </div>
    </>
  );
};

export default BookingTable;