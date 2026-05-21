

// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";
// import React from "react";

// const BookingSession = async () => {
//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });

//   const user = session?.user;

//   if (!user) {
//     return (
//       <div className="text-center mt-10">
//         <h1>Please login first</h1>
//       </div>
//     );
//   }

//   const res = await fetch(
//     `http://localhost:5000/booking/${user.id}`,
//     {
//       cache: "no-store",
//     }
//   );

//   const bookings = await res.json();

//   return (
//     <div className="w-11/12 mx-auto py-10">
//       <h1 className="text-3xl font-bold mb-8 text-center">
//         My Booking Session
//       </h1>

//       <div className="w-full bg-white shadow-lg rounded-lg p-6 overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200 text-gray-700">
//               <th className="border p-3 text-center">Name</th>
//               <th className="border p-3 text-center">Phone</th>
//               <th className="border p-3 text-center">Tutor Name</th>
//               <th className="border p-3 text-center">Email</th>
//               <th className="border p-3 text-center">Status</th>
//               <th className="border p-3 text-center">Cancel</th>
//             </tr>
//           </thead>

//           <tbody>
//             {bookings?.map((booking) => (
//               <tr
//                 key={booking._id}
//                 className="hover:bg-gray-50"
//               >
//                 <td className="border p-3">
//                   <div className="flex justify-center items-center">
//                     {booking.username}
//                   </div>
//                 </td>

//                 <td className="border p-3">
//                   <div className="flex justify-center items-center">
//                     {booking.usernumber}
//                   </div>
//                 </td>

//                 <td className="border p-3">
//                   <div className="flex justify-center items-center">
//                     {booking.tutorName}
//                   </div>
//                 </td>

//                 <td className="border p-3">
//                   <div className="flex justify-center items-center">
//                     {booking.useremail}
//                   </div>
//                 </td>

//                 <td className="border p-3">
//                   <div className="flex justify-center items-center">
//                     <span   
//                       className={`px-3 py-1 rounded text-white ${
//                         booking.status === "Confirmed"
//                           ? "bg-green-500"
//                           : "bg-red-500"
//                       }`}
//                     >
//                       confromed
//                       {booking.status || "Pending"}
//                     </span>
//                   </div>
//                 </td>

//                 <td className="border p-3">
//                   <div className="flex justify-center items-center">
//                     <button className="text-red-600 font-bold hover:text-red-800">
//                       ✖
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };


// export default BookingSession;





import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import BookingTable from "@/components/BookingTable";

const BookingSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-6xl mb-4">🔒</p>
          <h1 className="text-2xl font-bold text-gray-700">Please login first</h1>
        </div>
      </div>
    );
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user.id}`, {
    cache: "no-store",
  });

  const bookings = await res.json();

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800">My Booking Sessions</h1>
        <p className="text-sm text-gray-500 mt-1">{bookings?.length || 0} booking{bookings?.length !== 1 ? 's' : ''} found</p>
      </div>
      <BookingTable initialBookings={bookings} />
    </div>
  );
};

export default BookingSession;
