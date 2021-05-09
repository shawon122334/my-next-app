import Link from 'next/link'
const NotFound = () => {
    return ( 
        <div className="notFound">
            <h1>Opssss...</h1>
            <h2>That page can not be found</h2>
            <p>Go back to <Link href="/"><a>HomePage</a></Link></p>
        </div>
     );
}
 
export default NotFound;