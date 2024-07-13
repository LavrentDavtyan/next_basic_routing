import Link from "next/link";
import { NavLink } from "./navlink";

export const Navbar = ()=>{
    return (
        <>
            <nav className="navbar has-background-dark">
                <NavLink className="navbar-item is-color-white has-background-succses" href="/">home</NavLink>
                <NavLink className="navbar-item is-color-white" href="/books">books</NavLink>
                <NavLink className="navbar-item is-color-white" href="/signup">signup</NavLink>
                <NavLink className="navbar-item is-color-white" href="/login">login</NavLink>
            </nav>
        </>
    );
    
}