import { useRouter } from "next/router"
export default function PostIdpage() {
    const router = useRouter()
    return <>
        <div>Post with id <b>{router.query.id}</b>  page</div>
    </>
}