import { Session } from "next-auth";

export type Cabin = {
  id: string;
  name: string;
  image: string;
  description: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
};

export type Booking = {
  id: string;
  guestId: string;
  startDate: string;
  endDate: string;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  status?: string;
  created_at: string;
  cabins: {
    name: string;
    image: string;
  };
};

export type Country = {
  name: string;
  flag: string;
};

export type Guest = {
  guestId?: string;
  fullName: string;
  email: string;
  nationalId?: string;
  nationality?: string;
  countryFlag?: string;
};

export type Settings = {
  minBookingLength: number;
  maxBookingLength: number;
};
export type BookingDates = {
  minBookingLength: number;
  maxBookingLength: number;
};

export type ExtendedSession = Session & {
  user: {
    email?: string;
    guestId?: string;
  };
};
