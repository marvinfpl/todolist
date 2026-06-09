import {House, Settings, Info} from "lucide-react"
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="flex justify-around px-6 py-4 bg-slate-900 text-white">
                <Link to='/about'>
                    <Info size={32}/> 
                    <span>About Us</span>  
                </Link>
                <Link to='/'>
                    <House size={32}/>
                </Link>
                <Link to='settings'>
                    <Settings size={32}/>
                </Link>
        </nav>
    )
}