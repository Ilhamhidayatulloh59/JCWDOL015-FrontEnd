export default function UserDetailPage({ params }: { params: { name: string }}) {
    return (
        <div>
            <h1>Detail User : {params.name}</h1>
        </div>
    )
}