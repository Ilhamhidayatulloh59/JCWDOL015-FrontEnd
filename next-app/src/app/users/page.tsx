import Link from "next/link"

export default function UsersPage() {
    const data: string[] = ["Andi", "Budi", "Caca", "Dudi"]
    return (
        <div className="flex w-full flex-col items-center">
            {
                data.map((item) => {
                    return (
                        <Link href={`/users/${item}`} key={item}>{item}</Link>
                    )
                })
            }
        </div>
    )
}