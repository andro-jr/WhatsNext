import { getBooking, getCabin } from "@/app/_lib/data-service";
import { Booking } from "@/app/_types";
import EditReservationForm from "./EditReservationForm";
interface EditReservationPagePropType {
  params: {
    reservationId: string;
  };
}
export default async function Page({ params }: EditReservationPagePropType) {
  const { reservationId } = params;
  const booking: Booking = await getBooking(reservationId);
  const { cabinId } = booking;

  const cabin = await getCabin(cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>
      <EditReservationForm
      bookingId={reservationId}
        maxCapacity={cabin.maxCapacity}
        numGuests={booking.numGuests}
        observations={booking.observations}
      />
    </div>
  );
}
