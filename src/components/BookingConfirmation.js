import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/BookingConfirmation.css';

const BookingConfirmation = () => {
  const location = useLocation();
  const { bookingDetails } = location.state || { bookingDetails: {} };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="booking-confirmation-container">
      <h2>Booking Confirmation</h2>
      <p><strong>Booking ID:</strong> {bookingDetails.id}</p>
      <p><strong>ShowTime ID:</strong> {bookingDetails.showTimeId}</p>
      <p><strong>Seats:</strong> {Array.isArray(bookingDetails.seatIds) ? bookingDetails.seatIds.join(', ') : 'N/A'}</p>
      <p><strong>Movie ID:</strong> {bookingDetails.movieId}</p>
      <p><strong>Theatre ID:</strong> {bookingDetails.theatreId}</p>
      <p><strong>Booking Date:</strong> {new Date(bookingDetails.bookingDate).toLocaleString()}</p>
      <p><strong>Total Amount:</strong> ${bookingDetails.totalamount?.toFixed(2)}</p>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
};

export default BookingConfirmation;
