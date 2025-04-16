import { useParams } from "react-router"
const UserPage=()=>{
    const {userid} = useParams();
    return(
        <div className="text-xl text-blue-300">User id is {userid}</div>
    )
}
export default UserPage;