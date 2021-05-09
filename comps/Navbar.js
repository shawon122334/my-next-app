import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.jpg" width={160} height={110}/>
            </div>
            
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninja"><a>Ninja Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;