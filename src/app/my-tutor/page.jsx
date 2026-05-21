





// 'use client';

// import { useState, useEffect } from 'react';
// import { Deletebook } from '@/components/Deletebook';
// import { EditTutorModal } from '@/components/EditTutorModal';
// import { authClient } from '@/lib/auth-client';

// const AllTutorPage = () => {
//   const [teachers, setTeachers] = useState([]);
//   const [editingTeacher, setEditingTeacher] = useState(null);

//   useEffect(() => {
//     fetch('http://127.0.0.1:5000/teachers', { cache: 'no-store' })
//       .then(res => res.json())
//       .then(data => setTeachers(data))
//       .catch(err => console.log("Fetch error:", err));
//   }, []);

//   const handleUpdated = (updatedTeacher) => {

//     // const {data:tokenData} =  authClient.token()
//     setTeachers((prev) =>
//       prev.map((t) => (t._id === updatedTeacher._id ? updatedTeacher : t))
//     );
//   };

//   return (
//     <>
//       <style>{`
//         .tutor-page {
//           min-height: calc(100vh - 64px);
//           background-color: #f9fafb;
//           padding: 32px 24px;
//           box-sizing: border-box;
//         }
//         .tutor-header {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           margin-bottom: 24px;
//         }
//         .tutor-title {
//           font-size: 22px;
//           font-weight: 700;
//           color: #111827;
//           margin: 0;
//         }
//         .tutor-count {
//           font-size: 13px;
//           color: #6b7280;
//           margin-top: 2px;
//         }
//         .tutor-add-btn {
//           height: 40px;
//           padding: 0 18px;
//           background-color: #1D9E75;
//           color: #fff;
//           border: none;
//           border-radius: 10px;
//           font-size: 13px;
//           font-weight: 600;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }
//         .tutor-add-btn:hover { background-color: #0F6E56; }
//         .tutor-card {
//           background: #ffffff;
//           border-radius: 16px;
//           border: 1px solid #e5e7eb;
//           overflow: hidden;
//           box-shadow: 0 1px 4px rgba(0,0,0,0.05);
//         }
//         .tutor-table { width: 100%; border-collapse: collapse; }
//         .tutor-table thead {
//           background-color: #f3f4f6;
//           border-bottom: 1px solid #e5e7eb;
//         }
//         .tutor-table thead th {
//           padding: 14px 20px;
//           font-size: 11px;
//           font-weight: 700;
//           color: #6b7280;
//           text-transform: uppercase;
//           letter-spacing: 0.06em;
//           text-align: left;
//           white-space: nowrap;
//         }
//         .tutor-table thead th:last-child { text-align: center; }
//         .tutor-table tbody tr {
//           border-bottom: 1px solid #f3f4f6;
//           transition: background 0.15s;
//         }
//         .tutor-table tbody tr:last-child { border-bottom: none; }
//         .tutor-table tbody tr:hover { background-color: #f9fafb; }
//         .tutor-table tbody td {
//           padding: 16px 20px;
//           font-size: 13px;
//           color: #374151;
//           text-align: left;
//           vertical-align: middle;
//         }
//         .tutor-table tbody td:last-child { text-align: center; }
//         .tutor-avatar {
//           width: 36px;
//           height: 36px;
//           border-radius: 50%;
//           background-color: #E1F5EE;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 13px;
//           font-weight: 700;
//           color: #0F6E56;
//           flex-shrink: 0;
//         }
//         .tutor-name-cell { display: flex; align-items: center; gap: 12px; }
//         .tutor-name-text { font-weight: 600; color: #111827; font-size: 13px; }
//         .subject-badge {
//           display: inline-block;
//           padding: 3px 10px;
//           border-radius: 20px;
//           background-color: #EEF2FF;
//           color: #4338CA;
//           font-size: 12px;
//           font-weight: 500;
//         }
//         .slot-badge {
//           display: inline-block;
//           padding: 3px 10px;
//           border-radius: 20px;
//           background-color: #E1F5EE;
//           color: #0F6E56;
//           font-size: 12px;
//           font-weight: 600;
//         }
//         .time-text { color: #6b7280; font-size: 12px; }
//         .price-text { font-weight: 700; color: #111827; font-size: 13px; }
//         .date-text { color: #9ca3af; font-size: 12px; }
//         .action-cell {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//         }
//         .edit-btn {
//           width: 34px;
//           height: 34px;
//           border-radius: 8px;
//           border: 1px solid #e5e7eb;
//           background: #fff;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           font-size: 15px;
//           transition: background 0.15s;
//         }
//         .edit-btn:hover { background: #EEF2FF; border-color: #c7d2fe; }
//         .empty-row td {
//           padding: 60px 20px;
//           text-align: center;
//           color: #9ca3af;
//           font-size: 14px;
//         }
//       `}</style>

