import { Table } from "flowbite-react";

const VolunteerCard = ({ volunteer, handleDelete }) => {
    return (
            <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {volunteer.name}
                    </Table.Cell>
                    <Table.Cell>
                        {volunteer.email}
                    </Table.Cell>
                    <Table.Cell>
                        {volunteer.date}
                    </Table.Cell>
                    <Table.Cell>
                        {volunteer.organization}
                    </Table.Cell>
                    <Table.Cell>
                        <button onClick={()=>handleDelete(volunteer._id)} className="bg-red-600 px-5 py-2 rounded-lg font-semibold text-white">Delete</button>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
    );
};

export default VolunteerCard;