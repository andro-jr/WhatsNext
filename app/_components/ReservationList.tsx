"use client";

import React, { useOptimistic } from "react";
import ReservationCard from "../account/reservations/ReservationCard";
import { Booking } from "../_types";
import { deleteReservation } from "../_lib/actions";

const ReservationList = ({ bookings }: { bookings: Booking[] }) => {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (currentBookings, bookingId) => {
      return currentBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId: string) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          handleDelete={handleDelete}
          booking={booking}
          key={booking.id}
        />
      ))}
    </ul>
  );
};

export default ReservationList;
