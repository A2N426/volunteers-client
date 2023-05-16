import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Providers/AuthProviders";
import BookingCard from "../components/BookingCard";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
    const { user } = useContext(UserContext);
    const [bookingClients, setBookingClients] = useState([]);
    const navigate = useNavigate()


    const url = `https://volunteer-own-server.vercel.app/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url,{
            method:"GET",
            headers:{
                authorization:`Bearer ${localStorage.getItem("secret-token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setBookingClients(data)
                }
                else{
                    navigate("/")
                }
            })
    }, [url,navigate])

    const handleCancel = (id) => {
        fetch(`https://volunteer-own-server.vercel.app/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ status: "cancel" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookingClients.filter(booking => booking.id !== id);
                    const find = bookingClients.find(booking => booking._id === id);
                    find.status = "confirm";
                    const newBooking = [find, ...remaining]
                    setBookingClients(newBooking)
                }
            })
    }

    const handleDelete = (id) => {
        fetch(`https://volunteer-own-server.vercel.app/bookings/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = bookingClients.filter(booking => booking._id !== id);
                    setBookingClients(remaining);
                }
            })
    }

    return (
        <div>
            <h2 className="text-center text-4xl font-bold mb-10">Booking List</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                {
                    bookingClients.map((booking, index) => <BookingCard
                        key={index}
                        booking={booking}
                        handleCancel={handleCancel}
                        handleDelete={handleDelete}
                    ></BookingCard>)
                }
            </div>
        </div>
    );
};

export default Bookings;