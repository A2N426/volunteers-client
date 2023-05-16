import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useContext } from "react";
import { UserContext } from "../Providers/AuthProviders";

const VolunteerForm = () => {
    const {user}=useContext(UserContext)

    const handleSubmit = event =>{
        event.preventDefault()

        const form = event.target;

        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const description = form.description.value;
        const organization = form.organization.value;
        const newVolunteer = {name,email,date,description,organization}
        console.log(newVolunteer)

        fetch(`https://volunteer-own-server.vercel.app/volunteers`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(newVolunteer)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert("volunteer added")
            }
        })
    }


    return (
        <div>
            <h2 className="text-3xl font-bold text-center">Register as Volunteer</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Full Name"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        name="name"
                        type="text"
                        placeholder="Your Name Here"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="UserName or email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        name="email"
                        type="email"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Date"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        name="date"
                        type="date"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Description"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        name="description"
                        placeholder="
                        Write Your description..."
                        required={true}
                        rows={4}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Organization books at he library"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        name="organization"
                        type="text"
                        required={true}
                        shadow={true}
                    />
                </div>
                <Button type="submit">
                    Register new volunteer
                </Button>
            </form>
        </div>
    );
};

export default VolunteerForm;