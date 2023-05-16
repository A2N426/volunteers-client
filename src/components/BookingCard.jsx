import { Button, Card } from 'flowbite-react';

const BookingCard = ({ booking, handleCancel, handleDelete }) => {
    return (
        <div className="max-w-sm">
            <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={booking.img}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {booking.name}
                </h5>
                {
                    booking.status === "cancel" 
                    ? 
                    <span className='text-blue-600 font-bold' size="xs">
                    Canceled
                </span>
                    :
                        <Button onClick={() => handleCancel(booking._id)} size="xs">
                            Cancel
                        </Button>
                }

                <button onClick={()=>handleDelete(booking._id)} className='bg-red-600 font-semibold text-white px-6 py-2 rounded-lg'>Delete</button>
            </Card>
        </div>
    );
};

export default BookingCard;