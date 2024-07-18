import { Link } from "react-router-dom";
import Hello from "../components/hello";
import Welcome from "../components/welcome";

export default function HomePage() {
    const data = "David"
    return (
        <>
            <h1>{data}</h1>
            <Hello name={data} />
            <Welcome />
            <Link to={'/about'}>About Page</Link>
        </>
    );
}