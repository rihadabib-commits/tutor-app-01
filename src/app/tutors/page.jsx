// import TutorCard from '@/components/Tutor';
// import React from 'react';
  
// const AllTutorPage = async() => {
//       const res = await fetch('http://localhost:5000/teachers')
//       const teachers = await res.json()
         

//       console.log(teachers)
//     return (
//         <div>
//             <h1>
//                 All tutor
//             </h1>
//             <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
//                 {teachers.map(teacher => <TutorCard key={teacher._id} teacher={teacher} />)}
//             </div>
//         </div>
//     );
// };

// export default AllTutorPage;


import TutorCard from '@/components/Tutor';
import TutorsClient from '@/components/TutorsClient';
import React from 'react';

const AllTutorPage = async () => {
  const res = await fetch('http://localhost:5000/teachers', {
    cache: 'no-store'
  })
  const teachers = await res.json()

  console.log("Total teachers:", teachers.length)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Tutors</h1>
              <TutorsClient teachers={teachers} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers && teachers.length > 0 ? (
          teachers.map(teacher => (
            <TutorCard key={teacher._id} teacher={teacher} />
          ))
        ) : (
          <p>No tutors found
        )}
      </div>
    </div>
  );
};

export default AllTutorPage;