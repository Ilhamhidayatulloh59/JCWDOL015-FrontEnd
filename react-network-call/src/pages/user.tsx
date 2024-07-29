import axios from "axios"
import { useEffect, useState } from "react";
import { IUser } from "../type";

export default function Users() {
    const [users, setUsers] = useState<IUser[]>([])
    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:2000/users")
            // console.log(res.data);
            setUsers(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="flex justify-center">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}