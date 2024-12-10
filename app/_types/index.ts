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
  status: string;
  created_at: string;
  cabins: Cabin;
};

export type Country = {
  name: string;
  flag: string;
};

export type Guest = {
  fullName: string;
  email: string;
  nationalId: string;
  nationality: string;
  countryFlag: string;
};

export type Settings = {
  minBookingLength: number;
  maxBookingLength: number;
};
export type BookingDates = {
  minBookingLength: number;
  maxBookingLength: number;
};
