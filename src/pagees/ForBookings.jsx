import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../Providers/AuthProviders";

const ForBookings = () => {
    const loadedClient = useLoaderData();
    const {user}=useContext(UserContext)

    const handleSubmit = event =>{
        event.preventDefault();

        const form = event.target;
        const date = form.date.value;
        const img =  form.img.value;
        const name = form.name.value;
        const email = user?.email
        const booking = {email,date,name,img}

        fetch("https://volunteer-own-server.vercel.app/bookings",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Service Name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        defaultValue={loadedClient.name}
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="date"
                            value="Date"
                        />
                    </div>
                    <TextInput
                        id="date"
                        name="date"
                        type="date"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="img"
                            value="Image"
                        />
                    </div>
                    <TextInput
                        id="img"
                        name="img"
                        type="url"
                        defaultValue={loadedClient.img}
                        required={true}
                    />
                </div>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default ForBookings;