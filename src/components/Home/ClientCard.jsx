import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const ClientCard = ({ client }) => {
    const {_id, name, img } = client
    return (
        <div>
            <div className="max-w-sm">
                <Card imgSrc={img} className="p-2">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <div>
                        <Link className="bg-blue-600 px-8 py-2 font-semibold text-white rounded-lg" to={`/forBooking/${_id}`} >
                            For booking
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ClientCard;