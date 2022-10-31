import Head from "next/head";
import { useRouter } from "next/router";

export default function Docs() {
    const router= useRouter()
    const {params = []} = router.query
    return <>
        <Head>
            <title>Docs Section</title>
        </Head>
        <p>Docs page</p>
    </>
}