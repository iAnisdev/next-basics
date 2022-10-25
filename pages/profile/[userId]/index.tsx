import { useRouter } from "next/router"
export default function UserProfile() {
    const router = useRouter()
    return <>
        <div>Profile with id <b>{router.query.userId}</b>  page</div>
    </>
}