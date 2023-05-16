import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Providers/AuthProviders";


const NavBar = () => {
    const { user, logOut } = useContext(UserContext);

    const handLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err.message))
    }
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Link to="/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite
                    </span>
                </Link>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link to="/">Home</Link>
                    <Link to="/bookings">Booking List</Link>

                    {/* login and log out related */}

                    {
                        user
                            ?
                            <Link onClick={handLogOut}>
                                LogOut
                            </Link>
                            :
                            <Link to="/login">
                                Login
                            </Link>
                    }

                    <Link to="/volunteer">
                        Register
                    </Link>
                    <Link to="/addClients">
                        Volunteers
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;