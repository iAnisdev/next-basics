import type { NextPage, GetStaticProps } from "next"

interface user {
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
  users: user[]
}

const users: NextPage<UserProps> = (props) => {
  let listofUsers = props.users.map((user: user) => {
    return <li key={user.id}>{user.username}</li>
  })
  return (
    <div>
      <ul>
        {listofUsers}
      </ul>
      {process.env.NEXT_PUBLIC_ASSET_ID}
    </div>
  )
}

export default users

export const getStaticProps: GetStaticProps<UserProps> = async (context) => {
  console.log(process.env.SERVER_CONFIG)
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return {
    props: {
      users: data
    }
  }
}