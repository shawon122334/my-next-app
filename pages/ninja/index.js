import styles from '../../styles/users.module.css';
import Head from 'next/head'
import Link from 'next/link'
export const getStaticProps= async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await res.json();

    return{
        props:{users:data}
    }
}
const Ninja = ({users}) => {
    return (
        <>
            <Head>
                <title>Next App | Ninja</title>
            </Head>
            <div>
                <h1>All Users</h1>
                {users.map(user=>(
                    <Link href={'/ninja/'+user.id} key={user.id}>
                        <a className={styles.single}><h3>{user.name}</h3></a>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Ninja;