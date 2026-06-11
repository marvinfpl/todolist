import {House, Settings, Info} from "lucide-react"
import {Link} from "react-router-dom"

//bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out shadow-lg shadow-blue-500/50 rounded-full

export default function Navbar() {
    return (
        <nav className="flex justify-around px-6 py-4 bg-slate-900 text-white border-2 border-black">
                <Link to='/about' className="flex flex-col items-center text-white hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-200">
                    <Info size={40}/> 
                    <span>About Us</span>  
                </Link>
                <Link to='/' className="flex flex-col items-center text-white hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-200">
                    <House size={40}/>
                    <span>Home</span>
                </Link>
                <Link to='/settings' className="flex flex-col items-center text-white hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-200">
                    <Settings size={40} />
                    <span>Settings</span>
                </Link>
        </nav>
    )
}