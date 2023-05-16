import { Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";


const AddClients = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const img = selectedFile;
        const newClients = { name, img }
        fetch("https://volunteer-own-server.vercel.app/clients", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newClients)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    console.log(selectedFile)

    return (
        <div className="text-center mt-10">
            <Link to="/admin" className="bg-blue-600 px-5 py-2 rounded-lg font-semibold text-white">Go to Manage volunteers</Link>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email2"
                                value="Enter Name"
                            />
                        </div>
                        <TextInput
                            id="email2"
                            name="name"
                            type="text"
                            placeholder="Enter Name"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <h3>File Upload</h3>
                    <div className="form-group">
                        <input type="file" onChange={handleFileChange} />
                    </div>
                    <input className="bg-blue-600 cursor-pointer px-8 py-2 w-full rounded-lg font-semibold text-white" type="submit" value="Add to database" />
                </form>
            </div>
        </div>
    );
};

export default AddClients;