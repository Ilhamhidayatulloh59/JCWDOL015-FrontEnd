import { IUser } from "@/app/type"

async function getData(id: string) {
    const res = await fetch(`http://localhost:2000/users/${id}`, {
        next: { tags: ["users"] }
    })

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    return res.json()
}

export async function generateMetadata({ params }: { params: { id: string } }) {
    const data: IUser = await getData(params.id)

    return {
        title: `My app | ${data.name}`,
        description: `Detail user ${data.name}`
    }
}

export default async function UserDetailPage({ params }: { params: { id: string }}) {
    const data: IUser = await getData(params.id)
    return (
        <div>
            <h1>Detail User With ID : {params.id}</h1>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Age: {data.age}</p>
        </div>
    )
}