//       <div className="tutor-page">

//         {/* Header */}
//         <div className="tutor-header">
//           <div>
//             <h1 className="tutor-title">All Tutors</h1>
//             <p className="tutor-count">{teachers.length} tutor{teachers.length !== 1 ? 's' : ''} registered</p>
//           </div>
//           <button className="tutor-add-btn">+ Add Tutor</button>
//         </div>

//         {/* Table Card */}
//         <div className="tutor-card">
//           <table className="tutor-table">
//             <thead>
//               <tr>
//                 <th>Tutor</th>
//                 <th>Subject</th>
//                 <th>Available</th>
//                 <th>Hourly Fee</th>
//                 <th>Slots</th>
//                 <th>Registered</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {teachers && teachers.length > 0 ? (
//                 teachers.map((teacher) => {
//                   const initials = teacher.Name
//                     ? teacher.Name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
//                     : "?";

//                   return (
//                     <tr key={teacher._id}>
//                       <td>
//                         <div className="tutor-name-cell">
//                           <div className="tutor-avatar">{initials}</div>
//                           <span className="tutor-name-text">{teacher.Name}</span>
//                         </div>
//                       </td>
//                       <td><span className="subject-badge">{teacher.category}</span></td>
//                       <td><span className="time-text">{teacher.dayAndTime}</span></td>
//                       <td><span className="price-text">৳{teacher.price}</span></td>
//                       <td><span className="slot-badge">{teacher.total} slots</span></td>
//                       <td>
//                         <span className="date-text">
//                           {new Date(teacher.sessionStartDate).toLocaleDateString('en-US', {
//                             year: 'numeric', month: 'short', day: 'numeric'
//                           })}
//                         </span>
//                       </td>
//                       <td>
//                         <div className="action-cell">
//                           <Deletebook teachersId={teacher._id} />
//                           <button
//                             className="edit-btn"
//                             onClick={() => setEditingTeacher(teacher)}
//                           >
//                             ✏️
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr className="empty-row">
//                   <td colSpan={7}>No tutors found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//       </div>

//       {/* Edit Modal */}
//       {editingTeacher && (
//         <EditTutorModal
//           teacher={editingTeacher}
//           onClose={() => setEditingTeacher(null)}
//           onUpdated={handleUpdated}
//         />
//       )}
//     </>
//   );
// };

// export default AllTutorPage;





'use client';

import { useState, useEffect } from 'react';
import { Deletebook } from '@/components/Deletebook';
import { EditTutorModal } from '@/components/EditTutorModal';

const AllTutorPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [editingTeacher, setEditingTeacher] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}teachers`, { cache: 'no-store' })
      .then(res => res.json())
      .then(data => setTeachers(data))
      .catch(err => console.log("Fetch error:", err));
  }, []);

  const handleUpdated = (updatedTeacher) => {
    setTeachers((prev) =>
      prev.map((t) => (t._id === updatedTeacher._id ? updatedTeacher : t))
    );
  };

  return (
    <>
      <style>{`
        .tutor-page {
          min-height: calc(100vh - 64px);
          background-color: #f9fafb;
          padding: clamp(16px, 4vw, 32px) clamp(12px, 4vw, 24px);
          box-sizing: border-box;
        }
        .tutor-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .tutor-title { font-size: clamp(18px, 3vw, 22px); font-weight: 700; color: #111827; margin: 0; }
        .tutor-count { font-size: 13px; color: #6b7280; margin-top: 2px; }
        .tutor-add-btn {
          height: 40px; padding: 0 18px;
          background-color: #1D9E75; color: #fff;
          border: none; border-radius: 10px;
          font-size: 13px; font-weight: 600;
          cursor: pointer; display: flex; align-items: center; gap: 6px;
          white-space: nowrap;
        }
        .tutor-add-btn:hover { background-color: #0F6E56; }
        .tutor-card {
          background: #ffffff; border-radius: 16px;
          border: 1px solid #e5e7eb; overflow: hidden;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }

        /* Desktop table */
        .tutor-table { width: 100%; border-collapse: collapse; }
        .tutor-table thead { background-color: #f3f4f6; border-bottom: 1px solid #e5e7eb; }
        .tutor-table thead th {
          padding: 14px 20px; font-size: 11px; font-weight: 700;
          color: #6b7280; text-transform: uppercase; letter-spacing: 0.06em;
          text-align: left; white-space: nowrap;
        }
        .tutor-table thead th:last-child { text-align: center; }
        .tutor-table tbody tr { border-bottom: 1px solid #f3f4f6; transition: background 0.15s; }
        .tutor-table tbody tr:last-child { border-bottom: none; }
        .tutor-table tbody tr:hover { background-color: #f9fafb; }
        .tutor-table tbody td {
          padding: 16px 20px; font-size: 13px;
          color: #374151; text-align: left; vertical-align: middle;
        }
        .tutor-table tbody td:last-child { text-align: center; }

        /* Mobile cards */
        .tutor-cards { display: none; flex-direction: column; gap: 12px; padding: 12px; }
        .tutor-mobile-card {
          background: #fff; border: 1px solid #e5e7eb;
          border-radius: 14px; padding: 16px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }
        .tmc-header {
          display: flex; align-items: center;
          justify-content: space-between; margin-bottom: 12px;
        }
        .tmc-name-row { display: flex; align-items: center; gap: 10px; }
        .tmc-row {
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 7px 0; border-bottom: 1px solid #f3f4f6;
          font-size: 13px;
        }
        .tmc-row:last-of-type { border-bottom: none; }
        .tmc-label { font-size: 11px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.06em; }
        .tmc-footer { display: flex; justify-content: flex-end; gap: 8px; margin-top: 12px; }

        /* Shared */
        .tutor-avatar {
          width: 36px; height: 36px; border-radius: 50%;
          background-color: #E1F5EE; display: flex;
          align-items: center; justify-content: center;
          font-size: 13px; font-weight: 700; color: #0F6E56; flex-shrink: 0;
        }
        .tutor-name-cell { display: flex; align-items: center; gap: 12px; }
        .tutor-name-text { font-weight: 600; color: #111827; font-size: 13px; }
        .subject-badge {
          display: inline-block; padding: 3px 10px; border-radius: 20px;
          background-color: #EEF2FF; color: #4338CA; font-size: 12px; font-weight: 500;
        }
        .slot-badge {
          display: inline-block; padding: 3px 10px; border-radius: 20px;
          background-color: #E1F5EE; color: #0F6E56; font-size: 12px; font-weight: 600;
        }
        .time-text { color: #6b7280; font-size: 12px; }
        .price-text { font-weight: 700; color: #111827; font-size: 13px; }
        .date-text { color: #9ca3af; font-size: 12px; }
        .action-cell { display: flex; align-items: center; justify-content: center; gap: 8px; }
        .edit-btn {
          width: 34px; height: 34px; border-radius: 8px;
          border: 1px solid #e5e7eb; background: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 15px; transition: background 0.15s;
        }
        .edit-btn:hover { background: #EEF2FF; border-color: #c7d2fe; }
        .empty-row td { padding: 60px 20px; text-align: center; color: #9ca3af; font-size: 14px; }

        @media (max-width: 768px) {
          .tutor-table { display: none; }
          .tutor-cards { display: flex; }
        }
      `}</style>

      <div className="tutor-page">

        {/* Header */}
        <div className="tutor-header">
          <div>
            <h1 className="tutor-title">All Tutors</h1>
            <p className="tutor-count">{teachers.length} tutor{teachers.length !== 1 ? 's' : ''} registered</p>
          </div>
          <button className="tutor-add-btn">+ Add Tutor</button>
        </div>

        <div className="tutor-card">

          {/* Desktop Table */}
          <table className="tutor-table">
            <thead>
              <tr>
                <th>Tutor</th>
                <th>Subject</th>
                <th>Available</th>
                <th>Hourly Fee</th>
                <th>Slots</th>
                <th>Registered</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {teachers && teachers.length > 0 ? teachers.map((teacher) => {
                const initials = teacher.Name
                  ? teacher.Name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
                  : "?";
                return (
                  <tr key={teacher._id}>
                    <td>
                      <div className="tutor-name-cell">
                        <div className="tutor-avatar">{initials}</div>
                        <span className="tutor-name-text">{teacher.Name}</span>
                      </div>
                    </td>
                    <td><span className="subject-badge">{teacher.category}</span></td>
                    <td><span className="time-text">{teacher.dayAndTime}</span></td>
                    <td><span className="price-text">৳{teacher.price}</span></td>
                    <td><span className="slot-badge">{teacher.total} slots</span></td>
                    <td>
                      <span className="date-text">
                        {new Date(teacher.sessionStartDate).toLocaleDateString('en-US', {
                          year: 'numeric', month: 'short', day: 'numeric'
                        })}
                      </span>
                    </td>
                    <td>
                      <div className="action-cell">
                        <Deletebook teachersId={teacher._id} />
                        <button className="edit-btn" onClick={() => setEditingTeacher(teacher)}>✏️</button>
                      </div>
                    </td>
                  </tr>
                );
              }) : (
                <tr className="empty-row"><td colSpan={7}>No tutors found</td></tr>
              )}
            </tbody>
          </table>

          {/* Mobile Cards */}
          <div className="tutor-cards">
            {teachers && teachers.length > 0 ? teachers.map((teacher) => {
              const initials = teacher.Name
                ? teacher.Name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
                : "?";
              return (
                <div key={teacher._id} className="tutor-mobile-card">
                  <div className="tmc-header">
                    <div className="tmc-name-row">
                      <div className="tutor-avatar">{initials}</div>
                      <span className="tutor-name-text">{teacher.Name}</span>
                    </div>
                    <span className="subject-badge">{teacher.category}</span>
                  </div>

                  <div className="tmc-row">
                    <span className="tmc-label">Available</span>
                    <span className="time-text">{teacher.dayAndTime}</span>
                  </div>
                  <div className="tmc-row">
                    <span className="tmc-label">Hourly Fee</span>
                    <span className="price-text">৳{teacher.price}</span>
                  </div>
                  <div className="tmc-row">
                    <span className="tmc-label">Slots</span>
                    <span className="slot-badge">{teacher.total} slots</span>
                  </div>
                  <div className="tmc-row">
                    <span className="tmc-label">Registered</span>
                    <span className="date-text">
                      {new Date(teacher.sessionStartDate).toLocaleDateString('en-US', {
                        year: 'numeric', month: 'short', day: 'numeric'
                      })}
                    </span>
                  </div>

                  <div className="tmc-footer">
                    <Deletebook teachersId={teacher._id} />
                    <button className="edit-btn" onClick={() => setEditingTeacher(teacher)}>✏️</button>
                  </div>
                </div>
              );
            }) : (
              <div style={{ padding: "40px", textAlign: "center", color: "#9ca3af", fontSize: "14px" }}>
                No tutors found
              </div>
            )}
          </div>

        </div>
      </div>

      {editingTeacher && (
        <EditTutorModal
          teacher={editingTeacher}
          onClose={() => setEditingTeacher(null)}
          onUpdated={handleUpdated}
        />
      )}
    </>
  );
};

export default AllTutorPage;
