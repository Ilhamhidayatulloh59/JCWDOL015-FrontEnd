import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex h-[70px] justify-center items-center bg-teal-500 text-black gap-3" >
            <Link to={'/'}>Users</Link>
            <Link to={'/create'}>Create</Link>
        </div>
    )
}