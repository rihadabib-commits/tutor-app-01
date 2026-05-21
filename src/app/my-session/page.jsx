



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
