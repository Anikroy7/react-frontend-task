import { Link } from "react-router-dom";
import { useNotification } from "../../context/NotificationContext";

const Navbar = () => {

    const { bellCount } = useNotification();

    return (
        <>
            <nav className="navbar bg-base-100 sticky top-0 z-40">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Signup</a></li>
                            <li><a>Login</a></li>
                        </ul>
                    </div>
                    <div>
                        <Link to={'/'}>
                            <img
                                src="https://synesisit.com.bd/wp-content/uploads/bfi_thumb/synesis-it_black-01-3cnxnb2fli8plmawcwjd6yrbbx785tikrerr65856w2h3hp9g.png"
                                alt="Synesis IT Logo"
                                className="h-16 w-auto"
                            />
                        </Link>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="flex items-center space-x-4">
                        <div className="relative flex items-center bg-[#D9D9D933] gap-3 p-2 px-4">
                            <span className="ml-2 text-sm font-medium text-gray-600">
                                Bell Counter
                            </span>
                            <img
                                src="/assets/icons/bell.svg"
                                alt="Bell Icon"
                                className="h-5 w-5 text-gray-700"
                            />
                            <span className="absolute bottom-4 right-1 rounded-full px-1.5 py-0.5 font-bold">
                                {bellCount}
                            </span>
                        </div>
                        <div className="flex items-center justify-center gap-5 hidden md:flex">
                            <button className="btn btn-xs py-1 px-8 border border-gray-300 ">
                                Sign in
                            </button>
                            <button className="btn btn-xs py-1 px-8 bg-[#2C2C2C] text-white">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <hr className="border-t border-gray-300" />
        </>
    );
};

export default Navbar;
