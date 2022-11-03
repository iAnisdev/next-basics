import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next"
import { NextParsedUrlQuery } from "next/dist/server/request-meta"
import Head from "next/head"
import { useRouter } from "next/router"
import styles from './user.module.scss'

interface IParams extends NextParsedUrlQuery {
    userId: any
}
interface User {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string
    }
    geo: {
        lat: string
        lng: string
    }
    phone: string
    website: string
    company: {
        name: string,
        catchPhrase: string
        bs: string
    }
}

interface UserProps {
    user: User
}


const UserProfile: NextPage<UserProps> = ({ user }) => {
    const { isFallback } = useRouter()
    if (isFallback) {
        return <h1>Loading...</h1>;
    }
    let titleMessage = `${user.name} Profile Page`
    return <>
        <Head>
            <title>{titleMessage}</title>
        </Head>
        <div className={styles.container}>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    </>
}

export default UserProfile

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { userId } = context.params as IParams
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const data: User = await response.json()
    return {
        props: {
            user: data
        }
    }
}

