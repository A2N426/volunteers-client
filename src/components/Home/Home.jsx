import { Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import ClientCard from "./ClientCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const [clients, setClients] = useState([])
    const { totalStock } = useLoaderData()
    const [currentPage, setCurrentPage] = useState(0);
    const [clientsPerPage, setClientsPerPage] = useState(10);

    const totalPage = Math.ceil(totalStock / clientsPerPage);

    const pageNumbers = [...Array(totalPage).keys()]



    useEffect(() => {
        fetch(`https://volunteer-own-server.vercel.app/clients?page=${currentPage}&size=${clientsPerPage}`)
            .then(res => res.json())
            .then(data => setClients(data))
    }, [currentPage, clientsPerPage])


    // for searching

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const search = form.search.value;

        const url = `https://volunteer-own-server.vercel.app/searchclients?name=${search.split(" ").join("-")}`

        fetch(url, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setClients(data)
            })
    }

    const options = [5, 10, 15, 20]
    const handleChange = event => {
        setClientsPerPage(parseInt(event.target.value));
        setCurrentPage(0);
    }

    return (
        <div className="mt-10 md:mt-16">
            <form onSubmit={handleSubmit} className="w-1/6 mb-5 mx-auto">
                <div className="mb-2 block">
                    <Label
                        htmlFor="text"
                        value="Search Your Clients"
                    />
                </div>
                <div className="flex justify-between">
                    <TextInput
                        className="relative"
                        id="text"
                        name="search"
                        type="text"
                        placeholder="Your search"
                        required={true}
                    />
                    <input className="bg-blue-600 font-bold absolute ml-40 text-white py-2.5 px-4 rounded-md" type="submit" value="Search" />
                </div>
            </form>

            {/* client sections */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {
                    clients.map(client => <ClientCard
                        key={client._id}
                        client={client}
                    ></ClientCard>)
                }
            </div>

            {/* pagination */}
            <p>Page number : {currentPage + 1}</p>

            <div className="text-center mt-10 mb-10 flex justify-center border border-red-600 rounded-2xl">
                <div>
                    {
                        pageNumbers.map(page => <button
                            onClick={() => setCurrentPage(page)}
                            className={`mx-10 border border-red-300 rounded px-5 py-2 ${page === currentPage && "bg-blue-600"}`} key={page}>{page + 1}</button>)
                    }
                </div>
                <select
                    onChange={handleChange}
                    value={clientsPerPage}>
                    {
                        options.map(option => <option key={option} value={option}>{option}</option>)
                    }
                </select>
            </div>
        </div>
    );
};

export default Home;