import UserContext from "../context/UserContext";
import { useContext } from "react";
const Info = () => {
    const { user } = useContext(UserContext);
    return (
        <h1>Name: {user.name}</h1>
    );
}

export default Info;