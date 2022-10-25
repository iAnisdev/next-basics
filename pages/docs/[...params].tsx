import Head from "next/head";
import { useRouter } from "next/router";

export default function Docs() {
    const router= useRouter()
    console.log(router.query)
    const {params = []} = router.query
    console.log(params)
    return <>
        <Head>
            <title>Docs Section</title>
        </Head>
        <p>Docs page</p>
    </>
}