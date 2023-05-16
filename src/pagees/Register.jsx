import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Providers/AuthProviders";

const Register = () => {

    const {register}=useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        register(email,password)
        .then(result=>{
            const createdUser = result.user;
            navigate("/")
            console.log("from register: ", createdUser)
        })
        .catch(err=>console.log(err.message))

    }

    return (
        <div className="w-2/3 mx-auto">
            <h1 className="text-center text-4xl font-semibold">Register Please</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Your Name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password"
                            value="password"
                        />
                    </div>
                    <TextInput
                        id="password"
                        name="password"
                        type="password"
                        required={true}
                        shadow={true}
                    />
                </div>
                <Button type="submit">
                    Register new account
                </Button>
                <p className="text-center">Already have an account? Please <Link to="/login" className="underline text-blue-800">Login</Link> </p>
            </form>
        </div>
    );
};

export default Register;