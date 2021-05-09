import styles from '../../styles/users.module.css';
import Head from 'next/head'
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
                    <div key={user.id}>
                        <a className={styles.single}><h3>{user.name}</h3></a>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Ninja;