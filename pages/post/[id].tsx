import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { NextParsedUrlQuery } from "next/dist/server/request-meta"
import styles from './post.module.scss'

interface IParams extends NextParsedUrlQuery {
    id: any
}
interface Post {
    userId: number
    id: number
    title: string
    body: string
}


interface PostProps {
    post: Post
}

const PostIdpage: NextPage<PostProps> = ({post}) => {
    return <div className={styles.container}>
        <h3>{post.title}</h3>
        <br />
        <p>{post.body}</p>
    </div>
}

export default PostIdpage

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    const paths = data.map((post: Post) => ({
        params: { id: post.id.toString() },
    }))
    return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
    const { id } = context.params as IParams
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()
    return {
        props: {
            post: data
        }
    }
}
