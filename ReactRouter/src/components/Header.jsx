import { NavLink } from "react-router-dom";
const Header=()=>{
    return(
        <header>
            <h1>Header</h1>
            <nav>
                <ul className="flex gap-5">
                    <li><NavLink className={({isActive})=>`${isActive?"text-orange-600":"text-gray-500"}`} to="/home">Home</NavLink> </li>
                    <li><NavLink className={({isActive})=>`${isActive?"text-orange-600":"text-gray-500"}`} to="/">Landing </NavLink></li>
                    <li><NavLink className={({isActive})=>`${isActive?"text-orange-600":"text-gray-500"}`} to="/about">About </NavLink></li>
                    <li><NavLink className={({isActive})=>`${isActive?"text-orange-600":"text-gray-500"}`} to="/user/:userid">User </NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;