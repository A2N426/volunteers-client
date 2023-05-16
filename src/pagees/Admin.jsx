import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import VolunteerCard from "../components/VolunteerCard";

const Admin = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch("https://volunteer-own-server.vercel.app/volunteers")
            .then(res => res.json())
            .then(data => {
                setVolunteers(data);
            })
    }, [])

    const handleDelete = id =>{
        fetch(`https://volunteer-own-server.vercel.app/volunteers/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                const remaining = volunteers.filter(volunteer=>volunteer._id !== id);
                setVolunteers(remaining);
            }
        })
    }

    return (
        <div>
            <h2 className="text-center text-4xl font-semibold mb-10">Volunteer Control Room</h2>
            <Table>
                <Table.Head>
                    <Table.HeadCell>
                        Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Email
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Registration Date
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Volunteer List
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Action
                    </Table.HeadCell>
                </Table.Head>

                {
                    volunteers.map(volunteer => <VolunteerCard
                        key={volunteer._id}
                        volunteer={volunteer}
                        handleDelete={handleDelete}
                    ></VolunteerCard>)
                }

            </Table>
        </div>
    );
};

export default Admin;