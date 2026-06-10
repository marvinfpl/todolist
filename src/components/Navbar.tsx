import {House, Settings, Info} from "lucide-react"
import {Link} from "react-router-dom"

export default function Navbar() {
    /* ajouter thickness à la barre*/
    return (
        <nav className="flex justify-around px-6 py-4 bg-slate-900 text-white border border-black">
                <Link to='/about' className="flex flex-col items-center">
                    <Info size={32}/> 
                    <span>About Us</span>  
                </Link>
                <Link to='/' className="flex flex-col items-center">
                    <House size={32}/>
                    <span>Home</span>
                </Link>
                <Link to='settings' className="flex flex-col items-center">
                    <Settings size={32} />
                    <span>Settings</span>
                </Link>
        </nav>
    )
}