import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../Providers/AuthProviders";
import { Spinner } from "flowbite-react";

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(UserContext);
    const location = useLocation();

    if(loading){
        return <Spinner
        aria-label="Extra large spinner example"
        size="xl"
      />
    }

    if(user){
        return children;
    }

    return <Navigate state={{from:location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;