import Navbar from "@/components/Navbar.tsx"
import Theme from "@/components/Theme.tsx"

export default function Settings() {
    return (
        <div className="min-h-screen bg-slate-900">
            <Navbar/>
            <Theme/>
        </div>
    )
}