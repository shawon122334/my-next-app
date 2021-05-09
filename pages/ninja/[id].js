export const getStaticPaths= async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths= data.map(user=>{
        return{
            params:{id:user.id.toString()}
        }
    })
    return{
        paths,
        fallback:false
    }
}
export const getStaticProps= async (context) =>{
    const id = context.params.id;
    const res=await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const data=await res.json();

    return{
        props:{user1:data}
    }
}
const Details = ({user1}) => {
    return ( 
        <div>
            <h1>{user1.name}</h1>
            <p>{user1.email}</p>
            <p>{user1.website}</p>
            <p>{user1.address.city}</p>
        </div>
     );
}
 
export default Details;