import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../Providers/AuthProviders";


const Login = () => {
    const { logIn,signInWIthGoogle } = useContext(UserContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";


    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
                console.log("from login", loggedUser)
            })
            .catch(err => console.log(err.message))
    }

    const handleGoogle = ()=>{
        signInWIthGoogle()
        .then(result=>{
            console.log("from google",result.user)
            navigate(from,{replace:true})
        })
        .catch(err=>console.log(err.message))
    }

    return (
        <div className="w-2/3 mx-auto">
            <h1 className="text-center text-4xl font-semibold">Login Please</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                    Login
                </Button>
                <p className="text-center">Do not have an account? Please <Link to="/register" className="underline text-blue-800">Register</Link> </p>
            </form>
            <p className="text-center font-bold text-xl">Or</p>
            <div className="text-center mt-3">
                <button onClick={handleGoogle} className="bg-blue-800 w-1/2 px-6 py-2 rounded-lg text-white">Google</button>
            </div>
        </div>
    );
};

export default Login;